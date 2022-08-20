import React from "react";
import { useLocation } from "react-router-dom";
import { SimpleGrid, ScaleFade } from "@chakra-ui/react";

import { Layout } from "@/components/Layout";
import { OfficialCard } from "@/components/Card";
import { Loading, Error } from "@/views";
import type { IntegraOfficial } from "@/types";
import useSWR from "swr";

type AddressStateLocation = {
  state: {
    location: string;
  };
};

const Officials = () => {
  const location = useLocation();
  const { state } = location as AddressStateLocation;
  const { data, error } = useSWR(
    () => `{
    getIntegraOfficialsByAddress(address: "${state.location}") {
      id
      name
      party
    }
  }`
  );

  if (!data) return <Loading />;
  if (error) return <Error />;

  return (
    <Layout display="grid" placeItems="center">
      <SimpleGrid
        columns={[1, null, data?.getIntegraOfficialsByAddress.length]}
        gap={4}
        w="full"
      >
        {data?.getIntegraOfficialsByAddress.map((official: IntegraOfficial) => (
          <ScaleFade in initialScale={0.9} key={official.name}>
            <OfficialCard official={official} />
          </ScaleFade>
        ))}
      </SimpleGrid>
    </Layout>
  );
};

export default Officials;
