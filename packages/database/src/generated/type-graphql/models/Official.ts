import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { OfficialSocialMedia } from "../models/OfficialSocialMedia";

@TypeGraphQL.ObjectType("Official", {})
export class Official {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  at_large?: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bioguide_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  congressional_district?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contact_form?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cook_pvi?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  crp_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cspan_id?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date_of_birth!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  district?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  dw_nominate?: number | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  emails!: string[];

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fax?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  fec_candidate_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  first_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  full_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  gender!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  geoid?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  google_entity_id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  govtrack_id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  icpsr_id?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  in_office!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  last_name!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  last_updated!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  leadership_role?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lis_id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  middle_name?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  missed_votes?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  missed_votes_pct?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  next_election?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ocd_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  office?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  party!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rss_url?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  senate_class?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  seniority!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  short_title!: string;

  @TypeGraphQL.Field(_type => OfficialSocialMedia, {
    nullable: false
  })
  social_media!: OfficialSocialMedia;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  state!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  state_rank?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  suffix?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  total_present?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  total_votes?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  votes_against_party_pct?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  votes_with_party_pct?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  votesmart_id?: string | null;
}
