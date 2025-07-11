import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.category.findMany();
  }

  async getById(id: string) {
    return await this.prisma.category.findUnique({
      where: {
        id,
      },
    });
  }

  async create(data: any) {
    return await this.prisma.category.create({
      data,
    });
  }

  async update(id: string, data: any) {
    return await this.prisma.category.update({
      where: {
        id,
      },
      data,
    });
  }

  async delete(id: string) {
    return await this.prisma.category.delete({
      where: {
        id,
      },
    });
  }
}
