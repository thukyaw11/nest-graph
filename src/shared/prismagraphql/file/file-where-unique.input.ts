import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { fileWhereInput } from './file-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';

@InputType()
export class fileWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [fileWhereInput], {nullable:true})
    AND?: Array<fileWhereInput>;

    @Field(() => [fileWhereInput], {nullable:true})
    OR?: Array<fileWhereInput>;

    @Field(() => [fileWhereInput], {nullable:true})
    NOT?: Array<fileWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    path?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    user?: UserListRelationFilter;
}
