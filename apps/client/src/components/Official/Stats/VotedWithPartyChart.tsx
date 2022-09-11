import { PieChart } from "@/components/Chart";
import { useOfficialData } from "@/hooks";

export const VotedWithPartyChart = () => {
  const { official, error } = useOfficialData({
    queryName: "getVotedWithParty",
    query: `{
      id
      party
      votes_against_party_pct
      votes_with_party_pct
    }
    `,
  });

  if (error) return <>&quot;Percentage voted with Party&quot; failed to load</>;

  return (
    <PieChart
      title="Percentage voted with Party"
      labels={["With Party", "Against Party"]}
      datasets={[
        official?.votes_with_party_pct,
        official?.votes_against_party_pct,
      ]}
    />
  );
};
