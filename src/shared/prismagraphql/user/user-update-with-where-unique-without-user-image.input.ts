import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutUserImageInput } from './user-update-without-user-image.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutUserImageInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateWithoutUserImageInput, {nullable:false})
    @Type(() => UserUpdateWithoutUserImageInput)
    data!: UserUpdateWithoutUserImageInput;
}
