import React, { useEffect } from "react";
import useSWR from "swr";
import { Avatar, Text, Skeleton } from "@chakra-ui/react";

import { Card } from "@/components/Card";

type OverviewProps = {
  data: any;
};

const GOOGLE_GRAPH_API_KEY = import.meta.env.VITE_GOOGLE_GRAPH_API_KEY!;

const Overview = ({ data }: OverviewProps) => {
  const { data: googleData, error: googleError } = useSWR(
    () =>
      `https://kgsearch.googleapis.com/v1/entities:search?ids=${data.google_entity_id}&key=${GOOGLE_GRAPH_API_KEY}&limit=1&indent=True`
  );

  useEffect(() => {
    console.log(googleData);
  }, [googleData]);

  return (
    <>
      <Card>
        <Text fontSize="xl">
          {data?.short_title} {data?.first_name} {data?.last_name}
        </Text>
      </Card>
      {googleData ? (
        <Card display="flex" gap={4} w="lg" h="10rem">
          <Avatar src={googleData.itemListElement[0].result.image.contentUrl} />
          <Text>
            {
              googleData.itemListElement[0].result.detailedDescription
                ?.articleBody
            }
          </Text>
        </Card>
      ) : (
        <Skeleton w="lg" h="10rem" />
      )}
    </>
  );
};

export default Overview;
