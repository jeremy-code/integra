import React from "react";
import { Heading, SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useSWR from "swr";

import { Card } from "@/components/Card";

type OfficialDetailsProps = {
  id: string;
};

const OfficialDetails = ({ id }: OfficialDetailsProps) => {
  const { data, error } = useSWR(
    () => `{
    getIntegraOfficialById(id: "${id}") {
      id
      age
      party
      seniority
      state
      next_election
    }
  }`
  );

  const official = data?.getIntegraOfficialById;

  return (
    <SimpleGrid columns={[1, null, 5]} mb={8} gap={4}>
      <Skeleton isLoaded={!!official}>
        <Card w="full" h="full">
          <Text>Party Affiliation</Text>
          <Heading size="md">
            {official?.party === "D"
              ? "Democrat"
              : official?.party === "R"
              ? "Republican"
              : "Independent"}
          </Heading>
        </Card>
      </Skeleton>
      <Skeleton isLoaded={!!official}>
        <Card w="full" h="full">
          <Text>Years Served</Text>
          <Heading size="md">{official?.seniority}</Heading>
        </Card>
      </Skeleton>
      <Skeleton isLoaded={!!official}>
        <Card w="full" h="full">
          <Text>Age</Text>
          <Heading size="md">{official?.age}</Heading>
        </Card>
      </Skeleton>
      <Skeleton isLoaded={!!official}>
        <Card w="full" h="full">
          <Text>State</Text>
          <Heading size="md">{official?.state}</Heading>
        </Card>
      </Skeleton>
      <Skeleton isLoaded={!!official}>
        <Card w="full" h="full">
          <Text>Next Election</Text>
          <Heading size="md">{official?.next_election}</Heading>
        </Card>
      </Skeleton>
    </SimpleGrid>
  );
};

export default OfficialDetails;
