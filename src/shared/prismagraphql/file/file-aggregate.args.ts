import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { fileWhereInput } from './file-where.input';
import { Type } from 'class-transformer';
import { fileOrderByWithRelationInput } from './file-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { fileWhereUniqueInput } from './file-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class fileAggregateArgs {

    @Field(() => fileWhereInput, {nullable:true})
    @Type(() => fileWhereInput)
    where?: fileWhereInput;

    @Field(() => [fileOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<fileOrderByWithRelationInput>;

    @Field(() => fileWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<fileWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
