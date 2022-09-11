import { createColumnHelper } from "@tanstack/react-table";

import { Table } from "@/components/Chart";
import { StatCard } from "@/components/Card";
import { useOfficialData } from "@/hooks";

export const BillsIntroducedTable = () => {
  const { official, error } = useOfficialData({
    queryName: "getBillsIntroduced",
    query: `{
      id
      recentBills {
        introduced_date
        short_title
        primary_subject
      }
    }`,
  });

  if (error) return <>&quot;Bills Introduced&quot; failed to load</>;

  type Bill = {
    introduced_date: string;
    short_title: string;
    primary_subject: string;
  };

  const recentBills = official?.recentBills;

  const columnHelper = createColumnHelper<Bill>();

  const columns = [
    columnHelper.accessor("introduced_date", {
      cell: (info) => info.getValue(),
      header: "Introduced",
    }),
    columnHelper.accessor("short_title", {
      cell: (info) => info.getValue(),
      header: "Short Title",
    }),
    columnHelper.accessor("primary_subject", {
      cell: (info) => info.getValue(),
      header: "Subject",
    }),
  ];

  return (
    <StatCard
      title="Bills Introduced"
      isLoaded={!!recentBills}
      overflowX="scroll"
      height="max(40rem, 100%)"
    >
      {recentBills && <Table data={recentBills} columns={columns} />}
    </StatCard>
  );
};
