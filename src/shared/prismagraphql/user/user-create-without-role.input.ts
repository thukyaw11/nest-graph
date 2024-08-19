import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { fileCreateNestedOneWithoutUserInput } from '../file/file-create-nested-one-without-user.input';

@InputType()
export class UserCreateWithoutRoleInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => fileCreateNestedOneWithoutUserInput, {nullable:true})
    userImage?: fileCreateNestedOneWithoutUserInput;
}
