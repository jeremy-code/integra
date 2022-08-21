import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

import type {
  Legislator,
  MemPFDProfile,
} from "../entity/OpenSecretsAPI.entity";

class OpenSecretsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://www.opensecrets.org/api/";
  }

  willSendRequest(request: RequestOptions) {
    request.params.set("apikey", process.env.OPEN_SECRETS_API_KEY!);
    request.params.set("output", "json");
  }

  async getLegislators(id: string): Promise<Legislator[]> {
    const res = JSON.parse(
      await this.get("", {
        method: "getLegislators",
        id,
      })
    );
    // the Legislator is returned in the response.response.legislator array in its property '@attributes'
    return flatten(res.response.legislator);
  }

  async memPFDprofile(id: string): Promise<MemPFDProfile> {
    const res = JSON.parse(
      await this.get("", {
        method: "memPFDprofile",
        cid: id,
      })
    );
    const assets = res.response.member_profile.assets?.asset;
    const transactions = res.response.member_profile.transactions?.transaction;
    const positions = res.response.member_profile.positions?.position;

    return {
      member_profile: res.response.member_profile["@attributes"],
      asset: flatten(assets),
      transaction: flatten(transactions),
      position: flatten(positions),
    };
  }
}

// given an array of objects with a '@attributes' property, return an object with the keys/values of the '@attributes' property
const flatten = (obj: { "@attributes": any }[]): any => {
  if (!obj) return obj;
  return obj.map((item: { "@attributes": any }) => item["@attributes"]);
};

export default OpenSecretsAPI;
