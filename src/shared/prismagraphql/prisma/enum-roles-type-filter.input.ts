import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolesType } from './roles-type.enum';
import { NestedEnumRolesTypeFilter } from './nested-enum-roles-type-filter.input';

@InputType()
export class EnumRolesTypeFilter {

    @Field(() => RolesType, {nullable:true})
    equals?: keyof typeof RolesType;

    @Field(() => [RolesType], {nullable:true})
    in?: Array<keyof typeof RolesType>;

    @Field(() => [RolesType], {nullable:true})
    notIn?: Array<keyof typeof RolesType>;

    @Field(() => NestedEnumRolesTypeFilter, {nullable:true})
    not?: NestedEnumRolesTypeFilter;
}
