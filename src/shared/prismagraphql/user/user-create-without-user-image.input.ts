import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateNestedOneWithoutUserInput } from '../role/role-create-nested-one-without-user.input';

@InputType()
export class UserCreateWithoutUserImageInput {

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

    @Field(() => RoleCreateNestedOneWithoutUserInput, {nullable:true})
    Role?: RoleCreateNestedOneWithoutUserInput;
}
