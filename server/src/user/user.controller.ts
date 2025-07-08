import {
  Controller,
  Get,
  Param,
  Patch,
  Body,
  Post,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ZodValidationPipe } from 'common/validator/zod.validator';
import {
  UserSchema,
  UserSchemaDTO,
  UserUpdateSchema,
  UserUpdateSchemaDTO,
} from './dto/user.dto';
import { Roles } from 'common/decorator/roles.decorator';
import { RolesGuard } from 'common/guard/role.guard';
import { ApiBody, ApiParam } from '@nestjs/swagger';

@Roles(['USER'])
@UseGuards(RolesGuard)
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: 'User ID', type: String })
  findOne(@Param('id') id: string) {
    return this.userService.findOneByID(id);
  }

  @Post()
  @ApiBody({ type: () => UserSchemaDTO })
  createUser(@Body(new ZodValidationPipe(UserSchema)) body) {
    return this.userService.createUser(body);
  }

  @Patch(':id')
  @ApiBody({ type: () => UserUpdateSchemaDTO })
  @ApiParam({ name: 'id', description: 'User ID', type: String })
  updateUser(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(UserUpdateSchema)) body,
  ) {
    return this.userService.updateUser(id, body);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', description: 'User ID', type: String })
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
