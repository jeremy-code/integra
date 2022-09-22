import React from "react";
import {
  Flex,
  Text,
  Skeleton,
  Link,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";

import { Card } from "@/components/Card";
import { Icon } from "@/components/Icon";
import { truncateLink } from "@/utils";

type IconCardProps = {
  title: string;
  isLoaded?: boolean;
  items: {
    icon: React.ComponentProps<typeof Icon>;
    text?: string;
    href?: string;
  }[];
} & React.ComponentProps<typeof Card>;

const IconCard = ({ title, isLoaded, items, ...props }: IconCardProps) => {
  const iconColor = useColorModeValue("gray.500", "gray.300");

  return (
    <Flex flexDir="column">
      <Text fontWeight="bold" mb={2}>
        {title}
      </Text>
      <Skeleton isLoaded={isLoaded}>
        <Card
          display="flex"
          flexDir="column"
          gap={2}
          w="full"
          h="full"
          {...props}
        >
          {items.map(({ icon, text, href }, index) => {
            const url = href ? new URL(href) : undefined;

            return (
              <Flex key={index} align="center">
                <Icon {...icon} mr={4} color={iconColor} />

                {url && text ? (
                  <Link href={url.href} isExternal>
                    {text}
                  </Link>
                ) : url ? (
                  <Link href={url.href} isExternal>
                    {truncateLink(`${url.hostname}${url.pathname}`)}
                  </Link>
                ) : (
                  <Text>{text ?? "N/A"}</Text>
                )}
              </Flex>
            );
          })}
        </Card>
      </Skeleton>
    </Flex>
  );
};

export default IconCard;
