import { PartialType } from '@nestjs/mapped-types';
import { CreateTestingNestAppDto } from './create-testing-nest-app.dto';

export class UpdateTestingNestAppDto extends PartialType(CreateTestingNestAppDto) {}
