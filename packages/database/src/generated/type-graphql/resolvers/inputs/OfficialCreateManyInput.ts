import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficialCreateemailsInput } from "../inputs/OfficialCreateemailsInput";
import { OfficialSocialMediaCreateEnvelopeInput } from "../inputs/OfficialSocialMediaCreateEnvelopeInput";

@TypeGraphQL.InputType("OfficialCreateManyInput", {})
export class OfficialCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  at_large?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bioguide_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  congressional_district?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contact_form?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cook_pvi?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  crp_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cspan_id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date_of_birth!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  district?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  dw_nominate?: number | undefined;

  @TypeGraphQL.Field(_type => OfficialCreateemailsInput, {
    nullable: true
  })
  emails?: OfficialCreateemailsInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fax?: string | undefined;

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
  geoid?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  google_entity_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  govtrack_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  icpsr_id?: string | undefined;

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
  leadership_role?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lis_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  middle_name?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  missed_votes?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  missed_votes_pct?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  next_election?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ocd_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  office?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  party!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rss_url?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  senate_class?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  seniority!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  short_title!: string;

  @TypeGraphQL.Field(_type => OfficialSocialMediaCreateEnvelopeInput, {
    nullable: false
  })
  social_media!: OfficialSocialMediaCreateEnvelopeInput;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  state!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  state_rank?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  suffix?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  total_present?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  total_votes?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  votes_against_party_pct?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  votes_with_party_pct?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  votesmart_id?: string | undefined;
}
