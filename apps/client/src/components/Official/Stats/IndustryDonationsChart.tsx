import React from "react";

import { BarChart } from "@/components/Chart";
import { useOfficialData } from "@/hooks";

export const IndustryDonationsChart = () => {
  const { official, error } = useOfficialData({
    queryName: "getIndustryDonations",
    query: `{
      id
      candIndustry {
        industries {
          industry_name
          total
        }
      }
    }`,
  });

  const industries = official?.candIndustry?.industries;

  if (error)
    return <>&quot;Total Amount Donated by Industry&quot; failed to load</>;

  return (
    <BarChart
      title="Total Amount Donated by Industry"
      labels={industries?.map(({ industry_name }) =>
        // somewhat ugly but marginally faster than using .split()
        industry_name.lastIndexOf("/") === -1
          ? industry_name
          : industry_name.slice(0, industry_name.lastIndexOf("/"))
      )}
      datasets={industries?.map((industry) => industry.total)}
    />
  );
};
