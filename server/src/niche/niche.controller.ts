import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { NicheService } from './niche.service';
import { ZodValidationPipe } from 'common/validator/zod.validator';
import { NicheOptionDto, NicheOptionSchema } from './dto/create-niche.dto';
import { ApiBody, ApiParam } from '@nestjs/swagger';
import { UpdateNicheOptionSchema } from './dto/update-niche.dto';
import { Roles } from 'common/decorator/roles.decorator';

@Roles(['ADMIN', 'MONITER'])
@Controller('niche')
export class NicheController {
  constructor(private readonly nicheService: NicheService) {}

  @Roles(['ADMIN', 'MONITER', 'USER'])
  @Get()
  findAll() {
    return this.nicheService.findAll();
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    required: true,
    type: String,
    description: 'Niche ID',
  })
  findOne(@Param('id') id: string) {
    return this.nicheService.findOne(id);
  }

  @Post()
  @ApiBody({ type: () => NicheOptionDto })
  create(@Body(new ZodValidationPipe(NicheOptionSchema)) body) {
    return this.nicheService.create(body);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    required: true,
    type: String,
    description: 'Niche ID',
  })
  @ApiBody({ type: () => NicheOptionDto })
  update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(UpdateNicheOptionSchema)) body,
  ) {
    return this.nicheService.update(id, body);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    required: true,
    type: String,
    description: 'Niche ID',
  })
  remove(@Param('id') id: string) {
    return this.nicheService.remove(id);
  }
}
