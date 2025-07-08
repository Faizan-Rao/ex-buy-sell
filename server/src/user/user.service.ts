import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import type { UpdateUserType, UserType } from './dto/user.dto';
@Injectable()
export class UserService {
  constructor(private db: PrismaService) {}
  async findAll() {
    return await this.db.user.findMany({
      omit: {
        password_hash: true,
      },
    });
  }

  async findOneByEmail(email: string) {
    return this.db.user.findFirst({ where: { email: email } });
  }

  async findOneByID(id: string) {
    return this.db.user.findFirst({ where: { id: id } });
  }

  async createUser(body) {
    return await this.db.user.create({ data: body });
  }

  async updateUser(id: string, body: UpdateUserType) {
    return await this.db.user.update({ where: { id: id }, data: body });
  }

  async deleteUser(id: string) {
    return await this.db.user.delete({ where: { id: id } });
  }
}
