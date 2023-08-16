import { Container } from "react-bootstrap";
import GeneralLineChart from "../general/GeneralLineChart";
import SummaryHeader from "../../panel/SummaryHeader";
import { getUserProfile } from "../../../services/ProfileLoader";
import { convertCmToIn } from "../../../utils/UnitConverter";
import GeneralMultiLineChart from "../general/GeneralMultiLineChart";

const parseMeasurementUnit = (profile, data) => {
  const measurementUnit = profile.measurementUnit;
  if (measurementUnit === "IN") {
    const formattedData = data.map((key, index) => {
      const measurements = {
        leftBiceps: convertCmToIn(key.leftBiceps),
        rightBiceps: convertCmToIn(key.rightBiceps),
        leftForearm: convertCmToIn(key.leftForearm),
        rightForearm: convertCmToIn(key.rightForearm),
      };
      return {
        ...key,
        leftBiceps: measurements.leftBiceps,
        rightBiceps: measurements.rightBiceps,
        leftForearm: measurements.leftForearm,
        rightForearm: measurements.rightForearm,
      };
    });
    return formattedData;
  } else {
    return data;
  }
};

const colors = ["#f2623a", "#f2a23a", "#9849de", "#5145f7"];
const lineKeys = ["leftBiceps", "rightBiceps", "leftForearm", "rightForearm"];

const ArmsChart = (props) => {
  return (
    <Container fluid className="summary-line-chart">
      <SummaryHeader
        description={
          "Comparison showing the changing circumference of individual muscle parts of the arms. The unit of measurement is the one selected in the profile."
        }
        color={colors[0]}
        title={"Arms Muscle Group Circuit Comparasion"}
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

export default ArmsChart;
