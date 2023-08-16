import { Container } from "react-bootstrap";
import GeneralLineChart from "../general/GeneralLineChart";
import "./css/ExerciseLineChart.css";
import SummaryHeader from "../../panel/SummaryHeader";
import { getUserProfile } from "../../../services/ProfileLoader";
import { convertKgToLbs } from "../../../utils/UnitConverter";

const parseMeasurementUnit = (profile, data, isLengthChart) => {
 
  const convertedData = Object.values(data).map((key, index) => {
    const dateFromTimestamp = new Date(key.date);
    return {
      ...key,
      date: dateFromTimestamp.toLocaleDateString(),
    };
  });

  const weightUnit = profile.weightUnit;
  if (weightUnit === "LBS" && !isLengthChart) {
    const formattedData = convertedData.map((key, index) => {
      const lbs = Math.round(convertKgToLbs(key.weight));
      return {
        ...key,
        weight: lbs,
      };
    });

    return formattedData;
  } else {

    
    const roundedData = convertedData.map(key=> {
      return {
        ...key,
        weight: Math.round(key.weight),
      }
    })

    return roundedData;
  }
};

const ExerciseLineChart = (props) => {
  return (
    <Container fluid className="my-3 exercise-line-chart-container">
      <h3 className="py-3">{props.title + " " +props.name}</h3>

      <GeneralLineChart
        className="exercise-line-chart"
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

export default ExerciseLineChart;
