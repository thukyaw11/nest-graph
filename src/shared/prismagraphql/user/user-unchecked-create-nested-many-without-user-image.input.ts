import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserImageInput } from './user-create-without-user-image.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserImageInput } from './user-create-or-connect-without-user-image.input';
import { UserCreateManyUserImageInputEnvelope } from './user-create-many-user-image-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedManyWithoutUserImageInput {

    @Field(() => [UserCreateWithoutUserImageInput], {nullable:true})
    @Type(() => UserCreateWithoutUserImageInput)
    create?: Array<UserCreateWithoutUserImageInput>;

    @Field(() => [UserCreateOrConnectWithoutUserImageInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserImageInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutUserImageInput>;

    @Field(() => UserCreateManyUserImageInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyUserImageInputEnvelope)
    createMany?: UserCreateManyUserImageInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
}
