import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Operation } from '../prisma/operation.enum';
import { Role } from '../role/role.model';

@ObjectType()
export class Permission {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    modelName!: string;

    @Field(() => [Operation], {nullable:true})
    allowedOperations!: Array<keyof typeof Operation>;

    @Field(() => String, {nullable:false})
    roleId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Role, {nullable:false})
    role?: Role;
}
