import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { UserService } from 'src/modules/user/user.service';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly dbService: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET_KEY,
      ignoreExpiration: false,
    });
  }

  async validate(payload: {
    id: string;
    email: string;
    iat: number;
    exp: number;
  }) {
    const user = await this.dbService.user.findUnique({
      where: {
        email: payload.email,
      }
    });
    if (!user) {
      throw new UnauthorizedException(
        'Invalid Token',
      );
    }
    return user;
  }
}
