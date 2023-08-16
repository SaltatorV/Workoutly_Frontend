import React from "react";
import "./css/GeneralChartTooltip.css";

const prepareLabelText = (text) => {
  const result = text.replace(/([A-Z])/g, " $1");
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);

  return finalResult;
};

const GeneralChartTooltip = ({
  color,
  xAxisKey,
  yAxisKey,
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="general-chart-tooltip" style={{ color: color }}>
        <p className="mx-2 tooltip-description">{`${prepareLabelText(
          xAxisKey
        )} / ${prepareLabelText(yAxisKey)}`}</p>
        <hr />
        {`${label} / ${payload[0].value}`}
      </div>
    );
  }

  return null;
};

export default GeneralChartTooltip;
