import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  loginFunc(@Body() dto: AuthDto) {
    return this.authService.login(dto);
  }
  @Post('signup')
  signUpFunc(@Body() dto: AuthDto) {
    return this.authService.signUp(dto);
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return { id };
  }
}
