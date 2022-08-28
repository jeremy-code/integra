import { candSummary } from "./../entity/OpenSecretsAPI.entity";
import { Arg, Ctx, Query, Resolver } from "type-graphql";

import {
  Legislator,
  MemPFDProfile,
  candIndustry,
} from "../entity/OpenSecretsAPI.entity";
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

  @Query(() => candIndustry)
  async candIndustry(
    @Arg("id", { description: "CID" }) id: string,
    @Arg("first", {
      description: "number of industries to return",
      nullable: true,
    })
    first: number,
    @Ctx() context: Context
  ): Promise<candIndustry> {
    const data = await context.dataSources.openSecretsAPI.candIndustry(id);
    if (first) {
      return {
        ...data,
        industries: data.industries.slice(0, first),
      };
    } else {
      return data;
    }
  }

  @Query(() => candSummary)
  async candSummary(
    @Arg("id", { description: "CID" }) id: string,
    @Ctx() context: Context
  ): Promise<candSummary> {
    return await context.dataSources.openSecretsAPI.candSummary(id);
  }
}

export default OpenSecretsAPIResolver;
