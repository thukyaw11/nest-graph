import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { RolesType } from '../prisma/roles-type.enum';
import { Permission } from '../permission/permission.model';
import { User } from '../user/user.model';
import { RoleCount } from './role-count.output';

@ObjectType()
export class Role {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => RolesType, {nullable:false})
    roleType!: keyof typeof RolesType;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Permission], {nullable:true})
    permission?: Array<Permission>;

    @Field(() => [User], {nullable:true})
    user?: Array<User>;

    @Field(() => RoleCount, {nullable:false})
    _count?: RoleCount;
}
