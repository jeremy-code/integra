import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import useSWR from "swr";

import { Layout, Tabs } from "@/components/Layout";
import { Overview, Legislation } from "@/views/OfficialViews";
import type { OfficialType } from "@/types";

const Official = () => {
  const { official_name } = useParams();
  const state = useLocation().state as { official: OfficialType | null };
  // Get the official from the navigation state if it exists, otherwise use the URL
  const init: RequestInit = {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      state !== null
        ? state.official
        : { name: official_name!.replace(/_/g, " ") }
    ),
  };
  const { data, error } = useSWR(() => ["/api/official", init]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Layout>
      <Tabs
        content={[
          { title: "Overview", body: <Overview data={data} /> },
          { title: "Legislation", body: <Legislation data={data} /> },
          { title: "Fundraising", body: <Text>Fundraising</Text> },
        ]}
      />
    </Layout>
  );
};

export default Official;
