import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserImageInput } from './user-create-without-user-image.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserImageInput } from './user-create-or-connect-without-user-image.input';
import { UserUpsertWithWhereUniqueWithoutUserImageInput } from './user-upsert-with-where-unique-without-user-image.input';
import { UserCreateManyUserImageInputEnvelope } from './user-create-many-user-image-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutUserImageInput } from './user-update-with-where-unique-without-user-image.input';
import { UserUpdateManyWithWhereWithoutUserImageInput } from './user-update-many-with-where-without-user-image.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutUserImageNestedInput {

    @Field(() => [UserCreateWithoutUserImageInput], {nullable:true})
    @Type(() => UserCreateWithoutUserImageInput)
    create?: Array<UserCreateWithoutUserImageInput>;

    @Field(() => [UserCreateOrConnectWithoutUserImageInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserImageInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutUserImageInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutUserImageInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutUserImageInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutUserImageInput>;

    @Field(() => UserCreateManyUserImageInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyUserImageInputEnvelope)
    createMany?: UserCreateManyUserImageInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutUserImageInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutUserImageInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutUserImageInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutUserImageInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutUserImageInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutUserImageInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
