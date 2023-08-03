import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficialSocialMediaCreateInput } from "../inputs/OfficialSocialMediaCreateInput";

@TypeGraphQL.InputType("OfficialSocialMediaCreateEnvelopeInput", {})
export class OfficialSocialMediaCreateEnvelopeInput {
  @TypeGraphQL.Field(_type => OfficialSocialMediaCreateInput, {
    nullable: true
  })
  set?: OfficialSocialMediaCreateInput | undefined;
}
