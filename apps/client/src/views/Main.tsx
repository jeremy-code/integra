import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Text, Select, Flex } from "@chakra-ui/react";

import { Layout } from "@/components/Layout";
import { LocationInput, OfficialInput } from "@/components/Form";
import { Icon, Head } from "@/components/Misc";

const Main = () => {
  const [option, setOption] = useState("Location");
  const navigate = useNavigate();

  const onLocationSubmit = async (data: { location: { value: string } }) => {
    navigate("/officials", {
      state: {
        location: data.location.value,
      },
    });
  };

  const onOfficialSubmit = async (data: {
    official: { value: string; id: string };
  }) => {
    navigate(`/officials/${data.official.value}-${data.official.id}`, {
      state: {
        official_id: data.official.id,
      },
    });
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

export default Main;
