import React, { useEffect } from "react";
import useSWR from "swr";
import { Avatar, Text, Skeleton } from "@chakra-ui/react";

import { Card } from "@/components/Card";

type OverviewProps = {
  id: string;
};

const Overview = ({ id }: OverviewProps) => {
  const { data, error } = useSWR(
    () => `{
    getIntegraOfficialById(id: "${id}") {
      id
      age
      name
      party
      seniority
      title
      google_knowledge_graph {
        itemListElement {
          result {
            name
            image {
              contentUrl
            }
          }
        }
      }
    }
  }`
  );

  const official = data?.getIntegraOfficialById;

  useEffect(() => {
    console.log();
  }, [id]);

  return (
    <>
      <Card>
        <Skeleton isLoaded={!!official}>
          <Avatar
            name={official?.name}
            src={
              official?.google_knowledge_graph.itemListElement[0].result.image
                .contentUrl
            }
            size="2xl"
          />
          <Text>{official?.name}</Text>
          <Text>{official?.title}</Text>
          <Text>{official?.party}</Text>
          <Text>{official?.seniority}</Text>
        </Skeleton>
      </Card>
    </>
  );
};

export default Overview;
