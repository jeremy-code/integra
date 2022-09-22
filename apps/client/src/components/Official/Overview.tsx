import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import {
  Contact,
  SocialMedia,
  About,
  Description,
} from "@/components/Official/Stats";

const Overview = () => {
  return (
    <Grid
      templateColumns={["1fr", null, "repeat(2, 1fr)", "repeat(3, 1fr)"]}
      gap={8}
    >
      <Contact />
      <SocialMedia />
      <GridItem rowSpan={2} colSpan={[1, null, 2, 1]}>
        <About />
      </GridItem>
      <GridItem colSpan={[1, null, 2]}>
        <Description />
      </GridItem>
    </Grid>
  );
};

export default Overview;
