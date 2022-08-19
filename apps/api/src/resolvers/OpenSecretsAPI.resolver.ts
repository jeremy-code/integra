import { Arg, Ctx, Query, Resolver } from "type-graphql";

import { Legislator, MemPFDProfile } from "../entity/OpenSecretsAPI.entity";
import { Context } from "../types";

@Resolver()
class OpenSecretsAPIResolver {
  @Query(() => [Legislator])
  async getLegislators(
    @Arg("id", { description: "two character state code or specific CID" })
    id: string,
    @Ctx() context: Context
  ): Promise<Legislator[]> {
    return await context.dataSources.openSecretsAPI.getLegislators(id);
  }

  @Query(() => MemPFDProfile)
  async memPFDprofile(
    @Arg("id", { description: "CID" }) id: string,
    @Ctx() context: Context
  ): Promise<MemPFDProfile> {
    return await context.dataSources.openSecretsAPI.memPFDprofile(id);
  }
}

export default OpenSecretsAPIResolver;
