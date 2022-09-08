import { RecentBills } from "./../entity/ProPublicaAPI.entity";
import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

import type { Vote } from "../entity/ProPublicaAPI.entity";

class ProPublicaAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.propublica.org/congress/v1/members";
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set("X-API-Key", process.env.PROPUBLICA_API_KEY!);
  }

  // Get a Specific Member’s Vote Positions
  async getVotes(memberId: string): Promise<Vote[]> {
    const res = await this.get(`/${memberId}/votes.json`);
    return res.results[0].votes;
  }

  async getRecentBills(memberId: string): Promise<RecentBills[]> {
    const res = await this.get(`/${memberId}/bills/introduced.json`);
    return res.results[0].bills;
  }
}

export default ProPublicaAPI;
