import { Field, Float, Int, ObjectType } from "type-graphql";

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
export class MemberProfile {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  member_id?: string;

  @Field(() => Int, { nullable: true })
  net_low?: number;

  @Field(() => Int, { nullable: true })
  net_high?: number;

  @Field(() => Int, { nullable: true })
  positions_held_count?: number;

  @Field(() => Int, { nullable: true })
  asset_count?: number;

  @Field(() => Int, { nullable: true })
  asset_low?: number;

  @Field(() => Int, { nullable: true })
  asset_high?: number;

  @Field(() => Int, { nullable: true })
  transaction_count?: number;

  @Field(() => Int, { nullable: true })
  tx_low?: number;

  @Field(() => Int, { nullable: true })
  tx_high?: number;

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
  name?: string;

  @Field(() => Int, { nullable: true })
  holdings_low?: number;

  @Field(() => Int, { nullable: true })
  holdings_high?: number;

  @Field({ nullable: true })
  industry?: string;

  @Field({ nullable: true })
  sector?: string;

  @Field({ nullable: true })
  subsidiary_of?: string;
}

@ObjectType()
export class MemPFDProfile {
  @Field(() => MemberProfile, { nullable: true })
  member_profile?: MemberProfile;

  @Field(() => [Asset], { nullable: true })
  asset?: Asset[];

  @Field(() => [Transaction], { nullable: true })
  transaction?: Transaction[];

  @Field(() => [Position], { nullable: true })
  position?: Position[];
}

@ObjectType()
class Transaction {
  @Field()
  asset_name: string;

  @Field()
  tx_date: string;

  @Field()
  tx_action: string;

  @Field(() => Int)
  value_low: number;

  @Field(() => Int)
  value_high: number;
}

@ObjectType()
class Position {
  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  organization?: string;
}

@ObjectType()
export class candIndustry {
  @Field()
  cand_name: string;

  @Field()
  cid: string;

  @Field()
  cycle: string;

  @Field()
  origin: string;

  @Field()
  source: string;

  @Field()
  last_updated: string;

  @Field(() => [Industry])
  industries: Industry[];
}

@ObjectType()
class Industry {
  @Field()
  industry_name: string;

  @Field()
  industry_code: string;

  @Field()
  indivs: number;

  @Field()
  pacs: number;

  @Field()
  total: number;
}

@ObjectType()
export class candSummary {
  @Field()
  cand_name: string;
  @Field()
  cid: string;
  @Field()
  cycle: string;
  @Field()
  state: string;
  @Field()
  party: string;
  @Field()
  chamber: string;
  @Field()
  first_elected: string;
  @Field()
  next_election: string;
  @Field(() => Float)
  total: number;
  @Field(() => Float)
  spent: number;
  @Field(() => Float)
  cash_on_hand: number;
  @Field(() => Float)
  debt: number;
  @Field()
  origin: string;
  @Field()
  source: string;
  @Field()
  last_updated: string;
}
