import useSWR from "swr";

import { HorizontalBarChart } from "@/components/Chart";
import { useOfficialData, useOfficialId } from "@/hooks";

export const PolarizationChart = () => {
  const { official, error } = useOfficialData({
    queryName: "getPolarization",
    query: `{
      id
      dw_nominate
    }`,
  });

  const LIGHT_BLUE = "rgba(239, 68, 68, 0.2)";
  const LIGHT_RED = "rgba(14, 165, 233, 0.2)";

  const BLUE = "#ef4444";
  const RED = "#0ea5e9";

  const dw_nominate = official?.dw_nominate;

  return (
    <HorizontalBarChart
      title="Polarization"
      datasets={[dw_nominate]}
      labels={["DW Nominate"]}
      backgroundColor={dw_nominate > 0 ? LIGHT_BLUE : LIGHT_RED}
      borderColor={dw_nominate > 0 ? BLUE : RED}
    />
  );
};
