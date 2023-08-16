import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import DescriptionSummaryBoxData, {
  DescriptionBottomBox,
  DescriptionTopBox,
} from "../../home/SummaryBoxData";
import SummaryBox from "../general/SummaryBox";
import Img from "../../structure/Img";

import DashboardImg from "../../../assets/summary-dashboard-img.png";
import MeasurementsImg from "../../../assets/measurements.png";

import "./css/DescriptionBox.css";

const DescriptionBox = () => {
  const topDescriptionBox = DescriptionTopBox();
  const bottomDescriptionBox = DescriptionBottomBox();

  return (
    <Container fluid className=" description-box">
      <Row>
        <Col md={6}>
          <SummaryBox messages={topDescriptionBox} />
        </Col>

        <Col md={5}>
          <Img className="img-component" url={MeasurementsImg} alt="Weight-Chart" />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Img className="img-component" url={DashboardImg} alt="Dashboard" />
        </Col>

        <Col md={5}>
          <SummaryBox messages={bottomDescriptionBox} />
        </Col>
      </Row>
    </Container>
  );
};

export default DescriptionBox;
