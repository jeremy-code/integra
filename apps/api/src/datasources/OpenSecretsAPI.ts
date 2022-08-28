import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

import type {
  Legislator,
  MemPFDProfile,
  candIndustry,
  candSummary,
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
    ).response.member_profile;

    const assets = res.assets?.asset;
    const transactions = res.transactions?.transaction;
    const positions = res.positions?.position;

    // API returns empty string instead of undefined for null values
    // instead of empty string "", return undefined
    const member_profile = Object.fromEntries(
      // eslint-disable-next-line no-unused-vars
      Object.entries(res["@attributes"]).filter(([_key, value]) => value !== "")
    );

    const profile = {
      member_profile,
      asset: flatten(assets),
      transaction: flatten(transactions),
      position: flatten(positions),
    } as unknown as MemPFDProfile;

    return profile;
  }

  async candSummary(id: string): Promise<candSummary> {
    const res = JSON.parse(
      await this.get("", {
        method: "candSummary",
        cid: id,
      })
    ).response.summary["@attributes"];

    return res;
  }

  async candIndustry(id: string): Promise<candIndustry> {
    const res = JSON.parse(
      await this.get("", {
        method: "candIndustry",
        cid: id,
      })
    ).response.industries;
    return {
      cand_name: res["@attributes"].cand_name,
      cid: res["@attributes"].cid,
      cycle: res["@attributes"].cycle,
      origin: res["@attributes"].origin,
      source: res["@attributes"].source,
      last_updated: res["@attributes"].last_updated,
      industries: flatten(res.industry),
    };
  }
}

// given an array of objects with a '@attributes' property, return an object with the keys/values of the '@attributes' property
const flatten = (obj: { "@attributes": any }[]): any => {
  if (!obj) return obj;
  return obj.map((item: { "@attributes": any }) => item["@attributes"]);
};

export default OpenSecretsAPI;
