import { Module } from '@nestjs/common';
import { TestingNestAppService } from './testing-nest-app.service';
import { TestingNestAppController } from './testing-nest-app.controller';

@Module({
  controllers: [TestingNestAppController],
  providers: [TestingNestAppService]
})
export class TestingNestAppModule {}
