import useSWR from "swr";

import { useOfficialId } from "@/hooks/useOfficialId";
import type { Official } from "@/types";

type useOfficialDataProps = {
  queryName: string;
  query: string;
};

const useOfficialData = ({ queryName, query }: useOfficialDataProps) => {
  const id = useOfficialId();

  const { data, error } = useSWR([
    `query ${queryName}($where: OfficialWhereUniqueInput!) {
      official(where: $where) ${query}
    }`,
    { where: { id } },
  ]);

  if (error) return { data: null, error: true };

  const official = data?.official as Official;

  return { official, error: false };
};

export default useOfficialData;
