import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfficialOrderByWithRelationInput } from "../../../inputs/OfficialOrderByWithRelationInput";
import { OfficialWhereInput } from "../../../inputs/OfficialWhereInput";
import { OfficialWhereUniqueInput } from "../../../inputs/OfficialWhereUniqueInput";
import { OfficialScalarFieldEnum } from "../../../../enums/OfficialScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyOfficialArgs {
  @TypeGraphQL.Field(_type => OfficialWhereInput, {
    nullable: true
  })
  where?: OfficialWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OfficialOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: OfficialOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => OfficialWhereUniqueInput, {
    nullable: true
  })
  cursor?: OfficialWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [OfficialScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "at_large" | "bioguide_id" | "congressional_district" | "contact_form" | "cook_pvi" | "crp_id" | "cspan_id" | "date_of_birth" | "district" | "dw_nominate" | "emails" | "fax" | "fec_candidate_id" | "first_name" | "full_name" | "gender" | "geoid" | "google_entity_id" | "govtrack_id" | "icpsr_id" | "in_office" | "last_name" | "last_updated" | "leadership_role" | "lis_id" | "middle_name" | "missed_votes" | "missed_votes_pct" | "next_election" | "ocd_id" | "office" | "party" | "phone" | "rss_url" | "senate_class" | "seniority" | "short_title" | "state" | "state_rank" | "suffix" | "title" | "total_present" | "total_votes" | "url" | "votes_against_party_pct" | "votes_with_party_pct" | "votesmart_id"> | undefined;
}
