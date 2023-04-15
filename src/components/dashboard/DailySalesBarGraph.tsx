import { Box } from "@mui/material";
import { useRef } from "react";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";
// ChartJS.register(ArcElement, Tooltip, Legend);
import "chart.js/auto";
import { shades } from "../../theme";

const data = {
  labels: [
    "Apr 1",
    "Apr 2",
    "Apr 3",
    "Apr 4",
    "Apr 5",
    "Apr 6",
    "Apr 7",
    "Apr 8",
  ],
  datasets: [
    {
      data: [33, 53, 85, 20, 10, 45, 30, 20],
      fill: true,

      backgroundColor: shades.primary.main,
      borderRadius: 5,
    },
  ],
};
const DailySalesBarGraph = () => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      y: {
        display: false, // Hide Y axis labels
      },
      x: {
        display: false, // Hide X axis labels
      },
    },
  };

  return <Bar data={data} options={options} />;
};
export default DailySalesBarGraph;
