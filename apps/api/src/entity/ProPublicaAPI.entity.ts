import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Bill {
  @Field()
  bill_id: string;
  @Field()
  number: string;
  @Field({ nullable: true })
  bill_uri?: string;
  @Field({ nullable: true })
  title?: string;
  @Field({ nullable: true })
  latest_action?: string;
}

@ObjectType()
class VoteTotal {
  @Field(() => Int)
  yes: number;

  @Field(() => Int)
  no: number;

  @Field(() => Int)
  present: number;

  @Field(() => Int)
  not_voting: number;
}

@ObjectType()
export class Vote {
  @Field()
  member_id: string;

  @Field()
  chamber: string;

  @Field()
  roll_call: string;

  @Field()
  vote_uri: string;

  @Field()
  bill: Bill;

  @Field()
  description: string;

  @Field()
  question: string;

  @Field()
  result: string;

  @Field()
  date: string;

  @Field()
  time: string;

  @Field()
  total: VoteTotal;

  @Field()
  position: string;
}

@ObjectType()
export class RecentBill {
  @Field()
  congress: number;

  @Field()
  bill_id: string;

  @Field()
  bill_type: string;

  @Field()
  bill_uri: string;

  @Field()
  title: string;

  @Field()
  short_title: string;

  @Field()
  sponsor_title: string;

  @Field()
  sponsor_name: string;

  @Field()
  sponsor_state: string;

  @Field()
  sponsor_party: string;

  @Field()
  sponsor_uri: string;

  @Field()
  congressdotgov_url: string;

  @Field()
  govtrack_url: string;

  @Field()
  introduced_date: string;

  @Field()
  active: boolean;

  @Field(() => Int)
  cosponsors: number;

  @Field({ nullable: true })
  committees: string;

  @Field()
  primary_subject: string;

  @Field()
  summary: string;

  @Field()
  summary_short: string;

  @Field()
  latest_major_action_date: string;

  @Field()
  latest_major_action: string;
}
