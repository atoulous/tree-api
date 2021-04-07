import { Injectable } from '@nestjs/common';
import { Post, NewPostInput, PostsArgs } from './posts.model';

@Injectable()
export class PostsService {

  async create(data: NewPostInput): Promise<Post> {
    return {} as any;
  }

  async findOneById(id: number): Promise<Post> {
    return {} as any;
  }

  async findAll(postsArgs: PostsArgs): Promise<Post[]> {
    return [] as Post[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
