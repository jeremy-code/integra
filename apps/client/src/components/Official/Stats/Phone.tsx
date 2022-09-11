import React from "react";
import { parsePhoneNumber } from "libphonenumber-js";
import { Link } from "@chakra-ui/react";

import { useOfficialData } from "@/hooks";
import { StatCard } from "@/components/Card";

export const Phone = () => {
  const { official, error } = useOfficialData({
    queryName: "getPhoneNumber",
    query: `{
      id
      phone
    }`,
  });

  if (error) return <>&quot;Phone&quot; failed to load</>;

  return (
    <StatCard isLoaded={!!official} title="Phone" w="full" h="full">
      {official?.phone ? (
        <Link
          color="blue.500"
          isExternal
          href={parsePhoneNumber(official?.phone, "US").getURI()}
          fontSize="2xl"
          fontWeight="bold"
        >
          {parsePhoneNumber(official?.phone, "US").formatNational()}
        </Link>
      ) : (
        "N/A"
      )}
    </StatCard>
  );
};
