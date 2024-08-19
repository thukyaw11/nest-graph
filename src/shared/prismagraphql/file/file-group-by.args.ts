import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { fileWhereInput } from './file-where.input';
import { Type } from 'class-transformer';
import { fileOrderByWithAggregationInput } from './file-order-by-with-aggregation.input';
import { FileScalarFieldEnum } from '../prisma/file-scalar-field.enum';
import { fileScalarWhereWithAggregatesInput } from './file-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class fileGroupByArgs {

    @Field(() => fileWhereInput, {nullable:true})
    @Type(() => fileWhereInput)
    where?: fileWhereInput;

    @Field(() => [fileOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<fileOrderByWithAggregationInput>;

    @Field(() => [FileScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FileScalarFieldEnum>;

    @Field(() => fileScalarWhereWithAggregatesInput, {nullable:true})
    having?: fileScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
