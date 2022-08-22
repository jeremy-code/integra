import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Head } from "@/components/Misc";
import { Layout, Tabs } from "@/components/Layout";
import {
  OfficialHeader,
  OfficialDetails,
  Overview,
  Legislation,
  Fundraising,
} from "@/components/Official";

const OfficialPage = () => {
  const { query } = useRouter();
  const official_id = query?.official_id as string;
  const slug = query?.slug as string;

  // get the official id from the location state, otherwise take it from the slug
  const [officialId, setOfficialId] = useState<string>(
    official_id ?? slug?.split("-").pop()
  );

  useEffect(() => {
    if (!official_id && !slug) return;
    setOfficialId(official_id ?? slug?.split("-").pop());
  }, [official_id, slug]);

  return (
    <Layout
      breadcrumbs={[
        { title: "Home", href: "/" },
        { title: "Officials", href: "/officials" },
        { title: "Official", href: `/officials/${query?.slug}` },
      ]}
    >
      <Head
        // a very unfortunate way to get the name from the URL and save another query
        title={(query?.slug as string)
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
          { title: "Fundraising", body: <Fundraising id={officialId} /> },
        ]}
      />
    </Layout>
  );
};

export default OfficialPage;
