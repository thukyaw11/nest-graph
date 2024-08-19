import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutPermissionInput } from './role-create-without-permission.input';
import { Type } from 'class-transformer';
import { RoleCreateOrConnectWithoutPermissionInput } from './role-create-or-connect-without-permission.input';
import { RoleUpsertWithoutPermissionInput } from './role-upsert-without-permission.input';
import { Prisma } from '@prisma/client';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleUpdateToOneWithWhereWithoutPermissionInput } from './role-update-to-one-with-where-without-permission.input';

@InputType()
export class RoleUpdateOneRequiredWithoutPermissionNestedInput {

    @Field(() => RoleCreateWithoutPermissionInput, {nullable:true})
    @Type(() => RoleCreateWithoutPermissionInput)
    create?: RoleCreateWithoutPermissionInput;

    @Field(() => RoleCreateOrConnectWithoutPermissionInput, {nullable:true})
    @Type(() => RoleCreateOrConnectWithoutPermissionInput)
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionInput;

    @Field(() => RoleUpsertWithoutPermissionInput, {nullable:true})
    @Type(() => RoleUpsertWithoutPermissionInput)
    upsert?: RoleUpsertWithoutPermissionInput;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    connect?: Prisma.AtLeast<RoleWhereUniqueInput, 'id'>;

    @Field(() => RoleUpdateToOneWithWhereWithoutPermissionInput, {nullable:true})
    @Type(() => RoleUpdateToOneWithWhereWithoutPermissionInput)
    update?: RoleUpdateToOneWithWhereWithoutPermissionInput;
}
