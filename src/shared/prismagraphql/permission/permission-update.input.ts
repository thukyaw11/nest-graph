import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PermissionUpdateallowedOperationsInput } from './permission-updateallowed-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { RoleUpdateOneRequiredWithoutPermissionNestedInput } from '../role/role-update-one-required-without-permission-nested.input';

@InputType()
export class PermissionUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    modelName?: StringFieldUpdateOperationsInput;

    @Field(() => PermissionUpdateallowedOperationsInput, {nullable:true})
    allowedOperations?: PermissionUpdateallowedOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => RoleUpdateOneRequiredWithoutPermissionNestedInput, {nullable:true})
    role?: RoleUpdateOneRequiredWithoutPermissionNestedInput;
}
