import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { SimpleGrid, ScaleFade } from "@chakra-ui/react";
import useSWR from "swr";

import { Layout } from "@/components/Layout";
import { OfficialCard } from "@/components/Card";
import { useLocalStorage } from "@/hooks";
import { Loading, Error, Head } from "@/components/Misc";
import type { IntegraOfficial } from "@/types";

const OfficialsPage = () => {
  const { query } = useRouter();

  const [savedLocation, setSavedLocation] = useLocalStorage<string | undefined>(
    "officials_location",
    query?.location as string
  );

  const { data, error } = useSWR(
    () => `{
    getIntegraOfficialsByAddress(address: "${
      query?.location ?? savedLocation
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

  // Store the location in local storage
  // Ideally, should not change often, and allows users to go back to see their previous search
  useEffect(() => {
    if (!query?.location) return;
    setSavedLocation(query?.location as string);
  }, [query?.location, setSavedLocation]);

  // if there is an error, or nothing in localstorage or location state, show error
  // if (error || (!savedLocation && !query?.location)) return <Error />;

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
      <Head title="Officials" />
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

export default OfficialsPage;