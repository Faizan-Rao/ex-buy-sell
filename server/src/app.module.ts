import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PlanModule } from './plan/plan.module';
import { EmailTemplateModule } from './email-template/email-template.module';
import { CategoryModule } from './category/category.module';
import { AuthGuard } from 'common/guard/auth.guard';
import { RolesGuard } from 'common/guard/role.guard';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ServiceToolModule } from './service-tool/service-tool.module';
import { SocialModule } from './social/social.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UserModule,
    PlanModule,
    EmailTemplateModule,
    CategoryModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'uploads'),
      serveRoot: '/uploads',
    }),
    ServiceToolModule,
    SocialModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthGuard, RolesGuard],
})
export class AppModule {}
