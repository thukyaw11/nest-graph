import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaService } from 'src/prisma.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from '../auth/strategy/jwt.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: {
        expiresIn: "182d",
      },
    }),
  ],
  providers: [UserResolver, UserService, PrismaService, JwtService, JwtStrategy],
  exports: [UserService]
})
export class UserModule {}
