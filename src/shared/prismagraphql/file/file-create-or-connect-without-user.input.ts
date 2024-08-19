import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { fileWhereUniqueInput } from './file-where-unique.input';
import { Type } from 'class-transformer';
import { fileCreateWithoutUserInput } from './file-create-without-user.input';

@InputType()
export class fileCreateOrConnectWithoutUserInput {

    @Field(() => fileWhereUniqueInput, {nullable:false})
    @Type(() => fileWhereUniqueInput)
    where!: Prisma.AtLeast<fileWhereUniqueInput, 'id'>;

    @Field(() => fileCreateWithoutUserInput, {nullable:false})
    @Type(() => fileCreateWithoutUserInput)
    create!: fileCreateWithoutUserInput;
}
