import { RecentBills } from "./../entity/ProPublicaAPI.entity";
import { Arg, Ctx, Query, Resolver } from "type-graphql";

import { Vote } from "../entity/ProPublicaAPI.entity";

import { Context } from "../types";

@Resolver()
class PropPublicaAPIResolver {
  @Query(() => [Vote])
  async getVotes(
    @Arg("id", { description: "bioguide id" }) id: string,
    @Ctx() context: Context
  ): Promise<Vote[]> {
    return await context.dataSources.proPublicaAPI.getVotes(id);
  }

  @Query(() => [RecentBills])
  async getRecentBills(
    @Arg("id", { description: "bioguide id" }) id: string,
    @Ctx() context: Context
  ): Promise<RecentBills[]> {
    return await context.dataSources.proPublicaAPI.getRecentBills(id);
  }
}

export default PropPublicaAPIResolver;
