import React from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  Tag,
  useBoolean,
  useColorModeValue,
} from "@chakra-ui/react";

import { Card } from "@/components/Card";
import { Avatar } from "@/components/Misc";
import type { Official } from "@/types";

type OfficalCardProps = {
  official: Official;
};

const OfficialCard = ({ official }: OfficalCardProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useBoolean();

  return (
    <Card as={Flex} w="full" h="full" flexDir="column" gap={4} maxW="md">
      <Flex gap={4} flexGrow={1}>
        <Avatar name={official.name} src={official.photo_url} size="100" />
        <Box gap={4}>
          <Text fontSize="xl">{official.name}</Text>
          <Text color={useColorModeValue("gray.500", "gray.400")}>
            {official.title}
          </Text>
          <Text my={2}>
            Age {official.age} • Served {official.seniority}
            {parseInt(official.seniority) !== 1 ? " years" : " year"}
          </Text>
          <Tag
            colorScheme={
              official.party === "Democratic Party"
                ? "primary"
                : official.party === "Republican Party"
                ? "red"
                : "gray"
            }
          >
            {official.party}
          </Tag>
        </Box>
      </Flex>
      <Divider />
      <Button
        bg="primary.500"
        size="sm"
        ml="auto"
        isLoading={isLoading}
        onClick={async () => {
          setIsLoading.on();
          await router.push(
            {
              pathname: `/official/${official.slug}`,
              query: { official_id: official.id },
            },
            `/official/${official.slug}`
          );
          // not necessarry since it redirects, but just in case
          setIsLoading.off();
        }}
      >
        Learn More
      </Button>
    </Card>
  );
};

export default OfficialCard;
