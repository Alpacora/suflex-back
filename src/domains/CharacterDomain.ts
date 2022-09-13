import {
  Field,
  ID,
  ObjectType
} from "type-graphql";

@ObjectType()
export class CharacterDomain {
  @Field(_type => ID)
  public readonly id: number;
  @Field()
  public name: string;
  @Field()
  public status: string;
  @Field()
  public species: string;
  @Field()
  public type: string;
  @Field()
  public gender: string;
  @Field()
  public originId: string;
  @Field()
  // public origin: Origin    @relation(fields: [originId], references: [id])
  @Field({ nullable: true })
  public locationId?: string;
  // public Location?: Location @relation(fields: [locationId], references: [id])
  @Field()
  public image: string;
  @Field()
  public episode: string;
  @Field()
  public url: string;
  @Field()
  public created: Date;
}
