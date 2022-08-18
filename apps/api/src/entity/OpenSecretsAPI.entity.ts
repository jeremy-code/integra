import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Legislator {
  @Field({ nullable: true })
  cid: string;
  @Field()
  firstlast: string;
  @Field()
  lastname: string;
  @Field()
  party: string;
  @Field()
  office: string;
  @Field()
  gender: string;
  @Field({ nullable: true })
  firstelectoff: string;
  @Field({ nullable: true })
  exitcode: string;
  @Field()
  comments: string;
  @Field()
  phone: string;
  @Field()
  fax: string;
  @Field()
  website: string;
  @Field({ nullable: true })
  webform: string;
  @Field()
  congress_office: string;
  @Field()
  bioguide_id: string;
  @Field()
  votesmart_id: string;
  @Field()
  feccandid: string;
  @Field()
  twitter_id: string;
  @Field()
  youtube_url: string;
  @Field()
  facebook_id: string;
  @Field()
  birthdate: string;
}

@ObjectType()
class MemberProfile {
  @Field()
  name: string;

  @Field()
  member_id: string;

  @Field(() => Int)
  net_low: number;

  @Field(() => Int)
  net_high: number;

  @Field(() => Int)
  positions_held_count: number;

  @Field(() => Int)
  asset_count: number;

  @Field(() => Int)
  asset_low: number;

  @Field(() => Int)
  asset_high: number;

  @Field(() => Int)
  transaction_count: number;

  @Field(() => Int)
  tx_low: number;

  @Field(() => Int)
  tx_high: number;

  @Field()
  source: string;

  @Field()
  origin: string;

  @Field()
  update_timestamp: string;
}

@ObjectType()
class Asset {
  @Field({ nullable: true })
  name: string;

  @Field(() => Int, { nullable: true })
  holdings_low: number;

  @Field(() => Int, { nullable: true })
  holdings_high: number;

  @Field({ nullable: true })
  industry: string;

  @Field({ nullable: true })
  sector: string;

  @Field({ nullable: true })
  subsidiary_of: string;
}

@ObjectType()
export class MemPFDProfile {
  @Field(() => MemberProfile)
  member_profile: MemberProfile;

  @Field(() => [Asset], { nullable: true })
  asset: Asset[];

  // @Field()
  // transaction: Transaction[];

  // @Field()
  // position: Position[];
}
