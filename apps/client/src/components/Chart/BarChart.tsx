import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Skeleton, useColorModeValue } from "@chakra-ui/react";
import type { ChartOptions, ChartData } from "chart.js";

import { backgroundColors, borderColors } from "@/components/Chart";

ChartJS.unregister(Legend);

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

type BarChartProps = {
  title: string;
  labels: string[];
  datasets: number[];
};

const BarChart = ({ title, labels, datasets }: BarChartProps) => {
  ChartJS.defaults.color = useColorModeValue("#1a202c", "white");

  const options: ChartOptions<"bar"> = {
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

  const data: ChartData<"bar"> = {
    labels,
    datasets: [
      {
        data: datasets,
        backgroundColor: backgroundColors(datasets?.length),
        borderColor: borderColors(datasets?.length),
        borderWidth: 1,
      },
    ],
  };

  return (
    <Skeleton isLoaded={!!datasets}>
      <Bar data={data} options={options} redraw />
    </Skeleton>
  );
};

export default BarChart;
