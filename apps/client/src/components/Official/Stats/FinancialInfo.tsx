import { Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import useSWR from "swr";

import { Stat } from "@/components/Chart";
import { useOfficialData, useOfficialId } from "@/hooks";
import { convertToUSD } from "@/utils";
import { NetWorth } from "@/components/Official/Stats";

export const FinancialInfo = () => {
  const { official, error } = useOfficialData({
    queryName: "getFinancialInfo",
    query: `{
      id
      candSummary {
        cand_name
        cid
        cycle
        party
        state
        chamber
        first_elected
        spent
        next_election
        total
        cash_on_hand
        debt
        origin
        last_updated
        source
      }
    }`,
  });

  const candSummary = official?.candSummary;

  if (error) return <>&quot;Financial Info&quot; failed to load</>;

  return (
    <Stack>
      <Heading size="md" mb={4}>
        Financial Info
      </Heading>
      <SimpleGrid columns={[1, null, 3]} spacing={4}>
        <Stat
          label="Total Spent"
          isLoaded={!!official}
          data={candSummary?.spent ? convertToUSD(candSummary?.spent) : "N/A"}
        />
        <Stat
          label="Total Cash on Hand"
          isLoaded={!!official}
          data={
            candSummary?.cash_on_hand
              ? convertToUSD(candSummary?.cash_on_hand)
              : "N/A"
          }
        />
        <Stat
          label="Total Debt"
          isLoaded={!!official}
          data={candSummary?.debt ? convertToUSD(candSummary?.debt) : "N/A"}
        />
      </SimpleGrid>
      <NetWorth />
    </Stack>
  );
};
