import { Card } from "@/components/Card";
import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import useSWR from "swr";

type OfficialDetailsProps = {
  id: string;
};

const OfficialDetails = ({ id }: OfficialDetailsProps) => {
  const { data, error } = useSWR(
    () => `{
    getIntegraOfficialById(id: "${id}") {
      age
      party
      seniority
      state
    }
  }`
  );

  const official = data?.getIntegraOfficialById;

  return (
    <SimpleGrid columns={[1, null, 4]} mb={8} gap={4}>
      <Card w="full">
        <Text>Party Affiliation</Text>
        <Heading size="md">
          {official?.party === "D"
            ? "Democrat"
            : official?.party === "R"
            ? "Republican"
            : "Independent"}
        </Heading>
      </Card>
      <Card w="full">
        <Text>Years Served</Text>
        <Heading size="md">{official?.seniority}</Heading>
      </Card>
      <Card w="full">
        <Text>Age</Text>
        <Heading size="md">{official?.age}</Heading>
      </Card>
      <Card w="full">
        <Text>State</Text>
        <Heading size="md">{official?.state}</Heading>
      </Card>
    </SimpleGrid>
  );
};

export default OfficialDetails;
