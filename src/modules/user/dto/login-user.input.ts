import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class UserLoginInput {
  @Field(() => String, { description: 'Email of user' })
  email: string;

  @Field(() => String, { description: 'Password of user' })
  password: string;
}
