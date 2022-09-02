import React from "react";
import {
  Heading,
  Skeleton,
  ListItem,
  UnorderedList,
  Box,
  SimpleGrid,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import useSWR from "swr";

import { Stat } from "@/components/Chart";
import { convertToUSD } from "@/utils";

type OverviewProps = {
  id: string;
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

  const official = data?.getIntegraOfficialById;

  if (error) return <>&quot;Phone&quot; failed to load</>;

  return <Stat label="Phone" data={official?.phone} isLoaded={!!official} />;
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

  return <Stat label="Office" data={official?.office} isLoaded={!!official} />;
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
    <Skeleton isLoaded={!!data}>
      <Box
        border="1px solid"
        p={4}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        borderColor={useColorModeValue("gray.200", "whiteAlpha.300")}
      >
        <Heading size="md" mb={4}>
          Leadership Positions
        </Heading>

        {member_profile?.position ? (
          <UnorderedList>
            {member_profile?.position?.map((position, index) => (
              <ListItem>
                {position.title} at {position.organization}
              </ListItem>
            ))}
          </UnorderedList>
        ) : (
          "None found"
        )}
      </Box>
    </Skeleton>
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
      <Flex gap={2}>
        <Office id={id} />
        <Phone id={id} />
      </Flex>
    </SimpleGrid>
  );
};

export default Overview;
