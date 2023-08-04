import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfficialOrderByWithRelationInput } from "../../../inputs/OfficialOrderByWithRelationInput";
import { OfficialWhereInput } from "../../../inputs/OfficialWhereInput";
import { OfficialWhereUniqueInput } from "../../../inputs/OfficialWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateOfficialArgs {
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
}
