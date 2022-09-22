import { Flex, Skeleton, Text } from "@chakra-ui/react";

import { useOfficialData } from "@/hooks";
import { Card } from "@/components/Card";

export const Description = () => {
  const { official, error } = useOfficialData({
    queryName: "getDescription",
    query: `{
      id
      googleKnowledgeGraph {
        result {
          detailedDescription {
            articleBody
          }
          description
        }
      }
    }`,
  });

  if (error) return <>&quot;Description&quot; failed to load</>;

  return (
    <Flex flexDir="column" h="full">
      <Text fontWeight="bold" mb={2}>
        Description
      </Text>
      <Skeleton isLoaded={!!official} flexGrow={1}>
        <Card display="flex" flexDir="column" gap={2} w="full" h="full">
          <Text>
            {official?.googleKnowledgeGraph[0]?.result?.detailedDescription
              ?.articleBody ??
              official?.googleKnowledgeGraph[0]?.result?.description ??
              "No information available"}
          </Text>
        </Card>
      </Skeleton>
    </Flex>
  );
};
