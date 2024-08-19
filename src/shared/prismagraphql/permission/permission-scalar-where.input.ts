import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumOperationNullableListFilter } from '../prisma/enum-operation-nullable-list-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PermissionScalarWhereInput {

    @Field(() => [PermissionScalarWhereInput], {nullable:true})
    AND?: Array<PermissionScalarWhereInput>;

    @Field(() => [PermissionScalarWhereInput], {nullable:true})
    OR?: Array<PermissionScalarWhereInput>;

    @Field(() => [PermissionScalarWhereInput], {nullable:true})
    NOT?: Array<PermissionScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    modelName?: StringFilter;

    @Field(() => EnumOperationNullableListFilter, {nullable:true})
    allowedOperations?: EnumOperationNullableListFilter;

    @Field(() => StringFilter, {nullable:true})
    roleId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
