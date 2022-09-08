import React from "react";
import { Heading, SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useSWR from "swr";

import { Card } from "@/components/Card";
import { Stat } from "@/components/Chart";

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
      title
      congressional_district
      next_election
    }
  }`
  );

  const official = data?.getIntegraOfficialById;

  return (
    <SimpleGrid columns={[1, null, 5]} mb={8} gap={4}>
      <Stat
        label="Party Affiliation"
        isLoaded={!!official}
        data={
          official?.party === "D"
            ? "Democrat"
            : official?.party === "R"
            ? "Republican"
            : "Independent"
        }
      />
      <Stat
        label="Years Served"
        isLoaded={!!official}
        data={official?.seniority}
      />
      <Stat label="Age" isLoaded={!!official} data={official?.age} />
      {/* Show state if Senator, show full district if Representative */}
      {official?.title === "Representative" ? (
        <Stat
          label="District"
          isLoaded={!!official}
          data={official?.congressional_district}
        />
      ) : (
        <Stat label="State" isLoaded={!!official} data={official?.state} />
      )}
      <Stat
        label="Next Election"
        isLoaded={!!official}
        data={official?.next_election}
      />
    </SimpleGrid>
  );
};

export default OfficialDetails;
