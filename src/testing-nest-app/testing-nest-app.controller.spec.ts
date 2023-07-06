import { Test, TestingModule } from '@nestjs/testing';
import { TestingNestAppController } from './testing-nest-app.controller';
import { TestingNestAppService } from './testing-nest-app.service';

describe('TestingNestAppController', () => {
  let controller: TestingNestAppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestingNestAppController],
      providers: [TestingNestAppService],
    }).compile();

    controller = module.get<TestingNestAppController>(TestingNestAppController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
