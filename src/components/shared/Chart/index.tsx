import { useState } from "react";
import {
  Bar,
  BarChart,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Sun", total: 6000 },
  { name: "Mon", total: 2000 },
  { name: "Tue", total: 8000 },
  { name: "Wed", total: 5000 },
  { name: "Thu", total: 4000 },
  { name: "Fri", total: 6000 },
  { name: "Sat", total: 7000 },
];

export function Overview() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseOver = (data: any, index: any) => {
    setActiveIndex(index);
  };

  const handleMouseOut = () => {
    setActiveIndex(null);
  };

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} barSize={55}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={16}
          tickLine={false}
          axisLine={true}
          padding={{ left: 10, right: 0 }}
        />
        <YAxis
          stroke="#888888"
          fontSize={16}
          tickLine={false}
          axisLine={true}
          padding={{ bottom: 10, top: 0 }}
          tickFormatter={(value) => `${value / 1000}k`}
        />
        <Bar
          dataKey="total"
          fill="#D9D9D9"
          radius={[8, 8, 8, 8]}
        >
          {data.map((entry, index) => (
            <Cell
              cursor="pointer"
              fill={index === activeIndex ? "#3E6DF9" : "#D9D9D9"}
              key={`cell-${index}`}
              onMouseOver={() => handleMouseOver(entry, index)}
              onMouseOut={handleMouseOut}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>

  );
}