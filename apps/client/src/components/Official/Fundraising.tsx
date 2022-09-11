import React from "react";
import { SimpleGrid } from "@chakra-ui/react";

import {
  IndustryDonationsChart,
  FinancialInfo,
} from "@/components/Official/Stats";

const Fundraising = () => {
  return (
    <SimpleGrid columns={[1, null, 2]} gap={8}>
      <IndustryDonationsChart />
      <FinancialInfo />
    </SimpleGrid>
  );
};

export default Fundraising;
