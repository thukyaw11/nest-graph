import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserImageInput } from './user-create-without-user-image.input';

@InputType()
export class UserCreateOrConnectWithoutUserImageInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutUserImageInput, {nullable:false})
    @Type(() => UserCreateWithoutUserImageInput)
    create!: UserCreateWithoutUserImageInput;
}
