import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { fileCreateManyInput } from './file-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyfileArgs {

    @Field(() => [fileCreateManyInput], {nullable:false})
    @Type(() => fileCreateManyInput)
    data!: Array<fileCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
