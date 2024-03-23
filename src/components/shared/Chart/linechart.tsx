import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

export const SimpleLineChart = ({
  variant,
  dataValue,
}: {
  variant: string;
  dataValue: any;
}) => {
  const data =
    dataValue?.length > 0 &&
    dataValue?.map((el: any) => {
      const hours = new Date(el?.data_received_timestamp)
        .getHours()
        .toString()
        .padStart(2, "0");
      const minutes = new Date(el?.data_received_timestamp)
        .getMinutes()
        .toString()
        .padStart(2, "0");
      const time = `${hours}:${minutes}`;
      return {
        name: time,
        total: el.param_value,
      };
    });

  const maxValue =
    data?.length > 0 && Math.max(...data.map((item: any) => item.total));

  const stepSize: any = maxValue / 5;

  const ticks = Array.from({ length: 6 }, (_, i) => i * Math.ceil(stepSize));
  return (
    <div style={{ width: "100%", height: "300px" }}>
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
          {variant === "secondary" && <CartesianGrid stroke="#ccc" />}
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={16}
            tickLine={false}
            axisLine={true}
            padding={{ left: 0, right: 0 }}
            tick={{ fill: "black" }}
          />
          <YAxis
            stroke="#888888"
            fontSize={16}
            tickLine={false}
            axisLine={true}
            padding={{ bottom: 0, top: 0 }}
            tickFormatter={(value) => `${value}`}
            tick={{ fill: "black" }}
            ticks={ticks}
          />
          <Tooltip
            content={({ payload }) => {
              if (payload && payload.length > 0) {
                return (
                  <div
                    style={{
                      backgroundColor: "white",
                      padding: "10px",
                      border: "1px solid #ccc",
                    }}
                  >
                    <p>
                      <strong className="text-lg">
                        {payload[0].payload.name}
                      </strong>
                    </p>
                    <p>
                      <strong className="text-primary-500">
                        Total: {payload[0].value}
                      </strong>
                    </p>
                  </div>
                );
              }

              return null;
            }}
          />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="60%"
                stopColor="rgba(62, 109, 249, 1)"
                stopOpacity={1.1}
              />
              <stop
                offset="100%"
                stopColor="rgba(255, 255, 255, 1)"
                stopOpacity={1}
              />
            </linearGradient>
          </defs>
          <Area
            type="linear"
            dataKey="total"
            // dot={variant === "primary" ? false : true}
            stroke={variant === "primary" ? "#3E6DF9" : "#471BFB"}
            strokeWidth={variant === "primary" ? "1" : "1.8"}
            fill={variant === "primary" ? "url(#colorUv)" : "none"}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
