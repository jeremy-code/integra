import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficialSocialMediaCreateInput } from "../inputs/OfficialSocialMediaCreateInput";
import { OfficialSocialMediaUpdateInput } from "../inputs/OfficialSocialMediaUpdateInput";

@TypeGraphQL.InputType("OfficialSocialMediaUpdateEnvelopeInput", {})
export class OfficialSocialMediaUpdateEnvelopeInput {
  @TypeGraphQL.Field(_type => OfficialSocialMediaCreateInput, {
    nullable: true
  })
  set?: OfficialSocialMediaCreateInput | undefined;

  @TypeGraphQL.Field(_type => OfficialSocialMediaUpdateInput, {
    nullable: true
  })
  update?: OfficialSocialMediaUpdateInput | undefined;
}
