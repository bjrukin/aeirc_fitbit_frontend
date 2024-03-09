import React, { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export function Overview({ data }: { data: any }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseOver = (data: any, index: any) => {
    setActiveIndex(index);
  };

  const handleMouseOut = () => {
    setActiveIndex(null);
  };

  const renderCustomBarLabel = ({
    x,
    y,
    width,
    height,
    value,
    index,
  }: {
    x: number;
    y: number;
    width: number;
    height: number;
    value: number;
    index: number;
  }) => {
    const isActive = index === activeIndex;
    // if (!isActive) {
    //   return null;
    // }
    if (!isActive) {
      return <svg></svg>;
    }

    return (
      <g>
        <rect x={x} y={y - 20} width={width} height={20} fill="none" />
        <text
          x={x + width / 2}
          y={y}
          fill={isActive ? "#3E6DF9" : "#666"}
          textAnchor="middle"
          dy={-6}
          fontSize={16}
          fontWeight={700}
        >
          {value}
        </text>
      </g>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={16}
          tickLine={false}
          axisLine={true}
          padding={{ left: 10, right: 10 }}
        />
        <YAxis
          stroke="#888888"
          fontSize={16}
          tickLine={false}
          axisLine={true}
          padding={{ bottom: 10, top: 0 }}
          tickFormatter={(value) => `${value}`}
        />

        <Bar
          dataKey="total"
          fill="#D9D9D9"
          radius={[8, 8, 8, 8]}
          label={(props) =>
            renderCustomBarLabel({ ...props, index: props.index })
          }
        >
          {data.map((entry: any, index: any) => (
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
