import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import { prisma } from "database";

import { Head } from "@/components/Misc";
import { Layout, Tabs } from "@/components/Layout";
import {
  OfficialHeader,
  OfficialDetails,
  Overview,
  Legislation,
  Fundraising,
} from "@/components/Official";
import { apolloClient } from "@/utils";

type OfficialPageProps = {
  id: string;
  photoUrl?: string;
  title: string;
  description?: string;
};

const OfficialPage = ({
  id,
  photoUrl,
  title,
  description,
}: OfficialPageProps) => {
  const { query } = useRouter();
  const official_id = (query?.official_id as string) ?? id;
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
      <Head title={title} image={photoUrl} description={description} />
      <OfficialHeader id={officialId} photoUrl={photoUrl} />
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

async function checkImage(url: string): Promise<boolean> {
  const res = await fetch(url);
  const buff = await res.blob();
  return buff.type.startsWith("image/");
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  const official_id = slug?.split("-").pop() as string;

  const { id_, short_title, first_name, last_name, state, title } =
    await prisma.officials.findFirst({
      where: {
        id: official_id,
      },
    });

  const photoUrl = `https://theunitedstates.io/images/congress/450x550/${id_}.jpg`;

  return {
    props: {
      official_id,
      photoUrl: (await checkImage(photoUrl)) ? photoUrl : null,
      title: `${short_title} ${first_name} ${last_name}`,
      description: `${short_title} ${first_name} ${last_name} • ${title} | ${state}`,
    },
  };
}

export async function getStaticPaths() {
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: true,
    };
  }

  const { data } = await apolloClient.query({
    query: gql`
      query {
        getAllIntegraOfficials {
          id
          slug
        }
      }
    `,
  });

  const paths = data?.getAllIntegraOfficials.map(({ slug }) => ({
    params: {
      slug,
    },
  }));

  return { paths, fallback: false };
}

export default OfficialPage;
