import React from "react";
import { Heading, Skeleton } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";

import { Card } from "@/components/Card";

type StatCardProps = {
  isLoaded: boolean;
  title: string;
  children: React.ReactNode;
} & BoxProps;

const StatCard = ({ isLoaded, title, children, ...rest }: StatCardProps) => {
  return (
    <Skeleton isLoaded={isLoaded} {...rest}>
      <Card {...rest}>
        <Heading size="md" mb={4}>
          {title}
        </Heading>
        {children}
      </Card>
    </Skeleton>
  );
};

export default StatCard;
