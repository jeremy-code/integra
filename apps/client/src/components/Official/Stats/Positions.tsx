import { StatCard } from "@/components/Card";
import { useOfficialData, useOfficialId } from "@/hooks";
import { UnorderedList, ListItem } from "@chakra-ui/react";
import useSWR from "swr";

export const Positions = () => {
  const { official, error } = useOfficialData({
    queryName: "getPositions",
    query: `{
      id
      memPFDProfile {
        member_profile {
          net_low
          net_high
          asset_count
          asset_low
          asset_high
        }
        position {
          title
          organization
        }
      }
    }
    `,
  });

  const member_profile = official?.memPFDProfile;

  if (error) return <>&quot;Positions&quot; failed to load</>;

  return (
    <StatCard isLoaded={!!official} title="Leadership Positions" w="full">
      {member_profile?.position ? (
        <UnorderedList>
          {member_profile?.position?.map((position) => (
            <ListItem key={`${position.title}-${position.organization}`}>
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
