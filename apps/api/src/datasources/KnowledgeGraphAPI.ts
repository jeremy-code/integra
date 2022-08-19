import { RESTDataSource } from "apollo-datasource-rest";

class KnowledgeGraphAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://kgsearch.googleapis.com/v1/entities:search";
  }

  async getResponse(id: string): Promise<any> {
    const res = await this.get("", {
      key: process.env.GOOGLE_KNOWLEDGE_GRAPH_API_KEY,
      ids: id,
      limit: 10,
      indent: true,
      languages: "en",
    });
    // Google's API returns JSON where some keys start with @, removed the @
    return JSON.parse(JSON.stringify(res).replace(/@/g, ""));
  }
}

export default KnowledgeGraphAPI;
