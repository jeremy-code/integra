import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SimpleGrid, ScaleFade } from "@chakra-ui/react";
import useSWR from "swr";

import { Layout } from "@/components/Layout";
import { OfficialCard } from "@/components/Card";
import { Loading, Error } from "@/views";
import { useLocalStorage } from "@/hooks";
import type { IntegraOfficial } from "@/types";

type LocationState = {
  state?: {
    location: string;
  };
};

const Officials = () => {
  const location = useLocation() as LocationState;

  const [savedLocation, setSavedLocation] = useLocalStorage<string | undefined>(
    "officials_location",
    location.state?.location
  );

  const { data, error } = useSWR(
    () => `{
    getIntegraOfficialsByAddress(address: "${
      location.state?.location ?? savedLocation
    }") {
      id
      age
      name
      party
      title
      seniority
      slug
      google_knowledge_graph {
        itemListElement {
          result {
            name
            image {
              contentUrl
            }
          }
        }
      }
    }
  }`
  );

  // if there is an error, or nothing in localstorage or location state, show error
  if (error || (!savedLocation && !location.state?.location)) return <Error />;

  // Store the location in local storage
  // Ideally, should not change often, and allows users to go back to see their previous search
  useEffect(() => {
    if (!location.state?.location) return;
    setSavedLocation(location.state?.location);
  }, [location.state?.location]);

  if (!data)
    return (
      <Loading
        breadcrumbs={[
          { title: "Home", href: "/" },
          { title: "Officials", href: "/officials" },
        ]}
      />
    );

  return (
    <Layout
      display="grid"
      placeItems="center"
      breadcrumbs={[
        { title: "Home", href: "/" },
        { title: "Officials", href: "/officials" },
      ]}
    >
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
