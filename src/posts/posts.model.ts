import { ArgsType, Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Length, Max, MaxLength, Min } from 'class-validator';

@ObjectType()
export class Post {
  @Field((type) => Int)
  id: number;

  @Field((type) => Int)
  idUser: number;

  @Field()
  title: string;

  @Field()
  text: string;

  @Field((type) => Int, { nullable: true })
  votes?: number;
}

// todo

@InputType()
export class NewPostInput {
  @Field()
  @MaxLength(30)
  title: string;

  @Field({ nullable: true })
  @Length(30, 255)
  text?: string;

  @Field({ nullable: false })
  @Min(1)
  idUser?: number;

  // @Type(() => String)
  // @Field(type => [String])
  // ingredients: string[];
}

@ArgsType()
export class PostsArgs {
  @Field((type) => Int)
  @Min(0)
  skip = 0;

  @Field((type) => Int)
  @Min(1)
  @Max(50)
  take = 25;
}
