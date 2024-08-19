import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RolesType } from '../prisma/roles-type.enum';

@ObjectType()
export class RoleMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => RolesType, {nullable:true})
    roleType?: keyof typeof RolesType;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
