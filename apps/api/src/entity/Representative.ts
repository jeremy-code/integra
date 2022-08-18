import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Address {
  @Field()
  line1: string;

  @Field()
  city: string;

  @Field()
  state: string;

  @Field()
  zip: string;
}

@ObjectType()
export class Channel {
  @Field()
  type: string;

  @Field()
  id: string;
}

@ObjectType()
export class NormalizedInput {
  @Field()
  line1: string;

  @Field()
  city: string;

  @Field()
  state: string;

  @Field()
  zip: string;
}

@ObjectType()
export class GoogleCivicResponse {
  @Field(() => [NormalizedInput])
  normalizedInput: [NormalizedInput];

  @Field()
  kind: string;

  @Field(() => [String])
  division: [string];

  @Field(() => [String])
  offices: [string];

  @Field(() => [Representative])
  officials: [Representative];
}

@ObjectType()
export class Representative {
  @Field()
  name: string;

  @Field(() => [Address])
  address: [Address];

  @Field(() => String, { nullable: true })
  photoUrl: string;

  @Field()
  party: String;

  @Field(() => [String])
  phones: [string];

  @Field(() => [String])
  urls: [string];

  @Field(() => [Channel])
  channels: [Channel];

  @Field(() => [String])
  geocodingSummaries: [string];
}
