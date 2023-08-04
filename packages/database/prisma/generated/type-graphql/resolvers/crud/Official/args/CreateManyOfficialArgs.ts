import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfficialCreateManyInput } from "../../../inputs/OfficialCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOfficialArgs {
  @TypeGraphQL.Field(_type => [OfficialCreateManyInput], {
    nullable: false
  })
  data!: OfficialCreateManyInput[];
}
