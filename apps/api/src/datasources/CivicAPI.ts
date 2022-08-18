import { RESTDataSource } from "apollo-datasource-rest";

class CivicAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://www.googleapis.com/civicinfo/v2/";
  }

  async getRepresentatives(address: string) {
    const senate = this.get("representatives", {
      key: process.env.GOOGLE_CIVIC_API_KEY,
      address,
      roles: "legislatorUpperBody",
      levels: ["country"],
    });

    const house = this.get("representatives", {
      key: process.env.GOOGLE_CIVIC_API_KEY,
      address,
      roles: "legislatorLowerBody",
      levels: ["country"],
    });
    return Promise.all([senate, house]).then((res) => {
      const [senate, house] = res;
      return {
        officials: [...senate.officials, ...house.officials],
      };
    });
  }
}

export default CivicAPI;
