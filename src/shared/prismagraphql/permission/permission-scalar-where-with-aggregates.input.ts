import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumOperationNullableListFilter } from '../prisma/enum-operation-nullable-list-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PermissionScalarWhereWithAggregatesInput {

    @Field(() => [PermissionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PermissionScalarWhereWithAggregatesInput>;

    @Field(() => [PermissionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PermissionScalarWhereWithAggregatesInput>;

    @Field(() => [PermissionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PermissionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    modelName?: StringWithAggregatesFilter;

    @Field(() => EnumOperationNullableListFilter, {nullable:true})
    allowedOperations?: EnumOperationNullableListFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    roleId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
