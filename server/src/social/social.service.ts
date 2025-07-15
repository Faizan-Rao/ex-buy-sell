import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SocialSchemaType } from './dto/create-social.dto';
import { UpdateSocialSchema } from './dto/update-social.dto';

@Injectable()
export class SocialService {
  constructor(private readonly db: PrismaService) {}

  async findAllById(id: string) {
    return await this.db.socialAccount.findMany({
      where: {
        id,
      },
    });
  }

  async findOne(id: string) {
    return await this.db.socialAccount.findUnique({
      where: {
        id,
      },
    });
  }

  async create(userId: string, data: SocialSchemaType) {
    return await this.db.socialAccount.create({
      data: {
        ...data,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  async update(id: string, data: UpdateSocialSchema) {
    return await this.db.socialAccount.update({
      where: {
        id,
      },
      data: {
        ...data,
        user: {
          connect: {
            id: data['userId'],
          },
        },
      },
    });
  }

  async delete(id: string) {
    return await this.db.socialAccount.delete({
      where: {
        id,
      },
    });
  }
}
