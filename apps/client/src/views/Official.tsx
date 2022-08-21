import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import useSWR from "swr";

import { Layout, Tabs } from "@/components/Layout";
import { Overview, Legislation } from "@/views/OfficialViews";
import type { IntegraOfficial } from "@/types";

const Official = () => {
  const { official_id } = useParams();

  if (!official_id) {
    return <Text>Invalid official id</Text>;
  }

  return (
    <Layout>
      <Tabs
        content={[
          { title: "Overview", body: <Overview id={official_id} /> },
          { title: "Legislation", body: <Legislation id={official_id} /> },
          { title: "Fundraising", body: <Text>Fundraising</Text> },
        ]}
      />
    </Layout>
  );
};

export default Official;
