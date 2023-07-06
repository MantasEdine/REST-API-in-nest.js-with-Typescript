import { ForbiddenException, Injectable, Body } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import {
  PrismaClientInitializationError,
  PrismaClientKnownRequestError,
} from '@prisma/client/runtime';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async login(loggerInfos: AuthDto) {
    try {
      const test = await this.prisma.user.findUnique({
        where: { email: loggerInfos.email },
      });
      if (!test) {
        throw new ForbiddenException('wrong credentials$$$');
      }
      const comparePasswords = await argon.verify(
        test.hashP,
        loggerInfos.password,
      );
      if (!comparePasswords)
        throw new ForbiddenException('wrong credentials$$$');
      delete test.hashP;

      return test;
    } catch (error) {}
  }

  async signUp(UserInfos: AuthDto) {
    try {
      const hash = await argon.hash(UserInfos.password);

      const newUser = await this.prisma.user.create({
        data: {
          email: UserInfos.email,
          hashP: hash,
        },
      });
      delete newUser.hashP;
      if (!newUser) {
        throw new Error('User wasn\t created');
      }
      return {
        email: newUser.email,
      };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credientials Taken');
        }
      }
      throw error;
    }
  }
}
