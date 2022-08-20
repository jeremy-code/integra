import { Context } from "./../types";
import { Arg, Ctx, FieldResolver, Query, Resolver, Root } from "type-graphql";

import { IntegraOfficial } from "../entity/Integra.entity";

@Resolver(() => IntegraOfficial)
class IntegraResolver {
  @FieldResolver()
  async name(@Root() parent: IntegraOfficial) {
    return `${parent.short_title} ${parent.first_name} ${parent.last_name}`;
  }

  @FieldResolver()
  async age(@Root() parent: IntegraOfficial) {
    // Not perfect solution, would use library
    const getAge = (birthDate: Date) =>
      Math.floor(
        (new Date().valueOf() - new Date(birthDate).getTime().valueOf()) /
          3.15576e10
      );
    return getAge(new Date(parent.date_of_birth));
  }

  @Query(() => [IntegraOfficial])
  async getIntegraOfficialsByAddress(
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
    const officialsRes = await Promise.all(
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
    const officials = officialsRes.flat().map((official) => {
      return { ...official, name: "name", age: 0 };
    });
    return officials as IntegraOfficial[];
  }

  @Query(() => [IntegraOfficial])
  async getIntegraOfficialsByName(
    @Arg("name") name: string,
    @Ctx() ctx: Context
  ): Promise<IntegraOfficial[]> {
    const nameArr = name.split(" ");
    const officialsRes = await ctx.prisma.officials.findMany({
      take: 5,
      where: {
        AND: [
          { first_name: { startsWith: nameArr[0], mode: "insensitive" } },
          { last_name: { startsWith: nameArr[1], mode: "insensitive" } },
        ],
      },
    });
    if (officialsRes.length === 0) {
      return [];
    }
    const officials = officialsRes.map((official) => {
      return { ...official, name: "name", age: 0 };
    });
    return officials as IntegraOfficial[];
  }
}

export default IntegraResolver;
