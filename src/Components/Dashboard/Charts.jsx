import React from "react";
import ReactECharts from "echarts-for-react";

const Charts = () => {
  const options = {
    xAxis: {
      type: "category",
      data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [0.5, 2.5, 5.5, 7.2, 5.8, 7.8, 7.5, 8],
        type: "line",

        // smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return (
    <div className="w-full">
      <ReactECharts style={{ color: "red" }} option={options} />;
    </div>
  );
};

export default Charts;
