import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TestingNestAppModule } from './testing-nest-app/testing-nest-app.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, TestingNestAppModule, UserModule, BookmarkModule, PrismaModule],
})
export class AppModule {}
