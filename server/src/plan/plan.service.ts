import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PlanService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.plan.findMany();
  }

  async getById(id: string) {
    return await this.prisma.plan.findUnique({
      where: {
        id,
      },
    });
  }
  async create(data: any) {
    return await this.prisma.plan.create({
      data,
    });
  }
  async update(id: string, data: any) {
    return await this.prisma.plan.update({
      where: {
        id,
      },
      data,
    });
  }

  async delete(id: string) {
    return await this.prisma.plan.delete({
      where: {
        id,
      },
    });
  }
}
