import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { EmailTemplateService } from './email-template.service';
import { ZodValidationPipe } from 'common/validator/zod.validator';
import { createEmailSchema } from './dto/create-email.dto';
import { updateEmailSchema } from './dto/update-email.dto';

@Controller('email-template')
export class EmailTemplateController {
  constructor(private readonly emailTemplateService: EmailTemplateService) {}

  @Get()
  async getAll() {
    return await this.emailTemplateService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.emailTemplateService.getById(id);
  }

  @Post()
  async create(@Body(new ZodValidationPipe(createEmailSchema)) data) {
    return await this.emailTemplateService.create(data);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateEmailSchema)) body,
  ) {
    return await this.emailTemplateService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.emailTemplateService.delete(id);
  }
}
