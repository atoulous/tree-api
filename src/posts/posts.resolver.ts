import {
  Args,
  Query,
  Resolver,
  Int,
  Parent,
} from '@nestjs/graphql';
import { Post } from './posts.model';
import { UsersService } from '../users/users.service';
import { PostsService } from './posts.service';

@Resolver((of) => Post)
export class PostsResolver {
  constructor(
    // private usersService: UsersService,
    private postsService: PostsService,
  ) {}

  @Query((returns) => Post)
  async post(@Args('id', { type: () => Int }) id: number) {
    // return this.postsService.findOneById(id);
    return {};
  }

  // @ResolveField()
  @Query((returns) => [Post])
  async posts(@Parent() post: Post) {
    const { id } = post;
    // return this.postsService.findAll({ authorId: id });
    return {};
  }
}
