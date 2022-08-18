import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Text, Select, Flex } from "@chakra-ui/react";

import { Layout } from "@/components/Layout";
import { LocationInput } from "@/components/Form";
import { Icon } from "@/components/Misc";

const Main = () => {
  const navigate = useNavigate();
  const onSubmit = async (data: { location: { value: string } }) => {
    navigate("/officials", {
      state: {
        location: data.location.value,
      },
    });
  };

  return (
    <Layout display="grid" placeItems="center">
      <Box minW="lg" minH="md">
        <Flex align="center" gap={4} mb={4}>
          <Icon icon="SearchIcon" />
          <Select variant="filled" maxW="10rem" defaultValue="Location">
            <option>Location</option>
            <option>Official</option>
          </Select>
        </Flex>
        <Text fontSize="xl" mb={4}>
          Find your members of Congress
        </Text>
        <LocationInput onSubmit={onSubmit} />
      </Box>
    </Layout>
  );
};

export default Main;
