import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import { Skeleton, useColorModeValue } from "@chakra-ui/react";

import type { ChartOptions, ChartData } from "chart.js";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

type PieChartProps = {
  title: string;
  datasets: {
    x: number;
    y: number;
  }[];
};

const ScatterChart = ({ title, datasets }: PieChartProps) => {
  ChartJS.defaults.color = useColorModeValue("#1a202c", "white");

  const options: ChartOptions<"scatter"> = {
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

  const data: ChartData<"scatter"> = {
    datasets: [
      {
        label: "Scatter Dataset",
        data: datasets,
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };
  return (
    <Skeleton isLoaded={!!datasets}>
      <Scatter data={data} options={options} redraw />
    </Skeleton>
  );
};

export default ScatterChart;

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
