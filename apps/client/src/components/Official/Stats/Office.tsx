import useSWR from "swr";

import { useOfficialData, useOfficialId } from "@/hooks";
import { Stat } from "@/components/Chart";

export const Office = () => {
  const { official, error } = useOfficialData({
    queryName: "getOffice",
    query: `{
      id
      office
    }
    `,
  });

  if (error) return <>&quot;Office&quot; failed to load</>;

  return (
    <Stat
      label="Office"
      data={official?.office ?? "Not Found"}
      isLoaded={!!official}
    />
  );
};
