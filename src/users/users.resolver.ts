import { Args, Query, Mutation, Resolver, Int } from '@nestjs/graphql';
import { User, UsersArgs, NewUserInput } from './users.model';
import { UsersService } from './users.service';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query((returns) => User)
  async user(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOneById(id);
  }

  @Query((returns) => [User])
  async users(@Args() usersArgs: UsersArgs) {
    return this.usersService.findAll(usersArgs);
  }

  @Mutation((returns) => User)
  async addRecipe(
    @Args('newUserData') newUserInput: NewUserInput,
  ): Promise<User> {
    const user = await this.usersService.create(newUserInput);
    return user;
  }

  @Mutation((returns) => Boolean)
  async removeUser(@Args('id') id: string) {
    return this.usersService.remove(id);
  }
}
