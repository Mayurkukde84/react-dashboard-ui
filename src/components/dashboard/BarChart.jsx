import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["Sat", 1000, 400, 200],
  ["Sun", 1170, 460, 250],
  ["Mon", 660, 1120, 300],
  ["Tue", 1030, 540, 350],
  ["Wed", 1170, 460, 250],
  ["Thu", 660, 1120, 300],
  ["Fri", 1030, 540, 350],
];



export function BarChart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="40%"
      data={data}
     
      padding="10px"
    />
  );
}
