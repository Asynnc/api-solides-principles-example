import { User } from "../../../entities/User";
import { IUserRepository } from "../IUsersRepository";




export class PostgresUserRepository implements IUserRepository{

  private users: User[] = [];

  async findByEmail(email: string): Promise<User>{

    const user = this.users.find(user => user.email === email);

    return user
  }

  async save (user: User): Promise<void>{
    this.users.push(user);
    console.log(user);
  }

}