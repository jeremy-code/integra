import { Card } from "@/components/Card";
import PieChart from "@/components/Chart/PieChart";
import { SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import useSWR from "swr";

type LegislationProps = {
  id: string;
};

const VotedWithPartyChart = ({ id }: LegislationProps) => {
  const { data, error } = useSWR(
    () => `{
    getIntegraOfficialById(id: "${id}") {
      id
      party
      votes_against_party_pct
      votes_with_party_pct
    }
  }`
  );

  const official = data?.getIntegraOfficialById;

  if (error) return <>&quot;Percentage voted with Party&quot; failed to load</>;

  return (
    <PieChart
      title="Percentage voted with Party"
      labels={["With Party", "Against Party"]}
      datasets={[
        official?.votes_with_party_pct,
        official?.votes_against_party_pct,
      ]}
    />
  );
};

const Legislation = ({ id }: LegislationProps) => {
  return (
    <SimpleGrid columns={[1, null, 3]} gap={8}>
      <VotedWithPartyChart id={id} />
    </SimpleGrid>
  );
};

export default Legislation;
