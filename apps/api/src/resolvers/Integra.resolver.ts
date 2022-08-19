import { Context } from "./../types";
import { Arg, Ctx, Query, Resolver } from "type-graphql";

import { IntegraOfficial } from "../entity/Integra.entity";

@Resolver()
class IntegraResolver {
  @Query(() => [IntegraOfficial])
  async getIntegraOfficials(
    @Arg("address") address: string,
    @Ctx() ctx: Context
  ): Promise<IntegraOfficial[]> {
    // essentially, for some address, return the respective offices for that address
    const { offices } = await ctx.dataSources.civicAPI.getResponse(address);
    const congressOffices = offices.filter(
      (office) =>
        office.name === "U.S. Senator" || office.name === "U.S. Representative"
    );
    // search for the officials in that given office in the database
    const officials = await Promise.all(
      congressOffices.map((office) => {
        const official = ctx.prisma.officials.findMany({
          where: {
            ocd_id: office.divisionId,
            in_office: true,
          },
        });
        return official;
      })
    );
    // type assertion as prisma may return undefined for some properties that are nullable
    // flattened as some offices may have multiple officials
    return officials.flat() as IntegraOfficial[];
  }
}

export default IntegraResolver;
