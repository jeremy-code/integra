import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficialSocialMediaObjectEqualityInput } from "../inputs/OfficialSocialMediaObjectEqualityInput";
import { OfficialSocialMediaWhereInput } from "../inputs/OfficialSocialMediaWhereInput";

@TypeGraphQL.InputType("OfficialSocialMediaCompositeFilter", {})
export class OfficialSocialMediaCompositeFilter {
  @TypeGraphQL.Field(_type => OfficialSocialMediaObjectEqualityInput, {
    nullable: true
  })
  equals?: OfficialSocialMediaObjectEqualityInput | undefined;

  @TypeGraphQL.Field(_type => OfficialSocialMediaWhereInput, {
    nullable: true
  })
  is?: OfficialSocialMediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => OfficialSocialMediaWhereInput, {
    nullable: true
  })
  isNot?: OfficialSocialMediaWhereInput | undefined;
}
