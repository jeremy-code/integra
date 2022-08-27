import React from "react";
import useSWR from "swr";
import { Grid, GridItem } from "@chakra-ui/react";

import { BarChart } from "@/components/Chart";

type FundraisingProps = {
  id: string;
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

  if (error) return <>Total Amount Donated by Industry failed to load</>;

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
    <Grid
      minH="lg"
      templateRows="repeat(2, 1fr)"
      templateColumns={["1fr", null, "repeat(2, 1fr)"]}
      gap={4}
    >
      <GridItem>
        <IndustryDonationsChart id={id} />
      </GridItem>
    </Grid>
  );
};

export default Fundraising;
