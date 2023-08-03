import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("OfficialSocialMediaObjectEqualityInput", {})
export class OfficialSocialMediaObjectEqualityInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  facebook?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  twitter?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  youtube?: string | undefined;
}