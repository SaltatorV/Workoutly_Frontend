import { Container } from "react-bootstrap";
import SummaryHeader from "../../panel/SummaryHeader";
import { convertKgToLbs } from "../../../utils/UnitConverter";
import GeneralMultiLineChart from "../general/GeneralMultiLineChart";

const parseMeasurementUnit = (profile, data) => {
  const weightUnit = profile.weightUnit;
  if (weightUnit === "LBS") {
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

const colors = ["#8752e3", "#24a0ed"];
const lineKeys = ["weight", "bodyFat"];

const WeightChart = (props) => {
  return (
    <Container fluid className="summary-line-chart">
      <SummaryHeader
        description={
          "Comparison showing how the weight of user and his body fat has changed. The weight unit is expressed in the selected in the profile."
        }
        color={colors[0]}
        title={"Weight And Body Fat Comparasion"}
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

export default WeightChart;
