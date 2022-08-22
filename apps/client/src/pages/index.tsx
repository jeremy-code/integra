import React, { useState } from "react";
import { useRouter } from "next/router";

import { Box, Text, Select, Flex } from "@chakra-ui/react";

import { Layout } from "@/components/Layout";
import { LocationInput, OfficialInput } from "@/components/Form";
import { Icon, Head } from "@/components/Misc";

const IndexPage = () => {
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
        pathname: `/officials/${data.official.value}-${data.official.id}`,
        query: { official_id: data.official.id },
      },
      `/officials/${data.official.value}-${data.official.id}`
    );
  };

  return (
    <Layout display="grid" placeItems="center">
      <Head />
      <Box minW={["sm", null, "md"]} minH="md">
        <Flex align="center" gap={4} mb={4}>
          <Icon icon="SearchIcon" />
          <Select
            variant="filled"
            maxW="10rem"
            defaultValue="Location"
            onChange={(e) => setOption(e.target.value)}
          >
            <option>Location</option>
            <option>Official</option>
          </Select>
        </Flex>
        <Text fontSize="xl" mb={4}>
          Find your members of Congress
        </Text>
        {option === "Location" && <LocationInput onSubmit={onLocationSubmit} />}
        {option === "Official" && <OfficialInput onSubmit={onOfficialSubmit} />}
      </Box>
    </Layout>
  );
};

export default IndexPage;
