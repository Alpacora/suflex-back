import {
  Field,
  ID,
  ObjectType
} from "type-graphql";
import { CharacterDomain } from "./CharacterDomain";

@ObjectType()
export class UserDomain {
  @Field(_type => ID)
  public readonly id: string;
  @Field()
  public name: string;
  @Field()
  public email: string;
  @Field()
  public password: string;
  @Field()
  public createdAt: Date;
  @Field()
  public updatedAt: Date;
  @Field(type => [CharacterDomain], { nullable: true })
  public favorites?: CharacterDomain[];
}
