import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OfficialSocialMediaOrderByInput", {})
export class OfficialSocialMediaOrderByInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  facebook?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  twitter?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  youtube?: "asc" | "desc" | undefined;
}
