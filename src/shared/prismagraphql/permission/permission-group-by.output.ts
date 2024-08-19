import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Operation } from '../prisma/operation.enum';
import { PermissionCountAggregate } from './permission-count-aggregate.output';
import { PermissionMinAggregate } from './permission-min-aggregate.output';
import { PermissionMaxAggregate } from './permission-max-aggregate.output';

@ObjectType()
export class PermissionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    modelName!: string;

    @Field(() => [Operation], {nullable:true})
    allowedOperations?: Array<keyof typeof Operation>;

    @Field(() => String, {nullable:false})
    roleId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PermissionCountAggregate, {nullable:true})
    _count?: PermissionCountAggregate;

    @Field(() => PermissionMinAggregate, {nullable:true})
    _min?: PermissionMinAggregate;

    @Field(() => PermissionMaxAggregate, {nullable:true})
    _max?: PermissionMaxAggregate;
}
