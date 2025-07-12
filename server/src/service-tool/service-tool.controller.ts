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
import { ApiBody, ApiParam } from '@nestjs/swagger';
import { CreateServiceToolDto } from './dto/create-service-tool.dto';
import { UpdateServiceToolDto } from './dto/update-service-tool.dto';

@Roles(['ADMIN', 'MONITER'])
@Controller('service-tool')
export class ServiceToolController {
  constructor(private readonly serviceToolService: ServiceToolService) {}
  @Roles(['ADMIN', 'MONITER', 'USER'])
  @Get()
  async getAll() {
    return await this.serviceToolService.getAll();
  }

  @ApiParam({ name: 'id', description: 'Service Tool ID', type: String })
  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.serviceToolService.getById(id);
  }

  @UseInterceptors(FileInterceptor('image', multerConfig))
  @ApiBody({ type: () => CreateServiceToolDto })
  @Post()
  async create(@UploadedFile() file: Express.Multer.File, @Body() data) {
    if (file) {
      data.image_path = file.path.replaceAll('\\', '/');
    }
    return await this.serviceToolService.create(data);
  }

  @UseInterceptors(FileInterceptor('image', multerConfig))
  @ApiParam({ name: 'id', description: 'Service Tool ID', type: String })
  @ApiBody({ type: () => UpdateServiceToolDto })
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
  @ApiParam({ name: 'id', description: 'Service Tool ID', type: String })
  async delete(@Param('id') id: string) {
    return await this.serviceToolService.delete(id);
  }
}
