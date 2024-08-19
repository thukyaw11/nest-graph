import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { fileUpdateInput } from './file-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { fileWhereUniqueInput } from './file-where-unique.input';

@ArgsType()
export class UpdateOnefileArgs {

    @Field(() => fileUpdateInput, {nullable:false})
    @Type(() => fileUpdateInput)
    data!: fileUpdateInput;

    @Field(() => fileWhereUniqueInput, {nullable:false})
    @Type(() => fileWhereUniqueInput)
    where!: Prisma.AtLeast<fileWhereUniqueInput, 'id'>;
}
