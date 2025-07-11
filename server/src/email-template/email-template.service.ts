import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmailTemplateService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.emailTemplate.findMany();
  }

  async getById(id: string) {
    return await this.prisma.emailTemplate.findUnique({
      where: {
        id,
      },
    });
  }

  async create(data: any) {
    return await this.prisma.emailTemplate.create({
      data,
    });
  }

  async update(id: string, data: any) {
    return await this.prisma.emailTemplate.update({
      where: {
        id,
      },
      data,
    });
  }

  async delete(id: string) {
    return await this.prisma.emailTemplate.delete({
      where: {
        id,
      },
    });
  }
}
