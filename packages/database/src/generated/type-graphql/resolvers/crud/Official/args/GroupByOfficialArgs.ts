import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfficialOrderByWithAggregationInput } from "../../../inputs/OfficialOrderByWithAggregationInput";
import { OfficialScalarWhereWithAggregatesInput } from "../../../inputs/OfficialScalarWhereWithAggregatesInput";
import { OfficialWhereInput } from "../../../inputs/OfficialWhereInput";
import { OfficialScalarFieldEnum } from "../../../../enums/OfficialScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOfficialArgs {
  @TypeGraphQL.Field(_type => OfficialWhereInput, {
    nullable: true
  })
  where?: OfficialWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OfficialOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: OfficialOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficialScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "at_large" | "bioguide_id" | "congressional_district" | "contact_form" | "cook_pvi" | "crp_id" | "cspan_id" | "date_of_birth" | "district" | "dw_nominate" | "emails" | "fax" | "fec_candidate_id" | "first_name" | "full_name" | "gender" | "geoid" | "google_entity_id" | "govtrack_id" | "icpsr_id" | "in_office" | "last_name" | "last_updated" | "leadership_role" | "lis_id" | "middle_name" | "missed_votes" | "missed_votes_pct" | "next_election" | "ocd_id" | "office" | "party" | "phone" | "rss_url" | "senate_class" | "seniority" | "short_title" | "state" | "state_rank" | "suffix" | "title" | "total_present" | "total_votes" | "url" | "votes_against_party_pct" | "votes_with_party_pct" | "votesmart_id">;

  @TypeGraphQL.Field(_type => OfficialScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: OfficialScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
