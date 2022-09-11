import { Stat } from "@/components/Chart";
import { convertToUSD } from "@/utils";
import { useOfficialData } from "@/hooks";

export const NetWorth = () => {
  const { official, error } = useOfficialData({
    queryName: "getNetWorth",
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

  const member_profile = official?.memPFDProfile?.member_profile;

  const netWorthLow = convertToUSD(member_profile?.net_low);
  const netWorthHigh = convertToUSD(member_profile?.net_high);

  if (error) {
    return <>&quot;Net Worth&quot; failed to load</>;
  }

  return (
    <Stat
      label="Estimated Net Worth"
      isLoaded={!!official}
      data={
        netWorthLow === netWorthHigh && !netWorthLow
          ? "Net worth was not found"
          : `${netWorthLow} - ${netWorthHigh}`
      }
    />
  );
};
