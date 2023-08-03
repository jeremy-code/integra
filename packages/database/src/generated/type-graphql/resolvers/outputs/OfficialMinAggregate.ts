import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("OfficialMinAggregate", {})
export class OfficialMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  at_large!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bioguide_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  congressional_district!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contact_form!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cook_pvi!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  crp_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cspan_id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  date_of_birth!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  district!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  dw_nominate!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fax!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fec_candidate_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  first_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  full_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  gender!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  geoid!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  google_entity_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  govtrack_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  icpsr_id!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  in_office!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  last_name!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  last_updated!: bigint | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  leadership_role!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lis_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  middle_name!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  missed_votes!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  missed_votes_pct!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  next_election!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ocd_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  office!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  party!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rss_url!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  senate_class!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  seniority!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  short_title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  state!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  state_rank!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  suffix!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  total_present!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  total_votes!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  votes_against_party_pct!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  votes_with_party_pct!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  votesmart_id!: string | null;
}
