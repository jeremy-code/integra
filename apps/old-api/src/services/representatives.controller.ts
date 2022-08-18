import got from "got";
import type { Representative, GoogleCivicResponse } from "../types/index";

const googleCivicClient = got.extend({
  prefixUrl: "https://www.googleapis.com/civicinfo/v2/",
  searchParams: new URLSearchParams([
    ["key", process.env.GOOGLE_CIVIC_API_KEY!],
    ["roles", "legislatorUpperBody"],
    ["roles", "legislatorLowerBody"],
    ["levels", "country"],
  ]),
});

export const getRepresentatives = async (
  address: string
): Promise<Representative[]> => {
  const res = await googleCivicClient
    .get("representatives", {
      searchParams: { address },
    })
    .json<GoogleCivicResponse>();
  return res.officials;
};
