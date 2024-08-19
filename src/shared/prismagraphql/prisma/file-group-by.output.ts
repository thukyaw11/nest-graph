import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FileCountAggregate } from './file-count-aggregate.output';
import { FileMinAggregate } from './file-min-aggregate.output';
import { FileMaxAggregate } from './file-max-aggregate.output';

@ObjectType()
export class FileGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    path!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => FileCountAggregate, {nullable:true})
    _count?: FileCountAggregate;

    @Field(() => FileMinAggregate, {nullable:true})
    _min?: FileMinAggregate;

    @Field(() => FileMaxAggregate, {nullable:true})
    _max?: FileMaxAggregate;
}
