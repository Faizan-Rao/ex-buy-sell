import { Module } from '@nestjs/common';
import { ServiceToolController } from './service-tool.controller';
import { ServiceToolService } from './service-tool.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ServiceToolController],
  providers: [ServiceToolService],
})
export class ServiceToolModule {}
