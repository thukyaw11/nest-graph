import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumRolesTypeFieldUpdateOperationsInput } from '../prisma/enum-roles-type-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PermissionUpdateManyWithoutRoleNestedInput } from '../permission/permission-update-many-without-role-nested.input';
import { UserUpdateManyWithoutRoleNestedInput } from '../user/user-update-many-without-role-nested.input';

@InputType()
export class RoleUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => EnumRolesTypeFieldUpdateOperationsInput, {nullable:true})
    roleType?: EnumRolesTypeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PermissionUpdateManyWithoutRoleNestedInput, {nullable:true})
    permission?: PermissionUpdateManyWithoutRoleNestedInput;

    @Field(() => UserUpdateManyWithoutRoleNestedInput, {nullable:true})
    user?: UserUpdateManyWithoutRoleNestedInput;
}
