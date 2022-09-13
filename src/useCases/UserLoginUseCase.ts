import { Service } from "typedi";
import { UserDomain } from "../domains/UserDomain";
import { UserRepository } from "../repositories/UserRepository";
import { compareSync } from 'bcrypt';

@Service()
export class UserLoginUseCase {

  constructor(
    private userRepository: UserRepository
  ) { }

  async execute(email: string, password: string): Promise<UserDomain> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      console.log('1 Check your credentials');
      return
    }

    const validPassword = compareSync(password, user.password);

    if (!validPassword) {
      console.log('2 - Check your credentials');
      return
    }

    return user;
  }
}
