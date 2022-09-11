import React from "react";
import { Grid, GridItem, Stack } from "@chakra-ui/react";

import {
  VotedWithPartyChart,
  PolarizationChart,
  BillsIntroducedTable,
} from "@/components/Official/Stats";

const Legislation = () => {
  return (
    <Grid templateColumns={["1fr", null, "repeat(3, 1fr)"]} gap={8}>
      <Stack gap={8}>
        <VotedWithPartyChart />
        <PolarizationChart />
      </Stack>
      <GridItem colSpan={2}>
        <BillsIntroducedTable />
      </GridItem>
    </Grid>
  );
};

export default Legislation;
