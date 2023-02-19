import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Sat", uv: 200, pv: 180, rv: 190 },
  { name: "Sun", uv: 200, pv: 90, rv: 190 },
  { name: "Mon", uv: 170, pv: 150, rv: 230 },
  { name: "Tue", uv: 250, pv: 100, rv: 150 },
  { name: "Wed", uv: 50, pv: 150, rv: 190 },
  { name: "Thu", uv: 120, pv: 250, rv: 120 },
  { name: "Fri", uv: 130, pv: 180, rv: 110 },
];

export default function BrushBarChart() {
  return (
<ResponsiveContainer aspect={3}>
    <BarChart
    
      data={data}
      margin={{
        top: 15,
        
        bottom: 2,
      }}
    >
      <CartesianGrid strokeDasharray="3 3 3" />
      <XAxis dataKey="name" />
      <YAxis />

      <Bar dataKey="pv" fill="#000" />
      <Bar dataKey="uv" fill="#BFAFA6" />
      <Bar dataKey="rv" fill="#9D877B" />
    </BarChart>
    </ResponsiveContainer>
  );
}
