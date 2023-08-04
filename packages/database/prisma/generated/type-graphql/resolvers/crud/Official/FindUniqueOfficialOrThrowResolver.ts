import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueOfficialOrThrowArgs } from "./args/FindUniqueOfficialOrThrowArgs";
import { Official } from "../../../models/Official";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Official)
export class FindUniqueOfficialOrThrowResolver {
  @TypeGraphQL.Query(_returns => Official, {
    nullable: true
  })
  async getOfficial(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueOfficialOrThrowArgs): Promise<Official | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).official.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
