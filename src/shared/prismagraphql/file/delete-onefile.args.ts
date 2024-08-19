import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { fileWhereUniqueInput } from './file-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnefileArgs {

    @Field(() => fileWhereUniqueInput, {nullable:false})
    @Type(() => fileWhereUniqueInput)
    where!: Prisma.AtLeast<fileWhereUniqueInput, 'id'>;
}
