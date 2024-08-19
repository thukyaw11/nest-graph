import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { fileUpdateManyMutationInput } from './file-update-many-mutation.input';
import { Type } from 'class-transformer';
import { fileWhereInput } from './file-where.input';

@ArgsType()
export class UpdateManyfileArgs {

    @Field(() => fileUpdateManyMutationInput, {nullable:false})
    @Type(() => fileUpdateManyMutationInput)
    data!: fileUpdateManyMutationInput;

    @Field(() => fileWhereInput, {nullable:true})
    @Type(() => fileWhereInput)
    where?: fileWhereInput;
}
