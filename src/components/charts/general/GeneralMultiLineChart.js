import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import GeneralMultiTooltip from "./components/GeneralMultiTooltip";
import GeneralXAxis from "./components/GeneralXAxis";

const GeneralMultiLineChart = (props) => {
  const colors = props.colors;
  const lineKeys = props.lineKeys;
  const data = props.data;
  return (
    <ResponsiveContainer width="90%" height="80%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          tick={<GeneralXAxis color={colors[0]} />}
          dataKey={props.xAxisKey}
          height={50}
        />
        <YAxis
          dx={-15}
          tickCount={10}
          tick={{ stroke: colors[0] }}
          domain={[0, "dataMax"]}
        />
        <Tooltip
          content={<GeneralMultiTooltip />}
          xAxisKey={props.xAxisKey}
          colors={colors}
          lineKeys={lineKeys}
        />
        <Legend />
        {lineKeys.map((key, index) => (
          <Line
            type="monotone"
            dataKey={key}
            stroke={colors[index]}
            strokeWidth={3}
            dot={{ stroke: colors[index], strokeWidth: 4 }}
            activeDot={{ r: 8 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GeneralMultiLineChart;
