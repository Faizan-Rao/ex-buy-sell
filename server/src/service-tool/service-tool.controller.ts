import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ServiceToolService } from './service-tool.service';
import { Roles } from 'common/decorator/roles.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfig } from './config/multer.config';

@Roles(['ADMIN', 'MONITER'])
@Controller('service-tool')
export class ServiceToolController {
  constructor(private readonly serviceToolService: ServiceToolService) {}
  @Roles(['ADMIN', 'MONITER', 'USER'])
  @Get()
  async getAll() {
    return await this.serviceToolService.getAll();
  }
  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.serviceToolService.getById(id);
  }

  @UseInterceptors(FileInterceptor('image', multerConfig))
  @Post()
  async create(@UploadedFile() file: Express.Multer.File, @Body() data) {
    if (file) {
      data.image_path = file.path.replaceAll('\\', '/');
    }
    return await this.serviceToolService.create(data);
  }

  @UseInterceptors(FileInterceptor('image', multerConfig))
  @Put(':id')
  async update(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() data,
  ) {
    if (file) {
      data.image_path = file.path.replaceAll('\\', '/');
    }
    return await this.serviceToolService.update(id, data);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.serviceToolService.delete(id);
  }
}
