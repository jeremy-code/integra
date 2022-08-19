import { Arg, Ctx, Query, Resolver } from "type-graphql";

import { CivicAPIResponse, Official } from "../entity/CivicAPI.entity";
import { Context } from "../types";

@Resolver()
class CivicAPIResolver {
  @Query(() => Boolean)
  async civicHealthCheck(@Ctx() context: Context): Promise<boolean> {
    const res = await context.dataSources.civicAPI.getRepresentatives(
      "1667 K Street NW. Washington. DC 20006"
    );
    return res.length > 0;
  }

  @Query(() => [Official])
  async getRepresentatives(
    @Arg("address") address: string,
    @Ctx() context: Context
  ): Promise<Official[]> {
    const res = await context.dataSources.civicAPI.getRepresentatives(address);
    return res;
  }

  @Query(() => CivicAPIResponse)
  async getResponse(
    @Arg("address") address: string,
    @Ctx() context: Context
  ): Promise<CivicAPIResponse> {
    const res = await context.dataSources.civicAPI.getResponse(address);
    return res;
  }
}

export default CivicAPIResolver;
