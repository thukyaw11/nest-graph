import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolesType } from './roles-type.enum';

@InputType()
export class EnumRolesTypeFieldUpdateOperationsInput {

    @Field(() => RolesType, {nullable:true})
    set?: keyof typeof RolesType;
}
