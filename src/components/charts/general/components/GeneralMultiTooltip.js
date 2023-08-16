import React from "react";
import "./css/GeneralChartTooltip.css";

const prepareLabelText = (text) => {
  const result = text.replace(/([A-Z])/g, " $1");
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);

  return finalResult;
};

const GeneralMultiTooltip = ({
  colors,
  xAxisKey,
  lineKeys,
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="general-chart-tooltip py-1" style={{ color: colors[0] }}>
        <p className="mx-2 tooltip-description">
          {prepareLabelText(xAxisKey)} - {label}
        </p>
        <hr />
        {lineKeys.map((key, index) => (
          <p style={{ color: colors[index] }}>
            {prepareLabelText(key)} - {payload[index].value}
          </p>
        ))}
      </div>
    );
  }

  return null;
};

export default GeneralMultiTooltip;
