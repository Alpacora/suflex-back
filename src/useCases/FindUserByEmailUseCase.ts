import { Service } from "typedi";
import { UserDomain } from "../domains/UserDomain";
import { UserRepository } from "../repositories/UserRepository";

@Service()
export class FindUserByEmailUseCase {
  constructor(
    private userRepository: UserRepository
  ) { }

  async execute(email: string): Promise<UserDomain> {
    const foundedUser = await this.userRepository.findByEmail(email);
    if (foundedUser) {
      console.log('Email já em uso');

      throw new Error("Already in use");
    }

    return foundedUser;
  }
}
