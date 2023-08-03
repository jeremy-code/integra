import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfficialCreateInput } from "../../../inputs/OfficialCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneOfficialArgs {
  @TypeGraphQL.Field(_type => OfficialCreateInput, {
    nullable: false
  })
  data!: OfficialCreateInput;
}
