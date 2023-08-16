import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ImgBox from "../components/box/home/ImgBox";
import DescriptionBox from "../components/box/home/DescriptionBox";
import GeneralFooter from "../components/footers/GeneralFooter";

import "./css/Home.css";

function HomePage() {
  return (
    <Container fluid className="mx-0 px-0 home-page-container">
      <Row>
        <Col className="px-0 mx-0">
          <ImgBox />
        </Col>
      </Row>

      <Row>
        <Col className="px-0 mx-0">
          <DescriptionBox />
        </Col>
      </Row>
      <Row>
        <Col className="px-0 mx-0">
          <GeneralFooter />
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
