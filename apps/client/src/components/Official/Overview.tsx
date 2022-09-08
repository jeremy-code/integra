import React, { useEffect } from "react";
import {
  ListItem,
  UnorderedList,
  SimpleGrid,
  Link,
  Flex,
} from "@chakra-ui/react";
import useSWR from "swr";
import parsePhoneNumber from "libphonenumber-js";

import { Stat } from "@/components/Chart";
import { convertToUSD } from "@/utils";
import { StatCard } from "@/components/Card";

type OverviewProps = {
  id: string;
};

const CookPVIStat = ({ id }: OverviewProps) => {
  const { data, error } = useSWR(
    () => `{
      getIntegraOfficialById(id: "${id}") {
      id
      cook_pvi
    }
  }`
  );

  const official = data?.getIntegraOfficialById;

  return (
    <Stat
      data={official?.cook_pvi ?? "Not Found"}
      label="Cook PVI"
      isLoaded={!!official}
      w="full"
    />
  );
};

const Contact = ({ id }: OverviewProps) => {
  const { data, error } = useSWR(
    () => `{
    getIntegraOfficialById(id: "${id}") {
      id
      contact_form
    }
  }`
  );

  const official = data?.getIntegraOfficialById;

  if (error) return <>&quot;Contact&quot; failed to load</>;

  return (
    <StatCard title="Contact" isLoaded={!!official} w="full">
      {official?.contact_form ? (
        <Link href={official?.contact_form} isExternal color="blue.500">
          Contact Form Link URL
        </Link>
      ) : (
        "No contact form available"
      )}
    </StatCard>
  );
};

const SocialMedia = ({ id }: OverviewProps) => {
  const { data, error } = useSWR(
    () => `{
    getIntegraOfficialById(id: "${id}") {
      id
      social_media {
        facebook
        twitter
        youtube
      }
    }
  }`
  );

  const socialMedia = data?.getIntegraOfficialById.social_media;

  if (error) return <>&quot;Social Media&quot; failed to load</>;

  return (
    <StatCard isLoaded={!!data} title="Social Media" w="full">
      {socialMedia ? (
        <UnorderedList>
          <ListItem>
            Facebook:{" "}
            {socialMedia.facebook ? (
              <Link
                href={`https://facebook.com/${socialMedia.facebook}`}
                isExternal
                color="blue.500"
              >
                {socialMedia.facebook}
              </Link>
            ) : (
              "N/A"
            )}
          </ListItem>
          <ListItem>
            Twitter:{" "}
            {socialMedia.twitter ? (
              <Link
                href={`https://twitter.com/${socialMedia.twitter}`}
                target="_blank"
                color="blue.500"
              >
                {socialMedia.twitter}
              </Link>
            ) : (
              "N/A"
            )}
          </ListItem>
          <ListItem>
            Youtube:{" "}
            {socialMedia.youtube ? (
              <Link
                href={`https://youtube.com/${socialMedia.youtube}`}
                target="_blank"
                color="blue.500"
              >
                {socialMedia.youtube}
              </Link>
            ) : (
              "N/A"
            )}
          </ListItem>
        </UnorderedList>
      ) : (
        "None found"
      )}
    </StatCard>
  );
};

const Phone = ({ id }: OverviewProps) => {
  const { data, error } = useSWR(
    () => `{
    getIntegraOfficialById(id: "${id}") {
      id
      phone
    }
  }`
  );

  if (error) return <>&quot;Phone&quot; failed to load</>;

  const phone = parsePhoneNumber(
    data?.getIntegraOfficialById?.phone ?? "",
    "US"
  );

  return (
    <StatCard isLoaded={!!data} title="Phone" w="full" h="full">
      {phone ? (
        <Link
          color="blue.500"
          isExternal
          href={phone.getURI()}
          fontSize="2xl"
          fontWeight="bold"
        >
          {phone.formatNational()}
        </Link>
      ) : (
        "N/A"
      )}
    </StatCard>
  );
};

const Office = ({ id }: OverviewProps) => {
  const { data, error } = useSWR(
    () => `{
    getIntegraOfficialById(id: "${id}") {
      id
      office
    }
  }`
  );

  const official = data?.getIntegraOfficialById;

  if (error) return <>&quot;Office&quot; failed to load</>;

  return (
    <Stat
      label="Office"
      data={official?.office ?? "Not Found"}
      isLoaded={!!official}
    />
  );
};

const Positions = ({ id }: OverviewProps) => {
  const { data, error } = useSWR(
    () => `{
    getIntegraOfficialById(id: "${id}") {
      id
      memPFDProfile {
        position {
          title
          organization
        }
      }
    }
  }`
  );

  const member_profile = data?.getIntegraOfficialById?.memPFDProfile;

  if (error) return <>&quot;Positions&quot; failed to load</>;

  return (
    <StatCard isLoaded={!!data} title="Leadership Positions" w="full">
      {member_profile?.position ? (
        <UnorderedList>
          {member_profile?.position?.map((position) => (
            <ListItem>
              {position.title} at {position.organization}
            </ListItem>
          ))}
        </UnorderedList>
      ) : (
        "None found"
      )}
    </StatCard>
  );
};

const NetWorth = ({ id }: OverviewProps) => {
  const { data, error } = useSWR(
    () => `{
    getIntegraOfficialById(id: "${id}") {
      id
      memPFDProfile {
        member_profile {
          net_low
          net_high
          asset_count
          asset_low
          asset_high
        }
      }
    }
  }`
  );

  const member_profile =
    data?.getIntegraOfficialById?.memPFDProfile?.member_profile;

  const netWorthLow = convertToUSD(member_profile?.net_low);
  const netWorthHigh = convertToUSD(member_profile?.net_high);

  if (error) return <>&quot;Net Worth&quot; failed to load</>;

  return (
    <Stat
      label="Estimated Net Worth"
      isLoaded={!!data}
      data={
        netWorthLow === netWorthHigh && !netWorthLow
          ? "Net worth was not found"
          : `${netWorthLow} - ${netWorthHigh}`
      }
    />
  );
};

const Overview = ({ id }: OverviewProps) => {
  return (
    <SimpleGrid columns={[1, null, 2]} gap={8}>
      <NetWorth id={id} />
      <Positions id={id} />
      <SimpleGrid columns={[1, null, 2]} gap={2}>
        <Office id={id} />
        <Phone id={id} />
      </SimpleGrid>
      <SocialMedia id={id} />
      <Flex w="full" gap={8}>
        <Contact id={id} />
        <CookPVIStat id={id} />
      </Flex>
    </SimpleGrid>
  );
};

export default Overview;
