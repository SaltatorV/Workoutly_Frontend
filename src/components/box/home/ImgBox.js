import { Container, Row, Col } from "react-bootstrap";
import SummaryBox from "../general/SummaryBox";
import "./css/ImgBox.css";
import { ImgLeftBox, ImgRightBox, ImgTopBox } from "../../home/SummaryBoxData";

const ImgBox = () => {
  const topBoxData = ImgTopBox();
  const leftBoxData = ImgLeftBox();
  const rightBoxData = ImgRightBox();

  return (
    <Container fluid className="img-box">
      <Row className="py-4">
        <Col md={12} className="my-4">
          <SummaryBox messages={topBoxData} />
        </Col>
      </Row>

      <Row md={12}>
        <Col md={6} className="my-5">
          <SummaryBox messages={leftBoxData} />
        </Col>
        <Col md={6} className="my-5">
          <SummaryBox messages={rightBoxData} />
        </Col>
      </Row>
    </Container>
  );
};

export default ImgBox;
