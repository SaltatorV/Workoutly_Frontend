import { Container } from "react-bootstrap";
import GeneralMultiLineChart from "../general/GeneralMultiLineChart";

import SummaryHeader from "../../panel/SummaryHeader";

import "./css/SummaryMeasurementsChart.css";
import { convertCmToIn } from "../../../utils/UnitConverter";
import { getUserProfile } from "../../../services/ProfileLoader";

const colors = ["#8752e3", "green", "#24a0ed", "white", "orange"];
const lineKeys = ["chest", "neck", "waist", "leftThigh", "rightThigh"];

const parseMeasurementUnit = (profile, data) => {
  const measurementUnit = profile.measurementUnit;
  if (measurementUnit === "IN") {
    const formattedData = data.map((key, index) => {
      const measurements = {
        chest: convertCmToIn(key.chest),
        neck: convertCmToIn(key.neck),
        waist: convertCmToIn(key.waist),
        leftThigh: convertCmToIn(key.leftThigh),
        rightThigh: convertCmToIn(key.rightThigh),
      };
      return {
        ...key,
        chest: measurements.chest,
        neck: measurements.neck,
        waist: measurements.waist,
        leftThigh: measurements.leftThigh,
        rightThigh: measurements.rightThigh,
      };
    });
    return formattedData;
  } else {
    return data;
  }
};

const SummaryMeasurementsChart = (props) => {
  return (
    <Container fluid className="summary-measurements-chart">
      <SummaryHeader
        color={colors[0]}
        title={props.title}
        description={props.description}
      />
      <GeneralMultiLineChart
        className="summary-measurements-chart"
        data={parseMeasurementUnit(props.profile, props.data)}
        colors={colors}
        lineKeys={lineKeys}
        xAxisKey="date"
      />
    </Container>
  );
};

export default SummaryMeasurementsChart;
