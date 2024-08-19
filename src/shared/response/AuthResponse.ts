import { ObjectType, Field } from '@nestjs/graphql';
import { User } from '../prismagraphql/user/user.model';

@ObjectType()
export class AuthResponse {
  @Field(() => User)
  user: User;

  @Field(() => String)
  accessToken: string;
}
