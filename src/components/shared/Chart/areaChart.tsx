import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface SimpleAreaChartProps {
  height?: string;
  className?: string;
  variant?: string;
}
const data = [
  {
    name: "Page A",
    total: 1000,
  },
  {
    name: "Page B",
    total: 1200,
  },
  {
    name: "Page C",
    total: 800,
  },
  {
    name: "Page D",
    total: 1500,
  },
  {
    name: "Page E",
    total: 1000,
  },
];

const SimpleAreaChart: React.FC<SimpleAreaChartProps> = ({
  className,
  height,
  variant,
}) => {
  console.log("The  variant ", variant);
  return (
    <div
      className={className}
      style={{ width: "50%", height: height || "100px" }}
    >
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <Tooltip />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#01C98E" />
              <stop offset="106.67%" stopColor="rgba(255, 255, 255, 0.00)" />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="total"
            // stroke="none"
            stroke={variant === "primary" ? "none" : "#01C98E"}
            // fill={variant === "primary" ? "url(#colorUv)" : "#01C98E"}
            fill={variant === "primary" ? "url(#colorUv)" : "none"}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleAreaChart;
