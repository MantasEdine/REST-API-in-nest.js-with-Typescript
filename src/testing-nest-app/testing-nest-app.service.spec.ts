import { Test, TestingModule } from '@nestjs/testing';
import { TestingNestAppService } from './testing-nest-app.service';

describe('TestingNestAppService', () => {
  let service: TestingNestAppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestingNestAppService],
    }).compile();

    service = module.get<TestingNestAppService>(TestingNestAppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
