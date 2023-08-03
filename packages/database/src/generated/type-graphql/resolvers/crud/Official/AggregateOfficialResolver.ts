import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateOfficialArgs } from "./args/AggregateOfficialArgs";
import { Official } from "../../../models/Official";
import { AggregateOfficial } from "../../outputs/AggregateOfficial";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Official)
export class AggregateOfficialResolver {
  @TypeGraphQL.Query(_returns => AggregateOfficial, {
    nullable: false
  })
  async aggregateOfficial(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateOfficialArgs): Promise<AggregateOfficial> {
    return getPrismaFromContext(ctx).official.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
