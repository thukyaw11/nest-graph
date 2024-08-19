import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereInput } from './role-where.input';
import { Type } from 'class-transformer';
import { RoleUpdateWithoutPermissionInput } from './role-update-without-permission.input';

@InputType()
export class RoleUpdateToOneWithWhereWithoutPermissionInput {

    @Field(() => RoleWhereInput, {nullable:true})
    @Type(() => RoleWhereInput)
    where?: RoleWhereInput;

    @Field(() => RoleUpdateWithoutPermissionInput, {nullable:false})
    @Type(() => RoleUpdateWithoutPermissionInput)
    data!: RoleUpdateWithoutPermissionInput;
}
