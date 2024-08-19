import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolesType } from './roles-type.enum';

@InputType()
export class NestedEnumRolesTypeFilter {

    @Field(() => RolesType, {nullable:true})
    equals?: keyof typeof RolesType;

    @Field(() => [RolesType], {nullable:true})
    in?: Array<keyof typeof RolesType>;

    @Field(() => [RolesType], {nullable:true})
    notIn?: Array<keyof typeof RolesType>;

    @Field(() => NestedEnumRolesTypeFilter, {nullable:true})
    not?: NestedEnumRolesTypeFilter;
}
