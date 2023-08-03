import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfficialCreateInput } from "../../../inputs/OfficialCreateInput";
import { OfficialUpdateInput } from "../../../inputs/OfficialUpdateInput";
import { OfficialWhereUniqueInput } from "../../../inputs/OfficialWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneOfficialArgs {
  @TypeGraphQL.Field(_type => OfficialWhereUniqueInput, {
    nullable: false
  })
  where!: OfficialWhereUniqueInput;

  @TypeGraphQL.Field(_type => OfficialCreateInput, {
    nullable: false
  })
  create!: OfficialCreateInput;

  @TypeGraphQL.Field(_type => OfficialUpdateInput, {
    nullable: false
  })
  update!: OfficialUpdateInput;
}
