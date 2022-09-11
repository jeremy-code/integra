import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";
import {
  CivicAPIResponse,
  CivicOfficial,
  Office,
} from "../entity/CivicAPI.entity";

import { GOOGLE_CIVIC_API_KEY } from "../config";

class CivicAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://www.googleapis.com/civicinfo/v2/";
  }

  willSendRequest(request: RequestOptions) {
    request.params.set("key", GOOGLE_CIVIC_API_KEY);
    request.params.set("levels", "country");
  }

  // Given an address, return an array of the congresspeople in that district
  async getRepresentatives(address: string): Promise<CivicOfficial[]> {
    const senate = this.getRepresentative(address, "legislatorUpperBody");
    const house = this.getRepresentative(address, "legislatorLowerBody");

    return await Promise.all([senate, house]).then(([senate, house]) => {
      // Returns empty array if it doesn't exist, as some regions don't have senators (e.g. Washington D.C.)
      const senators = senate?.officials ?? [];
      const representatives = house?.officials ?? [];
      return [...senators, ...representatives];
    });
  }

  // Given an address and a role, return an array of officials
  async getRepresentative(address: string, roles: string) {
    return this.get("representatives", {
      address,
      roles,
    });
  }

  async getOffices(address: string): Promise<Office[]> {
    const { offices } = await this.getResponse(address);
    return offices;
  }

  // Get response from Google Civic API
  async getResponse(
    address: string,
    params?: { [key: string]: Object | Object[] | undefined }
  ): Promise<CivicAPIResponse> {
    const res = await this.get("representatives", {
      address,
      ...params,
    });

    // Flattening the division object into an array of objects with the ocdId as the key
    const divisions = Object.keys(res?.divisions).map((key) => {
      return {
        ocdID: key,
        ...res.divisions[key],
      };
    });
    return {
      ...res,
      divisions: [].concat(...divisions),
    };
  }
}

export default CivicAPI;
