import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestingNestAppService } from './testing-nest-app.service';
import { CreateTestingNestAppDto } from './dto/create-testing-nest-app.dto';
import { UpdateTestingNestAppDto } from './dto/update-testing-nest-app.dto';

@Controller('testing-nest-app')
export class TestingNestAppController {
  constructor(private readonly testingNestAppService: TestingNestAppService) {}

  @Post()
  create(@Body() createTestingNestAppDto: CreateTestingNestAppDto) {
    return this.testingNestAppService.create(createTestingNestAppDto);
  }

  @Get()
  findAll() {
    return this.testingNestAppService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testingNestAppService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestingNestAppDto: UpdateTestingNestAppDto) {
    return this.testingNestAppService.update(+id, updateTestingNestAppDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testingNestAppService.remove(+id);
  }
}
