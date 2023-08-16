import { Container } from "react-bootstrap";
import GeneralRadar from "../general/GeneralRadar";

import SummaryHeader from "../../panel/SummaryHeader";

import "./css/HistoryVolumeRadar.css";

const HistoryVolumeRadar = (props) => {
  return (
    <Container fluid className="history-volume-chart">
      <h3 className="py-3">{props.title}</h3>
      <GeneralRadar
        className="history-volume-chart"
        data={props.data}
        radarDataKey="value"
        angleAxisKey="muscleGroup"
        color={props.color}
        title="Training Volume"
      />
    </Container>
  );
};

export default HistoryVolumeRadar;
