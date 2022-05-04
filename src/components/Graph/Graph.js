import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

import "./Graph.scss";

const data = [
  {
    name: "Jan",
    uv: 4500000,
  },
  {
    name: "Feb",
    uv: 8000000,
  },
  {
    name: "Mar",
    uv: 4500000,
  },
  {
    name: "Apr",
    uv: 4500000,
  },
  {
    name: "May",
    uv: 1000000,
  },
  {
    name: "Jun",
    uv: 50000000,
  },
  {
    name: "Jul",
    uv: 3000000,
  },
  {
    name: "Aug",
    uv: 100000000,
  },
  {
    name: "Sep",
    uv: 400000000,
  },
  {
    name: "Oct",
    uv: 0,
  },
  {
    name: "Nov",
    uv: 0,
  },
  {
    name: "Dec",
    uv: 0,
  },
];

export default function App() {
  const format = (value) => {
    if (value <= 999999) {
      return value / 1000 + "K";
    } else if (value <= 999999999) {
      return value / 1000000 + "M";
    } else {
      return value / 1000000000 + "B";
    }
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        width={500}
        height={800}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 50,
        }}
      >
        <XAxis dy={30} dataKey="name" />
        <YAxis
          type="number"
          // domain={[500000, 1000000000]}
          dx={-30}
          interval={0}
          tickCount={10}
          tickFormatter={format}
          ticks={[
            500000, 1000000, 2000000, 5000000, 10000000, 50000000, 100000000,
            200000000, 500000000, 1000000000,
          ]}
        />
        <Bar dataKey="uv" fill="#000" radius={[50, 50, 50, 50]} barSize={10} />
      </BarChart>
    </ResponsiveContainer>
  );
}
