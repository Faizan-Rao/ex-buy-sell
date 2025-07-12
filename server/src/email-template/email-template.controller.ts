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
import { createEmailSchema, CreateEmailDto } from './dto/create-email.dto';
import { updateEmailSchema, UpdateEmailDto } from './dto/update-email.dto';
import { ApiBody, ApiParam } from '@nestjs/swagger';

@Controller('email-template')
export class EmailTemplateController {
  constructor(private readonly emailTemplateService: EmailTemplateService) {}

  @Get()
  async getAll() {
    return await this.emailTemplateService.getAll();
  }
  @ApiParam({ name: 'id', description: 'Email Template ID', type: String })
  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.emailTemplateService.getById(id);
  }
  @Post()
  @ApiBody({ type: () => CreateEmailDto })
  async create(@Body(new ZodValidationPipe(createEmailSchema)) data) {
    return await this.emailTemplateService.create(data);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', description: 'Email Template ID', type: String })
  @ApiBody({ type: () => UpdateEmailDto })
  async update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateEmailSchema)) body,
  ) {
    return await this.emailTemplateService.update(id, body);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', description: 'Email Template ID', type: String })
  async delete(@Param('id') id: string) {
    return await this.emailTemplateService.delete(id);
  }
}
