import { PrismaClient } from "@prisma/client";
import { Service } from "typedi";
import { UserDomain } from "../domains/UserDomain";
import { UserRepositoryDomain } from "../domains/UserRepositoryDomain";

@Service()
export class UserRepository implements UserRepositoryDomain {
  private prismaClient: PrismaClient;

  constructor() {
    this.prismaClient = new PrismaClient();
  }

  async findByEmail(email: string): Promise<UserDomain> {
    try {
      const user = await this.prismaClient.user.findFirst({
        where: { email },
        include: {
          favorites: true
        }
      })
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async save(email: string, password: string, name: string): Promise<UserDomain> {
    try {
      const user = await this.prismaClient.user.create({
        data: {
          email,
          name,
          password
        },
        include: {
          favorites: true
        }
      });
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}
