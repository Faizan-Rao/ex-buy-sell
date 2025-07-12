import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { ZodValidationPipe } from 'common/validator/zod.validator';
import {
  CreateCategoryDto,
  createCategorySchema,
} from './dto/create-category.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfig } from './config/multer.config';
import { Roles } from 'common/decorator/roles.decorator';
import { ApiBody, ApiParam } from '@nestjs/swagger';
@Roles(['ADMIN', 'MONITER'])
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @Roles(['ADMIN', 'MONITER', 'USER'])
  @Get()
  async getAll() {
    return await this.categoryService.getAll();
  }
  @ApiParam({ name: 'id', description: 'Category ID', type: String })
  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.categoryService.getById(id);
  }
  @ApiBody({ type: () => CreateCategoryDto })
  @UseInterceptors(FileInterceptor('image', multerConfig))
  @Post()
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body(new ZodValidationPipe(createCategorySchema)) body,
  ) {
    if (file) {
      body.image_path = file.path.replaceAll('\\', '/');
    }
    return await this.categoryService.create(body);
  }

  @UseInterceptors(FileInterceptor('image', multerConfig))
  @ApiParam({ name: 'id', description: 'Category ID', type: String })
  @ApiBody({ type: () => CreateCategoryDto })
  @Patch(':id')
  async update(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: string,
    @Body(new ZodValidationPipe(createCategorySchema)) body,
  ) {
    if (file) {
      body.image_path = file.path.replaceAll('\\', '/');
    }
    return await this.categoryService.update(id, body);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', description: 'Category ID', type: String })
  async delete(@Param() id: string) {
    return await this.categoryService.delete(id);
  }
}
