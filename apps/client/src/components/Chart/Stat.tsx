import React from "react";
import {
  Stat as ChakraStat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Skeleton,
} from "@chakra-ui/react";

import type { StatProps as ChakraStatProps } from "@chakra-ui/react";

type StatProps = {
  label: string;
  data: string;
  helpText?: string;
  type?: "increase" | "decrease";
} & ChakraStatProps;

const Stat = ({ label, data, helpText, type, ...rest }: StatProps) => {
  return (
    <Skeleton isLoaded={!!data}>
      <ChakraStat p={2} border="1px solid" borderColor="gray.200" {...rest}>
        <StatLabel>{label}</StatLabel>
        <StatNumber>{data}</StatNumber>
        {helpText && (
          <StatHelpText>
            <StatArrow type={type} />
            {helpText}
          </StatHelpText>
        )}
      </ChakraStat>
    </Skeleton>
  );
};

export default Stat;
