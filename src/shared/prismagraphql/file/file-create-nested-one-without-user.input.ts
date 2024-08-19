import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { fileCreateWithoutUserInput } from './file-create-without-user.input';
import { Type } from 'class-transformer';
import { fileCreateOrConnectWithoutUserInput } from './file-create-or-connect-without-user.input';
import { Prisma } from '@prisma/client';
import { fileWhereUniqueInput } from './file-where-unique.input';

@InputType()
export class fileCreateNestedOneWithoutUserInput {

    @Field(() => fileCreateWithoutUserInput, {nullable:true})
    @Type(() => fileCreateWithoutUserInput)
    create?: fileCreateWithoutUserInput;

    @Field(() => fileCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => fileCreateOrConnectWithoutUserInput)
    connectOrCreate?: fileCreateOrConnectWithoutUserInput;

    @Field(() => fileWhereUniqueInput, {nullable:true})
    @Type(() => fileWhereUniqueInput)
    connect?: Prisma.AtLeast<fileWhereUniqueInput, 'id'>;
}
