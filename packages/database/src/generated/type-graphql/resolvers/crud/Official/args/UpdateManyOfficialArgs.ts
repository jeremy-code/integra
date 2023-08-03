import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfficialUpdateManyMutationInput } from "../../../inputs/OfficialUpdateManyMutationInput";
import { OfficialWhereInput } from "../../../inputs/OfficialWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyOfficialArgs {
  @TypeGraphQL.Field(_type => OfficialUpdateManyMutationInput, {
    nullable: false
  })
  data!: OfficialUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => OfficialWhereInput, {
    nullable: true
  })
  where?: OfficialWhereInput | undefined;
}
