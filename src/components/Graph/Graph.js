import React from "react";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

import "./Graph.scss";

const data = [
  {
    name: "Jan",
    uv: 500,
  },
  {
    name: "Feb",
    uv: 800,
  },
  {
    name: "Mar",
    uv: 6050,
  },
  {
    name: "Apr",
    uv: 600,
  },
  {
    name: "May",
    uv: 1000,
  },
  {
    name: "Jun",
    uv: 2500,
  },
  {
    name: "Jul",
    uv: 500,
  },
  {
    name: "Aug",
    uv: 1000,
  },
  {
    name: "Sep",
    uv: 5000,
  },
  {
    name: "Oct",
    uv: 5000,
  },
  {
    name: "Nov",
    uv: 5000,
  },
  {
    name: "Dec",
    uv: 5000,
  },
];

export default function App() {
  return (
    <BarChart
      width={550}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 50,
      }}
    >
      <XAxis dy={30} dataKey="name" />
      <YAxis dx={-30} />
      <Bar dataKey="uv" fill="#000" radius={[50, 50, 50, 50]} barSize={10} />
    </BarChart>
  );
}
