import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolesType } from '../prisma/roles-type.enum';
import { UserUncheckedCreateNestedManyWithoutRoleInput } from '../user/user-unchecked-create-nested-many-without-role.input';

@InputType()
export class RoleUncheckedCreateWithoutPermissionInput {

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

    @Field(() => UserUncheckedCreateNestedManyWithoutRoleInput, {nullable:true})
    user?: UserUncheckedCreateNestedManyWithoutRoleInput;
}
