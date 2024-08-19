import {
  User,
  FindFirstUserArgs,
  FindUniqueUserArgs,
  FindManyUserArgs,
  UserGroupBy,
  UserGroupByArgs,
  AggregateUser,
  UserAggregateArgs,
  CreateOneUserArgs,
  CreateManyUserArgs,
  UpdateOneUserArgs,
  UpdateManyUserArgs,
  DeleteOneUserArgs,
  DeleteManyUserArgs,
  UserCreateInput,
} from "../../shared/prismagraphql/user";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { UserService } from "../user/user.service";
import { UserLoginInput } from "./dto/login-user.input";
import { AuthResponse } from "src/shared/response/AuthResponse";
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import * as Upload from 'graphql-upload/Upload.js';
import { UseGuards } from "@nestjs/common";
import { UserAuthGuard } from "../auth/guards/user.guard";
// import { GraphQLUpload, FileUpload } from "graphql-upload";

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @UseGuards(UserAuthGuard)
  @Query(() => [User], { nullable: false })
  listUsers(@Args() args: FindManyUserArgs) {
    return this.userService.findAll();
  }

  @Mutation(() => User)
  createUser(@Args('dto') args: UserCreateInput, @Args({ name: 'image', type: () => GraphQLUpload}) image: Upload) {
    return this.userService.create(args, image)
  }

  @Mutation(() => AuthResponse)
  loginUser(@Args('dto') args: UserLoginInput) {
    return this.userService.login(args)
  }

}