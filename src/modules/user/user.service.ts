import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma.service';
import { hashPassword } from 'src/utils/hashPassword';
import { UserLoginInput } from './dto/login-user.input';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { AuthResponse } from 'src/shared/response/AuthResponse';
import * as Upload from 'graphql-upload/Upload.js';
import { join } from 'path';
import { createWriteStream, existsSync, mkdirSync } from 'fs';

@Injectable()
export class UserService {
  constructor(
    private readonly dbService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async create(createUserInput: CreateUserInput, image: Upload) {
    const hashedPassword: string = await hashPassword(createUserInput.password);

    await this.uploadImage(image);
    return this.dbService.user.create({
      data: {
        email: createUserInput.email,
        name: createUserInput.name,
        password: hashedPassword,
      },
    });
  }

  async uploadImage(image: Upload) {
    const file = await image;
    return new Promise((resolve, reject) => {
      const dirPath = join(process.cwd(), 'uploads');

      if (!existsSync(dirPath)) {
        mkdirSync(dirPath, { recursive: true });
      }

      file
        .createReadStream()
        .pipe(createWriteStream(`${dirPath}/${file.filename}`))
        .on('finish', () => {
          resolve(true);
        })
        .on('error', (error) => {
          console.log('IMAGE_UPLOAD_ERROR', error);
          reject(false);
        });
    });
  }

  async login(loginUserInput: UserLoginInput): Promise<AuthResponse> {
    const targetedUser = await this.dbService.user.findUnique({
      where: { email: loginUserInput.email },
    });

    if (!targetedUser) {
      throw new BadRequestException({
        message: 'Wrong credentials',
        code: HttpStatus.NOT_FOUND,
      });
    }

    const isPasswordValid = await argon2.verify(
      targetedUser.password!,
      loginUserInput.password,
    );

    if (!isPasswordValid) {
      throw new BadRequestException({
        message: 'Password is not valid',
        code: HttpStatus.BAD_REQUEST,
      });
    }

    const payload = {
      id: targetedUser.id,
      email: targetedUser.email,
    };

    const accessToken = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET_KEY,
      expiresIn: '182d',
    });

    return {
      user: targetedUser,
      accessToken,
    };
  }

  findAll() {
    return this.dbService.user.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
