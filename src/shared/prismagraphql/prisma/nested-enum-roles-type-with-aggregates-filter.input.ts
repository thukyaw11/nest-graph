import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolesType } from './roles-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumRolesTypeFilter } from './nested-enum-roles-type-filter.input';

@InputType()
export class NestedEnumRolesTypeWithAggregatesFilter {

    @Field(() => RolesType, {nullable:true})
    equals?: keyof typeof RolesType;

    @Field(() => [RolesType], {nullable:true})
    in?: Array<keyof typeof RolesType>;

    @Field(() => [RolesType], {nullable:true})
    notIn?: Array<keyof typeof RolesType>;

    @Field(() => NestedEnumRolesTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumRolesTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumRolesTypeFilter, {nullable:true})
    _min?: NestedEnumRolesTypeFilter;

    @Field(() => NestedEnumRolesTypeFilter, {nullable:true})
    _max?: NestedEnumRolesTypeFilter;
}
