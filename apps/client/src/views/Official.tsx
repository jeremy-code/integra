import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Avatar, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

import { Layout, Tabs } from "@/components/Layout";
import { Overview, Legislation } from "@/views/OfficialViews";
import { Error } from "@/views";
import { OfficialHeader } from "@/components/Official";
import OfficialDetails from "@/components/Official/OfficialDetails";

import { apolloClient } from "@/utils";
import { gql } from "@apollo/client";

const Official = () => {
  const { slug } = useParams();
  const { state } = useLocation() as { state?: { official_id: string } };
  // get the official id from the location state, otherwise take it from the slug
  const [officialId] = useState<string | undefined>(
    state?.official_id ?? slug?.split("-").pop()
  );

  if (!officialId) return <Error />;

  return (
    <Layout
      breadcrumbs={[
        { title: "Home", href: "/" },
        { title: "Officials", href: "/officials" },
        { title: "Official", href: `/officials/${officialId}` },
      ]}
    >
      <OfficialHeader id={officialId} />
      <OfficialDetails id={officialId} />
      <Tabs
        content={[
          { title: "Overview", body: <Overview id={officialId} /> },
          { title: "Legislation", body: <Legislation id={officialId} /> },
          { title: "Fundraising", body: <Text>Fundraising</Text> },
        ]}
      />
    </Layout>
  );
};

export default Official;
