import { Container } from "react-bootstrap";
import GeneralRadar from "../general/GeneralRadar";

import SummaryHeader from "../../panel/SummaryHeader";

import "./css/SummaryVolumeRadar.css";

const SummaryVolumeRadar = (props) => {
  return (
    <Container fluid className="summary-volume-chart">
      <SummaryHeader
        color={props.color}
        title={props.title}
        description={props.description}
      />
      <GeneralRadar
        className="summary-volume-chart"
        data={props.data}
        radarDataKey="value"
        angleAxisKey="muscleGroup"
        color={props.color}
        title="Training Volume"
      />
    </Container>
  );
};

export default SummaryVolumeRadar;
