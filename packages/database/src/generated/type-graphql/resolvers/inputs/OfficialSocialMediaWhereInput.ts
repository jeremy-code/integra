import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("OfficialSocialMediaWhereInput", {})
export class OfficialSocialMediaWhereInput {
  @TypeGraphQL.Field(_type => [OfficialSocialMediaWhereInput], {
    nullable: true
  })
  AND?: OfficialSocialMediaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficialSocialMediaWhereInput], {
    nullable: true
  })
  OR?: OfficialSocialMediaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfficialSocialMediaWhereInput], {
    nullable: true
  })
  NOT?: OfficialSocialMediaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  facebook?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  twitter?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  youtube?: StringNullableFilter | undefined;
}
