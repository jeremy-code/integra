import React from "react";
import useSWR from "swr";

type LegislationProps = {
  id: string;
};

const Legislation = ({ id }: LegislationProps) => {
  const { data, error } = useSWR(
    () => `{
    getIntegraOfficialById(id: "${id}") {
      id
      name
    }
  }`
  );

  const official = data?.getIntegraOfficialById;

  return <div>Legislation</div>;
};

export default Legislation;
