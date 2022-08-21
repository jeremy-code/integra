import { Field, Float, ID, Int, ObjectType } from "type-graphql";

import { KnowledgeGraphAPIResponse } from "./KnowledgeGraphAPI.entity";

@ObjectType()
export class IntegraOfficial {
  @Field(() => ID)
  id: string;
  @Field()
  api_uri: string;
  @Field()
  date_of_birth: string;
  @Field()
  fec_candidate_id: string;
  @Field()
  first_name: string;
  @Field()
  gender: string;
  @Field()
  in_office: boolean;
  @Field()
  last_name: string;
  @Field()
  last_updated: string;
  @Field()
  ocd_id: string;
  @Field()
  seniority: string;
  @Field()
  short_title: string;
  @Field()
  title: string;
  @Field()
  party: string;
  @Field()
  state: string;

  @Field()
  name: string;
  @Field(() => Int)
  age: number;

  @Field(() => KnowledgeGraphAPIResponse, { nullable: true })
  google_knowledge_graph?: KnowledgeGraphAPIResponse;

  @Field({ nullable: true })
  at_large?: boolean;
  @Field({ nullable: true })
  contact_form?: string;
  @Field({ nullable: true })
  cook_pvi?: string;
  @Field({ nullable: true })
  crp_id?: string;
  @Field({ nullable: true })
  cspan_id?: string;
  @Field({ nullable: true })
  district?: string;
  @Field(() => Float, { nullable: true })
  dw_nominate?: number;
  @Field({ nullable: true })
  facebook_account?: string;
  @Field({ nullable: true })
  fax?: string;
  @Field({ nullable: true })
  geoid?: string;
  @Field({ nullable: true })
  google_entity_id?: string;
  @Field({ nullable: true })
  govtrack_id?: string;
  @Field({ nullable: true })
  icpsr_id?: string;
  @Field({ nullable: true })
  leadership_role?: string;
  @Field({ nullable: true })
  lis_id?: string;
  @Field({ nullable: true })
  middle_name?: string;
  @Field(() => Int, { nullable: true })
  missed_votes?: number;
  @Field(() => Float, { nullable: true })
  missed_votes_pct?: number;
  @Field({ nullable: true })
  next_election?: string;
  @Field({ nullable: true })
  office?: string;
  @Field({ nullable: true })
  phone?: string;
  @Field({ nullable: true })
  rss_url?: string;
  @Field({ nullable: true })
  senate_class?: string;
  @Field({ nullable: true })
  state_rank?: string;
  @Field({ nullable: true })
  suffix?: string;
  @Field(() => Int, { nullable: true })
  total_present?: number;
  @Field(() => Int, { nullable: true })
  total_votes?: number;
  @Field({ nullable: true })
  twitter_account?: string;
  @Field({ nullable: true })
  url?: string;
  @Field(() => Float, { nullable: true })
  votes_against_party_pct?: number;
  @Field(() => Float, { nullable: true })
  votes_with_party_pct?: number;
  @Field({ nullable: true })
  votesmart_id?: string;
  @Field({ nullable: true })
  youtube_account?: string;
}
