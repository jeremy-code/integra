import { RESTDataSource } from "apollo-datasource-rest";
import { CivicAPIResponse, Official } from "../entity/CivicAPI.entity";

import { URLSearchParamsInit } from "apollo-server-env";

class CivicAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://www.googleapis.com/civicinfo/v2/";
  }

  // Given an address, return an array of the congresspeople in that district
  async getRepresentatives(address: string): Promise<Official[]> {
    const senate = this.getRepresentative(address, "legislatorUpperBody");
    const house = this.getRepresentative(address, "legislatorLowerBody");

    return Promise.all([senate, house]).then((res) => {
      const [senate, house] = res;
      // Returns empty array if it doesn't exist, as some regions don't have senators (e.g. Washington D.C.)
      const senators = senate.officials ?? [];
      const representatives = house.officials ?? [];
      return [...senators, ...representatives];
    });
  }

  // Given an address and a role, return an array of officials
  async getRepresentative(address: string, roles: string) {
    return this.get("representatives", {
      key: process.env.GOOGLE_CIVIC_API_KEY,
      address,
      roles,
      levels: ["country"],
    });
  }

  // Get response from Google Civic API
  async getResponse(
    address: string,
    params?: { [key: string]: Object | Object[] | undefined }
  ): Promise<CivicAPIResponse> {
    const res = await this.get("representatives", {
      key: process.env.GOOGLE_CIVIC_API_KEY,
      address,
      levels: ["country"],
      ...params,
    });
    if (!res.divisions) {
      return res;
    }

    // Flattening the division object into an array of objects with the ocdId as the key
    let divisions = [];
    divisions = Object.keys(res.divisions).map((key) => {
      return {
        ocdID: key,
        ...res.divisions[key],
      };
    });
    return {
      kind: res.kind,
      normalizedInput: res.normalizedInput,
      divisions: [].concat(...divisions),
      offices: res.offices,
      officials: res.officials,
    };
  }
}

export default CivicAPI;
