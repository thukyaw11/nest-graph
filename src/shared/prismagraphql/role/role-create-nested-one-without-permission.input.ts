import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutPermissionInput } from './role-create-without-permission.input';
import { Type } from 'class-transformer';
import { RoleCreateOrConnectWithoutPermissionInput } from './role-create-or-connect-without-permission.input';
import { Prisma } from '@prisma/client';
import { RoleWhereUniqueInput } from './role-where-unique.input';

@InputType()
export class RoleCreateNestedOneWithoutPermissionInput {

    @Field(() => RoleCreateWithoutPermissionInput, {nullable:true})
    @Type(() => RoleCreateWithoutPermissionInput)
    create?: RoleCreateWithoutPermissionInput;

    @Field(() => RoleCreateOrConnectWithoutPermissionInput, {nullable:true})
    @Type(() => RoleCreateOrConnectWithoutPermissionInput)
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionInput;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    connect?: Prisma.AtLeast<RoleWhereUniqueInput, 'id'>;
}
