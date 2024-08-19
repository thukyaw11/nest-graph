import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolesType } from '../prisma/roles-type.enum';
import { PermissionCreateNestedManyWithoutRoleInput } from '../permission/permission-create-nested-many-without-role.input';

@InputType()
export class RoleCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => RolesType, {nullable:false})
    roleType!: keyof typeof RolesType;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PermissionCreateNestedManyWithoutRoleInput, {nullable:true})
    permission?: PermissionCreateNestedManyWithoutRoleInput;
}
