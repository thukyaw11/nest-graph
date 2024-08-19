import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { fileCountOrderByAggregateInput } from './file-count-order-by-aggregate.input';
import { fileMaxOrderByAggregateInput } from './file-max-order-by-aggregate.input';
import { fileMinOrderByAggregateInput } from './file-min-order-by-aggregate.input';

@InputType()
export class fileOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    path?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => fileCountOrderByAggregateInput, {nullable:true})
    _count?: fileCountOrderByAggregateInput;

    @Field(() => fileMaxOrderByAggregateInput, {nullable:true})
    _max?: fileMaxOrderByAggregateInput;

    @Field(() => fileMinOrderByAggregateInput, {nullable:true})
    _min?: fileMinOrderByAggregateInput;
}
