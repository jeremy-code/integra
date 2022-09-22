import React from "react";
import {
  Grid,
  GridItem,
  Heading,
  Text,
  Skeleton,
  useColorModeValue,
} from "@chakra-ui/react";

import { Avatar } from "@/components/Misc";
import { useOfficialData } from "@/hooks";

type OfficialHeaderProps = {
  photoUrl?: string;
};

const OfficialHeader = ({ photoUrl }: OfficialHeaderProps) => {
  const { official, error } = useOfficialData({
    queryName: "getOfficialHeading",
    query: `{
      id
      name
      party
      short_title
      title
    }`,
  });

  return (
    <Grid
      templateRows="repeat(2, 1fr)"
      templateColumns="11rem 1fr"
      pb={4}
      borderWidth="0 1px"
      borderStyle="solid"
      borderColor={useColorModeValue("gray.200", "gray.600")}
      bg={useColorModeValue("white", "gray.700")}
    >
      <GridItem
        gridArea="1 / 1 / 1 / 3"
        h="full"
        w="full"
        borderWidth="1px 0"
        borderStyle="solid"
        borderColor={useColorModeValue("gray.200", "gray.600")}
        bg={useColorModeValue("gray.50", "gray.800")}
      />
      <GridItem gridArea="2 / 2 / 2">
        <Skeleton isLoaded={!!official}>
          <Text fontSize="2xl" mt={2}>
            {official?.name}
          </Text>
          <Text color={useColorModeValue("gray.500", "gray.300")}>
            {official?.title}
          </Text>
        </Skeleton>
      </GridItem>
      <GridItem rowStart={1} rowSpan={2} colStart={1} placeSelf="center">
        <Avatar
          name={official?.name}
          src={photoUrl}
          size="100"
          mt={8}
          borderRadius="full"
          border="3px solid"
          borderColor={useColorModeValue("white", "gray.700")}
          zIndex={8}
        />
      </GridItem>
    </Grid>
  );
};

export default OfficialHeader;
