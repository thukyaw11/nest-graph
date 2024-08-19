import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { fileOrderByWithRelationInput } from '../file/file-order-by-with-relation.input';
import { RoleOrderByWithRelationInput } from '../role/role-order-by-with-relation.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    userImageId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    roleId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => fileOrderByWithRelationInput, {nullable:true})
    userImage?: fileOrderByWithRelationInput;

    @Field(() => RoleOrderByWithRelationInput, {nullable:true})
    Role?: RoleOrderByWithRelationInput;
}
