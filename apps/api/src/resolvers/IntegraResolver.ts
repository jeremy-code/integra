import {
  Arg,
  Ctx,
  FieldResolver,
  Int,
  Query,
  Resolver,
  Root,
} from "type-graphql";

import { ItemListElement } from "../entity/KnowledgeGraphAPI.entity";
import {
  candIndustry,
  candSummary,
  MemPFDProfile,
} from "../entity/OpenSecretsAPI.entity";
import { RecentBill, Vote } from "../entity/ProPublicaAPI.entity";
import { Context, Official } from "../types";
import { AppError } from "../utils";

@Resolver(() => Official)
export class OfficialResolver {
  // Basic Field Resolvers
  @FieldResolver(() => String)
  name(@Root() parent: Official): string {
    return `${parent.first_name} ${parent.last_name}`;
  }

  @FieldResolver(() => Int)
  age(@Root() parent: Official): number {
    // Not perfect solution, would use library
    const getAge = (birthDate: Date): number =>
      Math.floor(
        (Date.now() - birthDate.getTime()) /
          // 1000 * 60 * 60 * 24 * 365
          3.15576e10
      );
    return getAge(parent.date_of_birth);
  }

  @FieldResolver(() => String)
  slug(@Root() parent: Official): string {
    const { full_name, id } = parent;
    const slug = `${full_name.split(" ").join("-").toLowerCase()}-${id}`;
    return encodeURIComponent(slug);
  }

  @FieldResolver(() => String)
  photo_url(@Root() parent: Official): string {
    return `https://theunitedstates.io/images/congress/450x550/${parent.bioguide_id}.jpg`;
  }

  @FieldResolver(() => [ItemListElement])
  async googleKnowledgeGraph(
    @Root() parent: Official,
    @Ctx() ctx: Context
  ): Promise<ItemListElement[]> {
    if (!parent.google_entity_id) throw new AppError("No google_entity_id");
    const res = await ctx.dataSources.knowledgeGraphAPI.getResponse(
      parent.google_entity_id
    );
    return res.itemListElement;
  }

  @FieldResolver(() => MemPFDProfile)
  async memPFDProfile(
    @Root() parent: Official,
    @Ctx() ctx: Context
  ): Promise<MemPFDProfile> {
    return await ctx.dataSources.openSecretsAPI.memPFDprofile(parent.crp_id);
  }

  @FieldResolver(() => candSummary)
  async candSummary(
    @Root() parent: Official,
    @Ctx() ctx: Context
  ): Promise<candSummary> {
    return await ctx.dataSources.openSecretsAPI.candSummary(parent.crp_id);
  }

  @FieldResolver(() => candIndustry)
  async candIndustry(
    @Root() parent: Official,
    @Ctx() ctx: Context,
    @Arg("limit", { nullable: true }) limit: number = 5
  ): Promise<candIndustry> {
    const data = await ctx.dataSources.openSecretsAPI.candIndustry(
      parent.crp_id
    );
    return {
      ...data,
      industries: data.industries.slice(0, limit),
    };
  }

  @FieldResolver(() => [Vote])
  async votes(@Root() parent: Official, @Ctx() ctx: Context): Promise<Vote[]> {
    return await ctx.dataSources.proPublicaAPI.getVotes(parent.bioguide_id);
  }

  @FieldResolver(() => [RecentBill])
  async recentBills(
    @Root() parent: Official,
    @Ctx() ctx: Context
  ): Promise<RecentBill[]> {
    return await ctx.dataSources.proPublicaAPI.getRecentBills(
      parent.bioguide_id
    );
  }

  @Query(() => [Official])
  async findOfficialByLocation(
    @Arg("location") location: string,
    @Ctx() ctx: Context
  ): Promise<Official[]> {
    // essentially, for some address, return the respective offices for that location
    const offices = (
      await ctx.dataSources.civicAPI.getOffices(location)
    ).filter(
      ({ name }: { name: string }) =>
        name === "U.S. Senator" || name === "U.S. Representative"
    );
    // search for the officials in that given office in the database
    const integraOfficials = await Promise.all(
      offices.map(({ divisionId }: { divisionId: string }) => {
        return ctx.prisma.official.findMany({
          where: {
            ocd_id: divisionId,
            in_office: true,
          },
        });
      })
    );
    return integraOfficials.flat();
  }

  @Query(() => [Official])
  async findOfficialByName(
    @Arg("name") name: string,
    @Ctx() ctx: Context
  ): Promise<Official[]> {
    const [firstName, lastName] = name.split(" ");

    const official = await ctx.prisma.official.findMany({
      where: {
        first_name: firstName,
        last_name: lastName,
        in_office: true,
      },
    });

    if (!lastName) {
      const getOfficials = await ctx.prisma.official.findMany({
        where: {
          first_name: {
            startsWith: name,
            mode: "insensitive",
          },
        },
        take: 5,
      });
      return getOfficials ?? [];
    }

    if (official.length !== 0) return official;

    const officialByName = await ctx.mongoDB.search("full_name", [
      {
        query: firstName,
        path: "first_name",
      },
      {
        query: lastName,
        path: "last_name",
      },
    ]);

    return officialByName.map((official: any) => {
      return {
        ...official,
        id: official._id.toString(),
      } as Official;
    });
  }
}
