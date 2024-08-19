import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { fileUpdateWithoutUserInput } from './file-update-without-user.input';
import { Type } from 'class-transformer';
import { fileCreateWithoutUserInput } from './file-create-without-user.input';
import { fileWhereInput } from './file-where.input';

@InputType()
export class fileUpsertWithoutUserInput {

    @Field(() => fileUpdateWithoutUserInput, {nullable:false})
    @Type(() => fileUpdateWithoutUserInput)
    update!: fileUpdateWithoutUserInput;

    @Field(() => fileCreateWithoutUserInput, {nullable:false})
    @Type(() => fileCreateWithoutUserInput)
    create!: fileCreateWithoutUserInput;

    @Field(() => fileWhereInput, {nullable:true})
    @Type(() => fileWhereInput)
    where?: fileWhereInput;
}
