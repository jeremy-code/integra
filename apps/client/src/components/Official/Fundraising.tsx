import React from "react";
import useSWR from "swr";

type FundraisingProps = {
  id: string;
};

const Fundraising = ({ id }: FundraisingProps) => {
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

  return <>Fundraising</>;
};

export default Fundraising;
