import { Injectable } from '@nestjs/common';
import { User, NewUserInput, UsersArgs } from './users.model';

@Injectable()
export class UsersService {
  constructor() {
    console.log('UsersService constructor this==', this);
  }

  async create(data: NewUserInput): Promise<User> {
    return {} as any;
  }

  async findOneById(id: number): Promise<User> {
    console.log('UsersService findOneById id==', id);
    return {} as any;
  }

  async findAll(usersArgs: UsersArgs): Promise<User[]> {
    console.log('UsersService findAll');
    const data = [{ id: 1, firstName: "Arthur" }, { id: 2, firstName: "Vincent" }];
    return data as User[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
