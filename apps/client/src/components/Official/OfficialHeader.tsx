import React from "react";
import useSWR from "swr";
import {
  Grid,
  GridItem,
  Heading,
  Text,
  Skeleton,
  useColorModeValue,
} from "@chakra-ui/react";

import { Avatar } from "@/components/Misc";

type OfficialHeaderProps = {
  id: string;
  photoUrl?: string;
};

const OfficialHeader = ({ id, photoUrl }: OfficialHeaderProps) => {
  const { data } = useSWR(
    () => `{
    getIntegraOfficialById(id: "${id}") {
      id
      name
      party
      title
    }
  }`
  );

  const official = data?.getIntegraOfficialById;

  return (
    <Grid templateRows="repeat(2, 1fr)" templateColumns="11rem 1fr" mb={4}>
      <GridItem rowStart={1} rowSpan={2} colStart={1} placeSelf="center">
        <Avatar
          name={official?.name}
          src={photoUrl}
          size="100"
          mt={8}
          borderRadius="full"
          border="3px solid"
          borderColor={useColorModeValue("white", "gray.800") ?? "white"}
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
        zIndex={-1}
      />
      <GridItem gridArea="2 / 2 / 2">
        <Skeleton isLoaded={!!official}>
          <Heading size="md" mt={2}>
            {official?.name}
          </Heading>
          <Text>{official?.title}</Text>
        </Skeleton>
      </GridItem>
    </Grid>
  );
};

export default OfficialHeader;
