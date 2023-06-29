import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
  const maxExp = dataPoints
    .map((dataPoint) => dataPoint.value)
    .reduce((a, b) => Math.max(a, b));
  console.log(maxExp);
  console.log(dataPoints);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          maxValue={maxExp}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
