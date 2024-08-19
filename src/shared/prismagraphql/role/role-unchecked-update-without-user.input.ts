import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumRolesTypeFieldUpdateOperationsInput } from '../prisma/enum-roles-type-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PermissionUncheckedUpdateManyWithoutRoleNestedInput } from '../permission/permission-unchecked-update-many-without-role-nested.input';

@InputType()
export class RoleUncheckedUpdateWithoutUserInput {

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

    @Field(() => PermissionUncheckedUpdateManyWithoutRoleNestedInput, {nullable:true})
    permission?: PermissionUncheckedUpdateManyWithoutRoleNestedInput;
}
