import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfficialUpdateInput } from "../../../inputs/OfficialUpdateInput";
import { OfficialWhereUniqueInput } from "../../../inputs/OfficialWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneOfficialArgs {
  @TypeGraphQL.Field(_type => OfficialUpdateInput, {
    nullable: false
  })
  data!: OfficialUpdateInput;

  @TypeGraphQL.Field(_type => OfficialWhereUniqueInput, {
    nullable: false
  })
  where!: OfficialWhereUniqueInput;
}
