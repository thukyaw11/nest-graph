import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { fileWhereUniqueInput } from './file-where-unique.input';
import { Type } from 'class-transformer';
import { fileCreateInput } from './file-create.input';
import { fileUpdateInput } from './file-update.input';

@ArgsType()
export class UpsertOnefileArgs {

    @Field(() => fileWhereUniqueInput, {nullable:false})
    @Type(() => fileWhereUniqueInput)
    where!: Prisma.AtLeast<fileWhereUniqueInput, 'id'>;

    @Field(() => fileCreateInput, {nullable:false})
    @Type(() => fileCreateInput)
    create!: fileCreateInput;

    @Field(() => fileUpdateInput, {nullable:false})
    @Type(() => fileUpdateInput)
    update!: fileUpdateInput;
}
