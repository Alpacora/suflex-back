import { Service } from "typedi";
import { UserDomain } from "../domains/UserDomain";
import { UserRepository } from "../repositories/UserRepository";
import { FindUserByEmailUseCase } from "./FindUserByEmailUseCase";
import { hashSync } from 'bcrypt';

@Service()
export class CreateUserUseCase {
  constructor(
    private findUserByEmailUseCase: FindUserByEmailUseCase,
    private userRepository: UserRepository,
  ) { }

  async execute(email: string, password: string, name: string): Promise<UserDomain> {
    await this.findUserByEmailUseCase.execute(email);

    const encryptedPassword = hashSync(password, 8);

    const user = await this.userRepository.save(email, encryptedPassword, name);
    return user;
  }
}
