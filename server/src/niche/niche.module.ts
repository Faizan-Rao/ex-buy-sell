import { Module } from '@nestjs/common';
import { NicheController } from './niche.controller';
import { NicheService } from './niche.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [NicheController],
  providers: [NicheService],
})
export class NicheModule {}
