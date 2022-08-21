import React from "react";
import { useParams } from "react-router-dom";
import { Avatar, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

import { Layout, Tabs } from "@/components/Layout";
import { Overview, Legislation } from "@/views/OfficialViews";
import { OfficialHeader } from "@/components/Official";
import OfficialDetails from "@/components/Official/OfficialDetails";

const Official = () => {
  const { official_id } = useParams();

  if (!official_id) {
    return <Text>Invalid official id</Text>;
  }

  return (
    <Layout
      breadcrumbs={[
        { title: "Home", href: "/" },
        { title: "Officials", href: "/officials" },
        { title: "Official", href: `/officials/${official_id}` },
      ]}
    >
      <OfficialHeader id={official_id} />
      <OfficialDetails id={official_id} />
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
