import React from "react";

import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import type { ChartOptions, ChartData } from "chart.js";

import { backgroundColors, borderColors } from "@/components/Chart";

ChartJS.register(ArcElement, Title, Tooltip, Legend);

type PieChartProps = {
  title: string;
  labels: string[];
  datasets: number[];
};

const PieChart = ({ title, labels, datasets }: PieChartProps) => {
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
        backgroundColor: backgroundColors(datasets?.length),
        borderColor: borderColors(datasets?.length),
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} options={options} />;
};

export default PieChart;
