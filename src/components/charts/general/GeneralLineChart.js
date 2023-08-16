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
import GeneralChartTooltip from "./components/GeneralChartTooltip";
import GeneralXAxis from "./components/GeneralXAxis";

const GeneralLineChart = (props) => {
  const data = props.data;
  return (
    <ResponsiveContainer width="90%" height="80%">

      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          tick={<GeneralXAxis color={props.color} />}
          dataKey={props.xAxisKey}
          height={50}
        />
        <YAxis
          dx={-15}
          tickCount={10}
          tick={{ stroke: props.color }}
          domain={["dataMin", "dataMax"]}
        />
        <Tooltip
          content={<GeneralChartTooltip />}
          color={props.color}
          xAxisKey={props.xAxisKey}
          yAxisKey={props.lineDataKey}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey={props.lineDataKey}
          stroke={props.color}
          strokeWidth={3}
          dot={{ stroke: props.color, strokeWidth: 3 }}
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GeneralLineChart;
