import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("OfficialSocialMedia", {})
export class OfficialSocialMedia {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  facebook?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  twitter?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  youtube?: string | null;
}
