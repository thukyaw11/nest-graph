import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolesType } from '../prisma/roles-type.enum';
import { UserCreateNestedManyWithoutRoleInput } from '../user/user-create-nested-many-without-role.input';

@InputType()
export class RoleCreateWithoutPermissionInput {

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

    @Field(() => UserCreateNestedManyWithoutRoleInput, {nullable:true})
    user?: UserCreateNestedManyWithoutRoleInput;
}
