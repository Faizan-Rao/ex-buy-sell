import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { ListingService } from './listing.service';

import { listingSchema, ListingSchemaDTO } from './dto/create-listing.dto';
import { ZodValidationPipe } from 'common/validator/zod.validator';
import { UpdateListing, UpdateListingDTO } from './dto/update-listing.dto';
import { ApiBody, ApiParam } from '@nestjs/swagger';

@Controller('listing')
export class ListingController {
  constructor(private readonly listingService: ListingService) {}

  @Get()
  findAll() {
    return this.listingService.findAll();
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Listing Id',
    required: true,
  })
  findOne(@Param('id') id: string) {
    return this.listingService.findOne(id);
  }

  @Post()
  @ApiBody({ type: () => ListingSchemaDTO })
  create(
    @Req() req: Request,
    @Body(new ZodValidationPipe(listingSchema)) body,
  ) {
    const { id } = (req as any).user;

    return this.listingService.create(id, body);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Listing Id',
    required: true,
  })
  @ApiBody({ type: () => UpdateListingDTO })
  update(
    @Req() req: Request,
    @Param('id') id: string,
    @Body(new ZodValidationPipe(UpdateListing)) body,
  ) {
    const { id: userId } = (req as any).user;
    return this.listingService.update(id, userId, body);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Listing Id',
    required: true,
  })
  delete(@Param('id') id: string) {
    return this.listingService.delete(id);
  }
}
