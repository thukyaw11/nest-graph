import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { fileWhereInput } from './file-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyfileArgs {

    @Field(() => fileWhereInput, {nullable:true})
    @Type(() => fileWhereInput)
    where?: fileWhereInput;
}
