import React from "react";
import useSWR from "swr";
import { createColumnHelper } from "@tanstack/react-table";
import { Grid, GridItem, Stack } from "@chakra-ui/react";

import { PieChart, HorizontalBarChart, Table } from "@/components/Chart";
import { StatCard } from "@/components/Card";

type LegislationProps = {
  id: string;
};

const BillsIntroducedTable = ({ id }: LegislationProps) => {
  const { data, error } = useSWR(
    () => `{
    getIntegraOfficialById(id: "${id}") {
      id
      recentBills {
        introduced_date
        short_title
        primary_subject
      }
    }
  }`
  );

  if (error) return <>&quot;Bills Introduced&quot; failed to load</>;

  type Bill = {
    introduced_date: string;
    short_title: string;
    primary_subject: string;
  };

  const recentBills = data?.getIntegraOfficialById?.recentBills;

  const columnHelper = createColumnHelper<Bill>();

  const columns = [
    columnHelper.accessor("introduced_date", {
      cell: (info) => info.getValue(),
      header: "Introduced",
    }),
    columnHelper.accessor("short_title", {
      cell: (info) => info.getValue(),
      header: "Short Title",
    }),
    columnHelper.accessor("primary_subject", {
      cell: (info) => info.getValue(),
      header: "Primary Subject",
    }),
  ];

  return (
    <StatCard title="Bills Introduced" isLoaded={!!recentBills}>
      {recentBills && <Table data={recentBills} columns={columns} />}
    </StatCard>
  );
};

const PolarizationChart = ({ id }: LegislationProps) => {
  const { data, error } = useSWR(
    () => `{
    getIntegraOfficialById(id: "${id}") {
      id
      dw_nominate
    }
  }`
  );

  const LIGHT_BLUE = "rgba(239, 68, 68, 0.2)";
  const LIGHT_RED = "rgba(14, 165, 233, 0.2)";

  const BLUE = "#ef4444";
  const RED = "#0ea5e9";

  const dw_nominate = data?.getIntegraOfficialById.dw_nominate;

  return (
    <HorizontalBarChart
      title="Polarization"
      datasets={[dw_nominate]}
      labels={["DW Nominate"]}
      backgroundColor={dw_nominate > 0 ? LIGHT_BLUE : LIGHT_RED}
      borderColor={dw_nominate > 0 ? BLUE : RED}
    />
  );
};

const VotedWithPartyChart = ({ id }: LegislationProps) => {
  const { data, error } = useSWR(
    () => `{
    getIntegraOfficialById(id: "${id}") {
      id
      party
      votes_against_party_pct
      votes_with_party_pct
    }
  }`
  );

  const official = data?.getIntegraOfficialById;

  if (error) return <>&quot;Percentage voted with Party&quot; failed to load</>;

  return (
    <PieChart
      title="Percentage voted with Party"
      labels={["With Party", "Against Party"]}
      datasets={[
        official?.votes_with_party_pct,
        official?.votes_against_party_pct,
      ]}
    />
  );
};

const Legislation = ({ id }: LegislationProps) => {
  return (
    <Grid templateColumns={["1fr", null, "repeat(3, 1fr)"]} gap={8}>
      <Stack>
        <VotedWithPartyChart id={id} />
        <PolarizationChart id={id} />
      </Stack>
      <GridItem colSpan={2}>
        <BillsIntroducedTable id={id} />
      </GridItem>
    </Grid>
  );
};

export default Legislation;
