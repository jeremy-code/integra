import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";

import { GOOGLE_KNOWLEDGE_GRAPH_API_KEY } from "../config";
import { KnowledgeGraphAPIResponse } from "../entity/KnowledgeGraphAPI.entity";

class KnowledgeGraphAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://kgsearch.googleapis.com/v1/entities:search";
  }

  willSendRequest(request: RequestOptions) {
    request.params.set("key", GOOGLE_KNOWLEDGE_GRAPH_API_KEY);
    request.params.set("indent", "true");
    request.params.set("languages", "en");
  }

  async getResponse(
    id: string,
    limit = 10
  ): Promise<KnowledgeGraphAPIResponse> {
    const res = await this.get("", { ids: id, limit });
    // Google's API returns JSON where some keys start with @, removed the @
    return JSON.parse(JSON.stringify(res).replace(/@/g, ""));
  }
}

export default KnowledgeGraphAPI;
