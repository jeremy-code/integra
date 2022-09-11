import React from "react";
import { SimpleGrid, Flex } from "@chakra-ui/react";

import {
  NetWorth,
  Positions,
  Office,
  SocialMedia,
  ContactInfo,
  CookPVIStat,
  Phone,
} from "@/components/Official/Stats";

const Overview = () => {
  return (
    <SimpleGrid columns={[1, null, 2]} gap={8}>
      <NetWorth />
      <Positions />
      <SimpleGrid columns={[1, null, 2]} gap={2}>
        <Office />
        <Phone />
      </SimpleGrid>
      <SocialMedia />
      <Flex w="full" gap={8}>
        <ContactInfo />
        <CookPVIStat />
      </Flex>
    </SimpleGrid>
  );
};

export default Overview;
