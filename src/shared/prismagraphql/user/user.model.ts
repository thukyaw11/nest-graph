import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { file } from '../file/file.model';
import { Role } from '../role/role.model';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:true})
    userImageId!: string | null;

    @Field(() => String, {nullable:true})
    roleId!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => file, {nullable:true})
    userImage?: file | null;

    @Field(() => Role, {nullable:true})
    Role?: Role | null;
}
