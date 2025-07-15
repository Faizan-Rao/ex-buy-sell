import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Delete,
  Req,
  Patch,
} from '@nestjs/common';
import { SocialService } from './social.service';
import { Roles } from 'common/decorator/roles.decorator';

import { CreateSocialDto, SocialSchema } from './dto/create-social.dto';
import { ZodValidationPipe } from 'common/validator/zod.validator';
import { UpdateSocialDto, UpdateSocialSchema } from './dto/update-social.dto';
import { ApiBody, ApiParam } from '@nestjs/swagger';

@Roles(['USER', 'ADMIN', 'MONITER'])
@Controller('social')
export class SocialController {
  constructor(private socialService: SocialService) {}

  @Get()
  findAll(@Req() req: Request) {
    const { id } = (req as any).user;
    return this.socialService.findAllById(id);
  }

  @Post()
  @ApiBody({ type: () => CreateSocialDto })
  create(@Req() req: Request, @Body(new ZodValidationPipe(SocialSchema)) data) {
    const { id } = (req as any).user;
    return this.socialService.create(id, data);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', type: String, description: 'Social Account ID' })
  @ApiBody({ type: () => UpdateSocialDto })
  update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(UpdateSocialSchema)) data,
  ) {
    return this.socialService.update(id, data);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: String, description: 'Social Account ID' })
  delete(@Param('id') id: string) {
    return this.socialService.delete(id);
  }
}
