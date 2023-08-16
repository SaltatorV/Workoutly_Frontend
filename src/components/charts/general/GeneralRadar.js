import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const GeneralRadar = (props) => {
  const data = props.data;
  return (
    <ResponsiveContainer width="90%" height="80%">
      <RadarChart cx="50%" cy="50%" outerRadius="90%" data={data}>
        <PolarGrid />
        <PolarAngleAxis stroke="#fff" dataKey={props.angleAxisKey} />
        <PolarRadiusAxis stroke="#fff" angle={60} domain={[0, "dataMax"]} />
        <Radar
          name={props.title}
          dataKey={props.radarDataKey}
          stroke={props.color}
          fill={props.color}
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default GeneralRadar;
