import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { fileWhereInput } from '../file/file-where.input';

@InputType()
export class FileNullableRelationFilter {

    @Field(() => fileWhereInput, {nullable:true})
    is?: fileWhereInput;

    @Field(() => fileWhereInput, {nullable:true})
    isNot?: fileWhereInput;
}
