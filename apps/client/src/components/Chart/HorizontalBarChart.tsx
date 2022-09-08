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

ChartJS.unregister(Legend);

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

type HorizontalBarChartProps = {
  title: string;
  labels: string[];
  datasets: number[];
  backgroundColor?: string;
  borderColor?: string;
};

const HorizontalBarChart = ({
  title,
  labels,
  datasets,
  backgroundColor,
  borderColor,
}: HorizontalBarChartProps) => {
  ChartJS.defaults.color = useColorModeValue("#1a202c", "white");

  const options: ChartOptions<"bar"> = {
    responsive: true,
    indexAxis: "y",
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: title,
      },
    },
    scales: {
      y: {
        stacked: true,
      },
      x: {
        max: 1,
        min: -1,
      },
    },
  };

  const data: ChartData<"bar"> = {
    labels,
    datasets: [
      {
        label: labels[0],
        data: datasets,
        backgroundColor,
        borderColor,
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

export default HorizontalBarChart;
