import React, { useEffect } from "react";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import { Card } from "@/components/Card";
import useSWR from "swr";
import { Flex } from "@chakra-ui/react";

type LegislationProps = {
  id: string;
};

const Legislation = ({ id }: LegislationProps) => {
  const { data, error } = useSWR(
    () => `{
    getIntegraOfficialById(id: "${id}") {
      id
      name
    }
  }`
  );

  const official = data?.getIntegraOfficialById;

  return <div>Legislation</div>;
};

export default Legislation;

// ChartJS.register(
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const options = {
//   plugins: {
//     title: {
//       display: true,
//       text: "Percentage of Times Voted With Party",
//     },
//   },
//   responsive: true,
// };

// const votesWithParty = {
//   labels: ["With", "Against"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [data?.votes_with_party_pct, data?.votes_against_party_pct],
//       backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(255, 99, 132, 0.2)"],
//       borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
//       borderWidth: 1,
//     },
//   ],
// };

// const industryOptions = {
//   plugins: {
//     title: {
//       display: true,
//       text: "Total Amount Donated by Industry",
//     },
//     legend: {
//       position: "top" as const,
//     },
//   },
//   responsive: true,
// };

// const industryDonations = {
//   // only the top 5
//   labels: openSecretsData?.response.industries.industry
//     .slice(0, 5)
//     .map((industry: any) => industry["@attributes"].industry_name),
//   datasets: [
//     {
//       label: "# of Votes",
//       data: openSecretsData?.response.industries.industry
//         .slice(0, 5)
//         .map((industry: any) => industry["@attributes"].total),
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

// useEffect(() => {
//   console.log(openSecretsData);
// }, [openSecretsData]);

// return (
//   <Flex gap={4}>
//     <Card>
//       <Pie data={votesWithParty} options={options} />
//     </Card>
//     <Card flexGrow={1}>
//       <Bar data={industryDonations} options={industryOptions} />
//     </Card>
//   </Flex>
// );
