import { gql } from "@apollo/client";
import { apolloClient } from "@/utils";
import type { Fetcher } from "swr";

const fetcher: Fetcher = async (query: string | readonly string[]) => {
  try {
    const { data, errors } = await apolloClient.query({
      query: gql(query),
    });
    if (errors) throw new Error("Network response was not OK");
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export default fetcher;
