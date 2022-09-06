import React from "react";

import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import type { ChartOptions, ChartData } from "chart.js";
import { Skeleton, useColorModeValue } from "@chakra-ui/react";

import {
  greenAndRedBackgroundColors,
  greenAndRedBorderColors,
} from "@/components/Chart";

ChartJS.register(ArcElement, Title, Tooltip, Legend);

type PieChartProps = {
  title: string;
  labels: string[];
  datasets: number[];
};

const PieChart = ({ title, labels, datasets }: PieChartProps) => {
  ChartJS.defaults.color = useColorModeValue("#1a202c", "white");

  const options: ChartOptions<"pie"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  const data: ChartData<"pie"> = {
    labels,
    datasets: [
      {
        data: datasets,
        backgroundColor: greenAndRedBackgroundColors,
        borderColor: greenAndRedBorderColors,
        borderWidth: 1,
      },
    ],
  };
  return (
    <Skeleton isLoaded={!!datasets}>
      <Pie data={data} options={options} redraw />
    </Skeleton>
  );
};

export default PieChart;
