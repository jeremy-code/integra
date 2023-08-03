import { gql } from "@apollo/client";
import type { Fetcher } from "swr";

import { apolloClient, logger } from "@/utils";

const fetcher: Fetcher = async (
  query: string | readonly string[],
  args?: { [key: string]: any }
) => {
  try {
    const { data, errors } = await apolloClient.query({
      query: gql(query[0]),
      variables: query[1] as any,
    });

    if (errors) throw new Error("Network response was not OK");

    return data;
  } catch (err) {
    logger.error(err);
    throw err;
  }
};

export default fetcher;
