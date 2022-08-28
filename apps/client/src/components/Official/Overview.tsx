import {
  Grid,
  GridItem,
  Heading,
  Skeleton,
  ListItem,
  UnorderedList,
  Box,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import useSWR from "swr";

import { Stat } from "@/components/Chart";
import { convertToUSD } from "@/utils";

type OverviewProps = {
  id: string;
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

  if (error) return <div>failed to load</div>;

  return (
    <Skeleton isLoaded={!!data}>
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

  useEffect(() => {
    console.log(member_profile);
  }, [member_profile]);

  const netWorthLow = convertToUSD(member_profile?.net_low);
  const netWorthHigh = convertToUSD(member_profile?.net_high);

  if (error) {
    return <>Failed to load</>;
  }

  return (
    <Stat
      label="Estimated Net Worth"
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
      <Box border="1px solid" borderColor="gray.200" p={4}>
        <Positions id={id} />
      </Box>
    </SimpleGrid>
  );
};

export default Overview;
