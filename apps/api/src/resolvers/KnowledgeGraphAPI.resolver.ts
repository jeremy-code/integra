import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { KnowledgeGraphAPIResponse } from "../entity/KnowledgeGraphAPI.entity";

import type { Context } from "../types";

@Resolver()
class KnowledgeGraphAPIResolver {
  @Mutation(() => KnowledgeGraphAPIResponse)
  async knowledgeGraphAPI(
    @Arg("google_entity_id") id: string,
    @Ctx() context: Context
  ): Promise<KnowledgeGraphAPIResponse> {
    return await context.dataSources.knowledgeGraphAPI.getResponse(id);
  }
}

export default KnowledgeGraphAPIResolver;
