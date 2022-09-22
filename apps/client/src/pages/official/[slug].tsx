import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import type { GetStaticProps, GetStaticPaths, NextPage } from "next";

import { Head } from "@/components/Misc";
import { Layout, Tabs } from "@/components/Layout";
import {
  OfficialHeader,
  Overview,
  Legislation,
  Fundraising,
} from "@/components/Official";
import { apolloClient } from "@/utils";
import { prisma } from "database";
import { OfficialIdProvider } from "@/hooks";

type OfficialPageProps = {
  id: string;
  photoUrl?: string;
  title: string;
  description?: string;
};

const OfficialPage: NextPage<OfficialPageProps> = ({
  id,
  photoUrl,
  title,
  description,
}) => {
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
      sidebar
      breadcrumbs={[
        { title: "Home", href: "/" },
        { title: "Officials", href: "/officials" },
        { title: "Official", href: `/official/${query?.slug}` },
      ]}
    >
      <Head title={title} image={photoUrl} description={description} />
      <OfficialIdProvider id={officialId}>
        <OfficialHeader photoUrl={photoUrl} />
        <Tabs
          content={[
            { title: "Overview", body: <Overview /> },
            { title: "Legislation", body: <Legislation /> },
            { title: "Fundraising", body: <Fundraising /> },
          ]}
        />
      </OfficialIdProvider>
    </Layout>
  );
};

// Verify that the image url is valid
async function checkImage(url: string): Promise<boolean> {
  const buff = await (await fetch(url)).blob();
  return buff.type.startsWith("image/");
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string };

  const official_id = slug?.split("-").pop() as string;

  // Directly getting the data from DB rather than GraphQL query
  // Still secure as this is only run server-side
  const { bioguide_id, short_title, first_name, last_name, state, title } =
    await prisma.official.findFirst({
      where: {
        id: official_id,
      },
    });

  const photoUrl = `https://theunitedstates.io/images/congress/450x550/${bioguide_id}.jpg`;

  return {
    props: {
      official_id,
      photoUrl: (await checkImage(photoUrl)) ? photoUrl : null,
      title: `${short_title} ${first_name} ${last_name}`,
      description: `${short_title} ${first_name} ${last_name} • ${title} • ${state}`,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: true,
    };
  }

  const { data } = await apolloClient.query({
    query: gql`
      query getAllOfficials($where: OfficialWhereInput) {
        officials(where: $where) {
          id
          slug
        }
      }
    `,
    variables: {
      where: {
        in_office: {
          equals: true,
        },
      },
    },
  });

  const paths = data?.officials.map(({ slug }) => ({
    params: {
      slug,
    },
  }));

  return { paths, fallback: false };
};

export default OfficialPage;
