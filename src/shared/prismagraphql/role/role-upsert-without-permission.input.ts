import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleUpdateWithoutPermissionInput } from './role-update-without-permission.input';
import { Type } from 'class-transformer';
import { RoleCreateWithoutPermissionInput } from './role-create-without-permission.input';
import { RoleWhereInput } from './role-where.input';

@InputType()
export class RoleUpsertWithoutPermissionInput {

    @Field(() => RoleUpdateWithoutPermissionInput, {nullable:false})
    @Type(() => RoleUpdateWithoutPermissionInput)
    update!: RoleUpdateWithoutPermissionInput;

    @Field(() => RoleCreateWithoutPermissionInput, {nullable:false})
    @Type(() => RoleCreateWithoutPermissionInput)
    create!: RoleCreateWithoutPermissionInput;

    @Field(() => RoleWhereInput, {nullable:true})
    @Type(() => RoleWhereInput)
    where?: RoleWhereInput;
}
