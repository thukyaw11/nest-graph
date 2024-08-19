import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { fileCreateWithoutUserInput } from './file-create-without-user.input';
import { Type } from 'class-transformer';
import { fileCreateOrConnectWithoutUserInput } from './file-create-or-connect-without-user.input';
import { fileUpsertWithoutUserInput } from './file-upsert-without-user.input';
import { fileWhereInput } from './file-where.input';
import { Prisma } from '@prisma/client';
import { fileWhereUniqueInput } from './file-where-unique.input';
import { fileUpdateToOneWithWhereWithoutUserInput } from './file-update-to-one-with-where-without-user.input';

@InputType()
export class fileUpdateOneWithoutUserNestedInput {

    @Field(() => fileCreateWithoutUserInput, {nullable:true})
    @Type(() => fileCreateWithoutUserInput)
    create?: fileCreateWithoutUserInput;

    @Field(() => fileCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => fileCreateOrConnectWithoutUserInput)
    connectOrCreate?: fileCreateOrConnectWithoutUserInput;

    @Field(() => fileUpsertWithoutUserInput, {nullable:true})
    @Type(() => fileUpsertWithoutUserInput)
    upsert?: fileUpsertWithoutUserInput;

    @Field(() => fileWhereInput, {nullable:true})
    @Type(() => fileWhereInput)
    disconnect?: fileWhereInput;

    @Field(() => fileWhereInput, {nullable:true})
    @Type(() => fileWhereInput)
    delete?: fileWhereInput;

    @Field(() => fileWhereUniqueInput, {nullable:true})
    @Type(() => fileWhereUniqueInput)
    connect?: Prisma.AtLeast<fileWhereUniqueInput, 'id'>;

    @Field(() => fileUpdateToOneWithWhereWithoutUserInput, {nullable:true})
    @Type(() => fileUpdateToOneWithWhereWithoutUserInput)
    update?: fileUpdateToOneWithWhereWithoutUserInput;
}
