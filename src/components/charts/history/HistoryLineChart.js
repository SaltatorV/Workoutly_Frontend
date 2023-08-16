import { Container } from "react-bootstrap";
import GeneralLineChart from "../general/GeneralLineChart";
import "./css/HistoryLineChart.css";
import SummaryHeader from "../../panel/SummaryHeader";
import { getUserProfile } from "../../../services/ProfileLoader";
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

const HistoryLineChart = (props) => {
  return (
    <Container fluid className="my-3 history-line-chart-container">
      <h3 className="py-3">{props.title}</h3>
      {console.log(props.data)}
      <GeneralLineChart
        className="history-line-chart"
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

export default HistoryLineChart;
