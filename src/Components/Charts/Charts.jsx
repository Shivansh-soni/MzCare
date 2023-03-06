import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Charts = () => {
  const data = {
    labels: ["Jan", "", "Feb", "", "March", "", "April", "", "May"],
    datasets: [{ data: [0.5, 2.2, 4.2, 7.2, 5.2, 7.7, 7.5, 8] }],
  };

  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 2,
        max: 10,
        ticks: {
          stepSize: 2,
          callback: (value) => value,
        },
        grid: {
          borderDash: [0],
        },
      },
    },
  };

  return (
    <div className="w-6/12 h-40 ">
      <Line data={data} options={options} className="w-5/12" />
    </div>
  );
};

export default Charts;
