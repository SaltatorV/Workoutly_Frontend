import { Container } from "react-bootstrap";
import GeneralLineChart from "../general/GeneralLineChart";
import "./css/SummaryLineChart.css";
import SummaryHeader from "../../panel/SummaryHeader";
import { convertKgToLbs } from "../../../utils/UnitConverter";

const parseMeasurementUnit = (profile, data, isLengthChart) => {
  const weightUnit = profile.weightUnit;
  if (weightUnit === "LBS" && !isLengthChart) {
    const formattedData = data.map((key, index) => {
      const lbs = convertKgToLbs(key.weight);
      return {
        ...key,
        weight: lbs,
      };
    });

    return formattedData;
  } else {
    return data;
  }
};

const SummaryLineChart = (props) => {
  return (
    <Container fluid className="summary-line-chart">
      <SummaryHeader
        description={props.description}
        color={props.color}
        title={props.title}
      />
      <GeneralLineChart
        className="summary-line-chart"
        data={parseMeasurementUnit(
          props.profile,
          props.data,
          props.isLengthChart
        )}
        color={props.color}
        xAxisKey="date"
        lineDataKey={props.dataKey}
      />
    </Container>
  );
};

export default SummaryLineChart;
