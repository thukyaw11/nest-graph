import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { fileCreateInput } from './file-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnefileArgs {

    @Field(() => fileCreateInput, {nullable:false})
    @Type(() => fileCreateInput)
    data!: fileCreateInput;
}
