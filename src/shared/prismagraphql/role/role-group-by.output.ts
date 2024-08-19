import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RolesType } from '../prisma/roles-type.enum';
import { RoleCountAggregate } from './role-count-aggregate.output';
import { RoleMinAggregate } from './role-min-aggregate.output';
import { RoleMaxAggregate } from './role-max-aggregate.output';

@ObjectType()
export class RoleGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => RolesType, {nullable:false})
    roleType!: keyof typeof RolesType;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => RoleCountAggregate, {nullable:true})
    _count?: RoleCountAggregate;

    @Field(() => RoleMinAggregate, {nullable:true})
    _min?: RoleMinAggregate;

    @Field(() => RoleMaxAggregate, {nullable:true})
    _max?: RoleMaxAggregate;
}
