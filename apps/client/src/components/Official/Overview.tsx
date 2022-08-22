import React from "react";
import useSWR from "swr";

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

  return <>Overview</>;
};

export default Overview;