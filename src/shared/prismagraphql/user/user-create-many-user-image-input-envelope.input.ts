import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateManyUserImageInput } from './user-create-many-user-image.input';
import { Type } from 'class-transformer';

@InputType()
export class UserCreateManyUserImageInputEnvelope {

    @Field(() => [UserCreateManyUserImageInput], {nullable:false})
    @Type(() => UserCreateManyUserImageInput)
    data!: Array<UserCreateManyUserImageInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
