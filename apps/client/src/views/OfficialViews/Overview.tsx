import React, { useEffect } from "react";
import useSWR from "swr";
import {
  Avatar,
  Text,
  Skeleton,
  Grid,
  Tag,
  Box,
  Heading,
} from "@chakra-ui/react";

import { Card } from "@/components/Card";

type OverviewProps = {
  id: string;
};

const Overview = ({ id }: OverviewProps) => {
  const { data, error } = useSWR(
    () => `{
    getIntegraOfficialById(id: "${id}") {
      id
      age
      name
      party
      seniority
      title
      
    }
  }`
  );

  const official = data?.getIntegraOfficialById;

  return (
    <>
      <Box>weed</Box>
    </>
  );
};

export default Overview;
