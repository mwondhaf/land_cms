import { Box } from "@mui/material";
import { useRef } from "react";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";
// ChartJS.register(ArcElement, Tooltip, Legend);
import "chart.js/auto";
import { shades } from "../../theme";

const data = {
  labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "March", "April"],
  datasets: [
    {
      data: [3300000, 5300000, 8500000, 20000000, 10000000, 45000000, 30000000],
      //   fill: true,

      //   backgroundColor: shades.primary.main,
      borderRadius: 5,
    },
  ],
};
const MonthlySalesLineChart = () => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      y: {
        // display: false, // Hide Y axis labels
      },
      x: {
        // display: false, // Hide X axis labels
      },
    },
  };

  return <Line data={data} options={options} />;
};
export default MonthlySalesLineChart;
