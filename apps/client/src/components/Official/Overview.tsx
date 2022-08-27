import {
  Grid,
  GridItem,
  Heading,
  Skeleton,
  ListItem,
  UnorderedList,
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
    <Skeleton isLoaded={!!data}>
      <Stat
        label="Estimated Net Worth"
        data={
          netWorthLow === netWorthHigh && !netWorthLow
            ? "Net worth was not found"
            : `${netWorthLow} - ${netWorthHigh}`
        }
      />
    </Skeleton>
  );
};

const Overview = ({ id }: OverviewProps) => {
  return (
    <Grid
      minH="lg"
      templateRows="repeat(2, 1fr)"
      templateColumns={["1fr", null, "repeat(2, 1fr)"]}
      gap={4}
    >
      <GridItem>
        <NetWorth id={id} />
      </GridItem>
      <GridItem>
        <Positions id={id} />
      </GridItem>
    </Grid>
  );
};

export default Overview;
