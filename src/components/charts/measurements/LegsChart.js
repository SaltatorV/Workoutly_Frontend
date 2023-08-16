import { Container } from "react-bootstrap";
import SummaryHeader from "../../panel/SummaryHeader";
import { convertCmToIn } from "../../../utils/UnitConverter";
import GeneralMultiLineChart from "../general/GeneralMultiLineChart";

const parseMeasurementUnit = (profile, data) => {
  const measurementUnit = profile.measurementUnit;
  if (measurementUnit === "IN") {
    const formattedData = data.map((key, index) => {
      const measurements = {
        leftCalf: convertCmToIn(key.leftCalf),
        rightCalf: convertCmToIn(key.rightCalf),
        leftThigh: convertCmToIn(key.leftThigh),
        rightThigh: convertCmToIn(key.rightThigh),
      };
      return {
        ...key,
        leftCalf: measurements.leftCalf,
        rightCalf: measurements.rightCalf,
        leftThigh: measurements.leftThigh,
        rightThigh: measurements.rightThigh,
      };
    });
    return formattedData;
  } else {
    return data;
  }
};

const colors = ["#24a0ed", "#70adc4", "#37b047", "#81f23a"];
const lineKeys = ["leftCalf", "rightCalf", "leftThigh", "rightThigh"];

const LegsChart = (props) => {
  return (
    <Container fluid className="summary-line-chart">
      <SummaryHeader
        description={
          "Comparison showing the changing circumference of individual muscle parts of the legs. The unit of measurement is the one selected in the profile."
        }
        color={colors[0]}
        title={"Legs Muscle Group Circuit Comparasion"}
      />
      <GeneralMultiLineChart
        className="summary-measurements-chart my-3"
        data={parseMeasurementUnit(props.profile, props.data)}
        colors={colors}
        lineKeys={lineKeys}
        xAxisKey="date"
      />
    </Container>
  );
};

export default LegsChart;
