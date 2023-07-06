import { Injectable } from '@nestjs/common';
import { CreateTestingNestAppDto } from './dto/create-testing-nest-app.dto';
import { UpdateTestingNestAppDto } from './dto/update-testing-nest-app.dto';

@Injectable()
export class TestingNestAppService {
  create(createTestingNestAppDto: CreateTestingNestAppDto) {
    return 'This action adds a new testingNestApp';
  }

  findAll() {
    return `This action returns all testingNestApp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testingNestApp`;
  }

  update(id: number, updateTestingNestAppDto: UpdateTestingNestAppDto) {
    return `This action updates a #${id} testingNestApp`;
  }

  remove(id: number) {
    return `This action removes a #${id} testingNestApp`;
  }
}
