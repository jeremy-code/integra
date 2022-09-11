import { Field, Int, ObjectType } from "type-graphql";

// Return type given by the Google Civic API response
@ObjectType()
export class CivicAPIResponse {
  @Field()
  kind: string;

  @Field(() => NormalizedInput)
  normalizedInput: NormalizedInput;

  @Field(() => [Division], { nullable: true })
  divisions: Division[];

  @Field(() => [Office], { nullable: true })
  offices: Office[];

  @Field(() => [CivicOfficial])
  officials: CivicOfficial[];
}

@ObjectType()
export class NormalizedInput {
  @Field({ nullable: true })
  locationName: string;
  @Field()
  line1: string;
  @Field({ nullable: true })
  line2: string;
  @Field()
  city: string;
  @Field()
  state: string;
  @Field()
  zip: string;
}

// Return type of an official from the Google Civic API response
@ObjectType()
export class CivicOfficial {
  @Field()
  name: string;

  @Field(() => [Address])
  address: Address[];

  @Field()
  party: string;

  @Field(() => [String])
  phones: string[];

  @Field(() => [String], { nullable: true })
  urls: string[];

  @Field({ nullable: true })
  photoUrl: string;

  @Field(() => [Channel])
  channels: Channel[];
}

@ObjectType()
export class Division {
  @Field()
  ocdID: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  alsoKnownAs: string;

  @Field(() => [Int])
  officeIndices: number[];
}

@ObjectType()
class Address {
  @Field({ nullable: true })
  locationName: string;
  @Field()
  line1: string;
  @Field({ nullable: true })
  line2: string;
  @Field({ nullable: true })
  line3: string;
  @Field()
  city: string;
  @Field()
  state: string;
  @Field()
  zip: string;
}

@ObjectType()
class Channel {
  @Field()
  type: string;

  @Field()
  id: string;
}

@ObjectType()
export class Office {
  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  divisionId: string;

  @Field(() => [String], { nullable: true })
  levels: string[];

  @Field(() => [String], { nullable: true })
  roles: string[];

  @Field(() => [OfficeID], { nullable: true })
  offices: OfficeID[];

  @Field(() => [Int], { nullable: true })
  officialIndices: number[];
}

@ObjectType()
class OfficeID {
  @Field()
  name: string;

  @Field()
  official: boolean;
}
