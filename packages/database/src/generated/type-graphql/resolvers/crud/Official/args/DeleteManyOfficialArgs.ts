import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfficialWhereInput } from "../../../inputs/OfficialWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOfficialArgs {
  @TypeGraphQL.Field(_type => OfficialWhereInput, {
    nullable: true
  })
  where?: OfficialWhereInput | undefined;
}
