import React from "react";
import useSWR from "swr";
import {
  Grid,
  GridItem,
  Avatar,
  Heading,
  Text,
  Skeleton,
  useColorModeValue,
} from "@chakra-ui/react";

type OfficialHeaderProps = {
  id: string;
};

const OfficialHeader = ({ id }: OfficialHeaderProps) => {
  const { data } = useSWR(
    () => `{
    getIntegraOfficialById(id: "${id}") {
      id
      name
      party
      title
      google_knowledge_graph {
        itemListElement {
          result {
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

  return (
    <Skeleton isLoaded={!!official}>
      <Grid templateRows="repeat(2, 1fr)" templateColumns="11rem 1fr" mb={4}>
        <GridItem rowStart={1} rowSpan={2} colStart={1} placeSelf="center">
          <Avatar
            name={official?.name}
            getInitials={(name) =>
              name
                .split(" ")
                .slice(1)
                .map((n) => n[0])
                .join("")
            }
            src={
              official?.google_knowledge_graph?.itemListElement[0]?.result
                ?.image?.contentUrl
            }
            size="2xl"
            border="3px solid"
            mt={8}
            color={useColorModeValue("white", "gray.800")}
          />
        </GridItem>
        <GridItem
          gridArea="1 / 1 / 1 / 3"
          h="full"
          w="full"
          border="1px solid"
          borderColor={useColorModeValue("gray.200", "gray.700")}
          bg={useColorModeValue("gray.50", "gray.900")}
          borderRadius="md"
        />
        <GridItem gridArea="2 / 2 / 2">
          <Heading size="md" mt={2}>
            {official?.name}
          </Heading>
          <Text>{official?.title}</Text>
        </GridItem>
      </Grid>
    </Skeleton>
  );
};

export default OfficialHeader;
