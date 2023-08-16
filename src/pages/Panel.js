import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./css/Panel.css";
import GeneralFooter from "../components/footers/GeneralFooter";
import SummaryCarousel from "../components/panel/SummaryCarousel";
import SummaryDashboard from "../components/panel/SummaryDashboard";
import { loadUserProfile } from "../services/ProfileLoader";

const PanelPage = () => {
  loadUserProfile();
  return (
    <Container fluid className="summary-page mx-0 px-0">
      <Row className="mx-0 px-0 summary-container">
        <SummaryCarousel />
      </Row>

      <Row className="mx-0 px-0 summary-dashboard">
        <SummaryDashboard className="mx-0 px-0" />
      </Row>

      <Row className="mx-0 px-0">
        <Col className="mx-0 px-0">
          <GeneralFooter />
        </Col>
      </Row>
    </Container>
  );
};

export default PanelPage;
