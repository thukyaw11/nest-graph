import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { fileWhereInput } from './file-where.input';
import { Type } from 'class-transformer';
import { fileUpdateWithoutUserInput } from './file-update-without-user.input';

@InputType()
export class fileUpdateToOneWithWhereWithoutUserInput {

    @Field(() => fileWhereInput, {nullable:true})
    @Type(() => fileWhereInput)
    where?: fileWhereInput;

    @Field(() => fileUpdateWithoutUserInput, {nullable:false})
    @Type(() => fileUpdateWithoutUserInput)
    data!: fileUpdateWithoutUserInput;
}
