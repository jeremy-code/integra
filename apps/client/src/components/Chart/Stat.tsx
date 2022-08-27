import React from "react";
import {
  Stat as ChakraStat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";

type StatProps = {
  label: string;
  data: string;
  helpText?: string;
  type?: "increase" | "decrease";
};

const Stat = ({ label, data, helpText, type }: StatProps) => {
  return (
    <ChakraStat>
      <StatLabel>{label}</StatLabel>
      <StatNumber>{data}</StatNumber>
      {helpText && (
        <StatHelpText>
          <StatArrow type={type} />
          {helpText}
        </StatHelpText>
      )}
    </ChakraStat>
  );
};

export default Stat;
