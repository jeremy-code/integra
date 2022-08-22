import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Text } from "@chakra-ui/react";

import { Layout, Tabs } from "@/components/Layout";
import { Error } from "@/views";
import { Overview, Legislation } from "@/views/OfficialViews";
import { OfficialHeader, OfficialDetails } from "@/components/Official";
import { Head } from "@/components/Misc";

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
        { title: "Official", href: `/officials/${slug}` },
      ]}
    >
      <Head
        // a very unfortunate way to get the name from the URL and save another query
        title={slug
          ?.split("-")
          .map((name) => name[0].toUpperCase() + name.slice(1))
          .slice(0, -1)
          .join(" ")}
      />
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
