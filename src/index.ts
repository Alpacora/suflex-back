import { PrismaClient } from "@prisma/client";
import { UserRepository } from "./repositories/UserRepository";
import { UserResolver } from "./resolvers/UserResolver";
import { CreateUserUseCase } from "./useCases/CreateUserUseCase";
import { FindUserByEmailUseCase } from "./useCases/FindUserByEmailUseCase";
import { UserLoginUseCase } from "./useCases/UserLoginUseCase";

const prismaClient = new PrismaClient();

const userRepository = new UserRepository();

const findUserByEmailUseCase = new FindUserByEmailUseCase(userRepository);
const userLoginUseCase = new UserLoginUseCase(userRepository);
const createUserUseCase = new CreateUserUseCase(findUserByEmailUseCase, userRepository);

const userResolver = new UserResolver(
  userLoginUseCase,
  createUserUseCase
);

export { userResolver, prismaClient }
