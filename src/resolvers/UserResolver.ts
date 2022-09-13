import {
  Resolver,
  Query,
  Arg,
  Mutation
} from 'type-graphql';
import { Service } from 'typedi';
import { UserDomain } from '../domains/UserDomain';
import { CreateUserUseCase } from '../useCases/CreateUserUseCase';
import { UserLoginUseCase } from '../useCases/UserLoginUseCase';

@Service()
@Resolver()
export class UserResolver {

  constructor(
    private userLoginUseCase: UserLoginUseCase,
    private createUserUseCase: CreateUserUseCase,
  ) { }

  @Query(() => String)
  async anonymous() {
    return ''
  }

  @Mutation(() => UserDomain)
  async handleLogin(
    @Arg("email") email: string,
    @Arg("password") password: string,
  ) {
    try {
      const user = await this.userLoginUseCase.execute(email, password);
      return user;
    } catch (error) {

    }
  }

  @Mutation(() => UserDomain)
  async handleCreateUser(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Arg("name") name: string,
  ) {
    try {
      const createdUser = await this.createUserUseCase.execute(email, password, name);
      return createdUser;
    } catch (error) {

    }
  }
}
