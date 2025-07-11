import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PlanService } from './plan.service';
import { ZodValidationPipe } from 'common/validator/zod.validator';
import { createPlanSchema } from './dto/create-plan.dto';
import { updatePlanSchema } from './dto/update-plan.dto';
import { Roles } from 'common/decorator/roles.decorator';
@Roles(['ADMIN', 'MONITER'])
@Controller('plan')
export class PlanController {
  constructor(private readonly planService: PlanService) {}
  @Roles(['ADMIN', 'MONITER', 'USER'])
  @Get()
  async getAll() {
    return await this.planService.getAll();
  }
  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.planService.getById(id);
  }

  @Post()
  async create(@Body(new ZodValidationPipe(createPlanSchema)) data) {
    return await this.planService.create(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updatePlanSchema)) data,
  ) {
    return await this.planService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.planService.delete(id);
  }
}
