import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { SimpleGrid, ScaleFade } from "@chakra-ui/react";
import useSWR from "swr";
import type { NextPage } from "next";

import { Layout } from "@/components/Layout";
import { OfficialCard } from "@/components/Card";
import { useLocalStorage } from "@/hooks";
import { Loading, Error, Head } from "@/components/Misc";
import type { Official } from "@/types";

const OfficialsPage: NextPage = () => {
  const { query } = useRouter();

  const [savedLocation, setSavedLocation] = useLocalStorage<string | undefined>(
    "officials_location",
    query?.location as string
  );

  const { data, error } = useSWR([
    `query findOfficialByLocation($location: String!) {
      findOfficialByLocation(location: $location) {
        id
        age
        name
        party
        title
        seniority
        slug
        photo_url
      }
    }`,
    {
      location: query?.location ?? savedLocation,
    },
  ]);

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
        columns={[1, null, data?.findOfficialByLocation.length]}
        gap={4}
        w="full"
      >
        {data?.findOfficialByLocation.map((official: Official) => (
          <ScaleFade in initialScale={0.9} key={official.name}>
            <OfficialCard official={official} />
          </ScaleFade>
        ))}
      </SimpleGrid>
    </Layout>
  );
};

export default OfficialsPage;
