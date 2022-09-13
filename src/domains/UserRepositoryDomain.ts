import { UserDomain } from "./UserDomain";

export interface UserRepositoryDomain {
  save(email: string, password: string, name: string): Promise<UserDomain>;
  findByEmail(email: string): Promise<UserDomain>;
}
