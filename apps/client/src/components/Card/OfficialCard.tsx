import { useRouter } from "next/router";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  Tag,
  Avatar,
  useBoolean,
} from "@chakra-ui/react";

import { Card } from "@/components/Card";
import type { IntegraOfficial } from "@/types";

type OfficalCardProps = {
  official: IntegraOfficial;
};

const OfficialCard = ({ official }: OfficalCardProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useBoolean();

  return (
    <Card as={Flex} w="full" h="full" flexDir="column" gap={4} maxW="md">
      <Flex gap={4} flexGrow={1}>
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
            official?.google_knowledge_graph?.itemListElement[0]?.result?.image
              ?.contentUrl
          }
        />
        <Box gap={4}>
          <Heading size="md">{official.name}</Heading>
          <Text>{official.title}</Text>
          <Text my={2}>
            Age {official.age} • Served {official.seniority}
            {parseInt(official.seniority) !== 1 ? " years" : " year"}
          </Text>

          {official.party === "D" ? (
            <Tag>Democratic Party</Tag>
          ) : official.party === "R" ? (
            <Tag colorScheme="red">Republican Party</Tag>
          ) : (
            <Tag colorScheme="gray">Independent</Tag>
          )}
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
              pathname: `/officials/${official.slug}`,
              query: { official_id: official.id },
            },
            `/officials/${official.slug}`
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
