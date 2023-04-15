import { Box } from "@mui/material";
import { useRef } from "react";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";
// ChartJS.register(ArcElement, Tooltip, Legend);
import "chart.js/auto";
import { shades } from "../../theme";

const data = {
  labels: ["50 * 100 Plots", "100 * 100 Plots", "Other"],
  datasets: [
    {
      data: [33, 53, 85],
      fill: true,
      backgroundColor: [
        shades.green.main,
        shades.tone.red,
        shades.primary.main,
      ],
    },
  ],
};
const DoughnutGraph = () => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};
export default DoughnutGraph;
