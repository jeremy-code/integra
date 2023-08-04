import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfficialWhereUniqueInput } from "../../../inputs/OfficialWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueOfficialArgs {
  @TypeGraphQL.Field(_type => OfficialWhereUniqueInput, {
    nullable: false
  })
  where!: OfficialWhereUniqueInput;
}
