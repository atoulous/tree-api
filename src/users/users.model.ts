import { Field, Int, ObjectType, InputType, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Length, MaxLength, Min, Max } from 'class-validator';

@ObjectType()
export class User {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;
}

@InputType()
export class NewUserInput {
  @Field()
  @MaxLength(30)
  firstname: string;

  @Field({ nullable: true })
  @Length(30, 255)
  lastName?: string;

  // @Type(() => String)
  // @Field(type => [String])
  // ingredients: string[];
}

@ArgsType()
export class UsersArgs {
  @Field(type => Int)
  @Min(0)
  skip = 0;

  @Field(type => Int)
  @Min(1)
  @Max(50)
  take = 25;
}