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
        neck: convertCmToIn(key.neck),
        chest: convertCmToIn(key.chest),
        waist: convertCmToIn(key.waist),
      };
      return {
        ...key,
        neck: measurements.neck,
        chest: measurements.chest,
        waist: measurements.waist,
      };
    });
    return formattedData;
  } else {
    return data;
  }
};

const colors = ["#fff", "#24a0ed", "#8d7796"];
const lineKeys = ["neck", "chest", "waist"];

const BodyChart = (props) => {
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

export default BodyChart;
