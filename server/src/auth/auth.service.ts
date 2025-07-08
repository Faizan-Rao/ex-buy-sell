import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SignUpSchemaType } from 'src/auth/dto/signup-user.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { signInSchema, SignInSchemaType } from './dto/signin.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  // SignUp Service
  async signUp(body: SignUpSchemaType): Promise<unknown> {
    const { password, confirm_password, email } = body;

    // Check Password If They are Matched
    if (this.checkPassword(password, confirm_password))
      throw new HttpException(
        `${this.constructor.name}: Password do not matched`,
        HttpStatus.FORBIDDEN,
      );

    // Check if User Exist
    if (await this.isUserExist(email))
      throw new HttpException(
        `${this.constructor.name}: User Already Exists`,
        HttpStatus.CONFLICT,
      );

    const hash = await this.hashData(password);

    const payload = {
      role: process.env.DEFAULT_ROLE,
      email,
      passwordHash: hash,
      first_name: body.first_name,
      last_name: body.last_name,
    };

    const user = await this.userService.createUser(payload);

    let formattedUser = this.formatResponse(user);
    const { accessToken, refreshToken } = await this.getTokens(user);

    const hashedToken = await this.hashData(refreshToken);

    const loggedInUser = await this.userService.updateUser(user.id, {
      refresh_token: hashedToken,
    });
    formattedUser = this.formatResponse(loggedInUser);

    return {
      user: formattedUser,
      tokens: { accessToken, refreshToken: refreshToken },
    };
  }

  // SignIn Service
  async signIn(body: SignInSchemaType): Promise<unknown> {
    const { email, password } = body;
    const user = await this.userService.findOneByEmail(email);

    // Validation Checks
    if (!user)
      throw new HttpException(
        `${this.constructor.name}: User Not Found`,
        HttpStatus.NOT_FOUND,
      );

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch)
      throw new HttpException(
        `${this.constructor.name}: Invalid Credentials`,
        HttpStatus.FORBIDDEN,
      );

    // Removing Unnecessary Data & Getting Tokens
    let formattedUser = this.formatResponse(user);
    const { accessToken, refreshToken } = await this.getTokens(user);

    // Updating Refresh Token
    const hashedToken = await this.hashData(refreshToken);
    const loggedInUser = await this.userService.updateUser(user.id, {
      refresh_token: hashedToken,
    });

    // Formatting Response
    formattedUser = this.formatResponse(loggedInUser);

    return {
      user: formattedUser,
      tokens: { accessToken, refreshToken: refreshToken },
    };
  }

  // Logout Service
  async logout(userId: string) {
    const user = await this.userService.findOneByID(userId);
    if (!user) throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    await this.userService.updateUser(userId, { refresh_token: null });
    return true;
  }

  // Refresh Token Service
  async updateRefreshToken(userId: string, refreshToken: string) {
    const user = await this.userService.findOneByID(userId);

    const isValid = await bcrypt.compare(
      refreshToken,
      user?.refresh_token as string,
    );

    if (!isValid) {
      await this.userService.updateUser(userId, { refresh_token: null });
      throw new HttpException(
        `${this.constructor.name}: Invalid Refresh Token`,
        HttpStatus.FORBIDDEN,
      );
    }

    const { accessToken, refreshToken: newRefreshToken } =
      await this.getTokens(user);

    const hashed = await this.hashData(newRefreshToken);
    const newUser = await this.userService.updateUser(userId, {
      refresh_token: hashed,
    });
    const formattedUser = this.formatResponse(newUser);
    return {
      user: formattedUser,
      tokens: { accessToken, refreshToken: newRefreshToken },
    };
  }

  // Helper Functions
  checkPassword(password: string, confirm_password: string) {
    if (password.toLowerCase().trim() !== confirm_password.toLowerCase().trim())
      return true;
    return false;
  }

  async isUserExist(email: string) {
    const user = await this.userService.findOneByEmail(email);
    if (user) return true;
    return false;
  }

  async hashData(password: string) {
    const saltOrRounds = 10;
    return await bcrypt.hash(password, saltOrRounds);
  }

  formatResponse(data: any) {
    delete data['passwordHash'];
    if (data['refreshToken']) delete data['refreshToken'];
    return data;
  }

  async addToken(payload: any) {
    payload['accessToken'] = await this.jwtService.signAsync(payload);
    const response = this.formatResponse(payload);
    return response;
  }

  async getTokens(payload: any) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.JWT_SECRET,
        expiresIn: '7h',
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.JWT_REFRESH_SECRET,
        expiresIn: '7d',
      }),
    ]);
    return { accessToken, refreshToken };
  }
}
