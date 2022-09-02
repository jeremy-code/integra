import React from "react";
import useSWR from "swr";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Skeleton,
} from "@chakra-ui/react";

import { BarChart, Stat } from "@/components/Chart";
import { convertToUSD } from "@/utils";

type FundraisingProps = {
  id: string;
};

const NetWorth = ({ id }: FundraisingProps) => {
  const { data, error } = useSWR(
    () => `{
    getIntegraOfficialById(id: "${id}") {
      id
      memPFDProfile {
        member_profile {
          net_low
          net_high
          asset_count
          asset_low
          asset_high
        }
      }
    }
  }`
  );

  const member_profile =
    data?.getIntegraOfficialById?.memPFDProfile?.member_profile;

  const netWorthLow = convertToUSD(member_profile?.net_low);
  const netWorthHigh = convertToUSD(member_profile?.net_high);

  if (error) {
    return <>&quot;Net Worth&quot; failed to load</>;
  }

  return (
    <Stat
      label="Estimated Net Worth"
      isLoaded={!!data}
      data={
        netWorthLow === netWorthHigh && !netWorthLow
          ? "Net worth was not found"
          : `${netWorthLow} - ${netWorthHigh}`
      }
    />
  );
};

const FinancialInfo = ({ id }: FundraisingProps) => {
  const { data, error } = useSWR(
    () => `{
    getIntegraOfficialById(id: "${id}") {
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
    }
  }`
  );

  const candSummary = data?.getIntegraOfficialById?.candSummary;

  if (error) return <>&quot;Financial Info&quot; failed to load</>;

  return (
    <Box p={4}>
      <Heading size="md" mb={4}>
        Financial Info
      </Heading>
      <SimpleGrid columns={[1, null, 3]} spacing={4}>
        <Stat
          label="Total Spent"
          isLoaded={!!data}
          data={candSummary?.spent ? convertToUSD(candSummary?.spent) : "N/A"}
        />
        <Stat
          label="Total Cash on Hand"
          isLoaded={!!data}
          data={
            candSummary?.cash_on_hand
              ? convertToUSD(candSummary?.cash_on_hand)
              : "N/A"
          }
        />
        <Stat
          label="Total Debt"
          isLoaded={!!data}
          data={candSummary?.debt ? convertToUSD(candSummary?.debt) : "N/A"}
        />
      </SimpleGrid>
      <Box mt={4}>
        <Heading size="md" mb={4}>
          Net Worth
        </Heading>
        <NetWorth id={id} />
      </Box>
    </Box>
  );
};

const IndustryDonationsChart = ({ id }: FundraisingProps) => {
  const { data, error } = useSWR(
    () => `{
    getIntegraOfficialById(id: "${id}") {
      id
      candIndustry (first: 5) {
        industries {
          industry_name
          total
        }
      }
    }
  }`
  );

  const industries = data?.getIntegraOfficialById?.candIndustry?.industries;

  if (error)
    return <>&quot;Total Amount Donated by Industry&quot; failed to load</>;

  return (
    <BarChart
      title="Total Amount Donated by Industry"
      labels={industries?.map(
        (industry) => industry.industry_name.split("/")[0]
      )}
      datasets={industries?.map((industry) => industry.total)}
    />
  );
};

const Fundraising = ({ id }: FundraisingProps) => {
  return (
    <SimpleGrid columns={[1, null, 2]} gap={8}>
      <IndustryDonationsChart id={id} />
      <FinancialInfo id={id} />
    </SimpleGrid>
  );
};

export default Fundraising;
