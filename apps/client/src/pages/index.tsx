import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Text,
  Heading,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
} from "@chakra-ui/react";
import type { NextPage } from "next";

import { Layout } from "@/components/Layout";
import { LocationInput, OfficialInput } from "@/components/Form";
import { Icon, Head } from "@/components/Misc";

const IndexPage: NextPage = () => {
  const [option, setOption] = useState("Location");
  const router = useRouter();

  const onLocationSubmit = async (data: { location: { value: string } }) => {
    router.push(
      {
        pathname: "/officials",
        query: { location: data.location.value },
      },
      "/officials"
    );
  };

  const onOfficialSubmit = async (data: {
    official: { value: string; id: string };
  }) => {
    router.push(
      {
        pathname: `/officials/${data.official.value}`,
        query: { official_id: data.official.id },
      },
      `/officials/${data.official.value}`
    );
  };

  return (
    <Layout>
      <Head />
      <SimpleGrid columns={[1, null, 2]} h="full" alignContent="center">
        <Box>
          <Heading maxW="md" size="xl" mb={4}>
            Learn more about your politicians
          </Heading>
          <Text maxW="lg" fontSize="lg" mb={8}>
            Enter your location or local politician and receive information
            about their policies, finances, and positions
          </Text>
        </Box>
        <Tabs variant="enclosed" maxW="lg">
          <TabList>
            <Tab>
              <Icon icon="MapPinIcon" mr={2} />
              Location
            </Tab>
            <Tab>
              <Icon icon="UserIcon" mr={2} />
              Official
            </Tab>
          </TabList>
          <TabPanels
            borderWidth="1px"
            // border everywhere except top
            borderStyle="none solid solid solid"
            borderColor={useColorModeValue("gray.200", "whiteAlpha.300")}
            p={2}
          >
            <TabPanel>
              <LocationInput onSubmit={onLocationSubmit} />
            </TabPanel>
            <TabPanel>
              <OfficialInput onSubmit={onOfficialSubmit} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </SimpleGrid>
    </Layout>
  );
};

export default IndexPage;
