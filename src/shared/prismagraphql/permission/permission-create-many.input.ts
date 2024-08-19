import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateallowedOperationsInput } from './permission-createallowed-operations.input';

@InputType()
export class PermissionCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    modelName!: string;

    @Field(() => PermissionCreateallowedOperationsInput, {nullable:true})
    allowedOperations?: PermissionCreateallowedOperationsInput;

    @Field(() => String, {nullable:false})
    roleId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
