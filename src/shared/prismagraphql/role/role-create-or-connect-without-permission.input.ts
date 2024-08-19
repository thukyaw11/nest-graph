import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { Type } from 'class-transformer';
import { RoleCreateWithoutPermissionInput } from './role-create-without-permission.input';

@InputType()
export class RoleCreateOrConnectWithoutPermissionInput {

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    @Type(() => RoleWhereUniqueInput)
    where!: Prisma.AtLeast<RoleWhereUniqueInput, 'id'>;

    @Field(() => RoleCreateWithoutPermissionInput, {nullable:false})
    @Type(() => RoleCreateWithoutPermissionInput)
    create!: RoleCreateWithoutPermissionInput;
}
