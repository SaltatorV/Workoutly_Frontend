import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

import GeneralFooter from "../components/footers/GeneralFooter";
import ParagraphBox from "../components/box/general/ParagraphBox";

import "./css/AccountActivation.css";

const AccountActivationPage = () => {
  const [searchParams] = useSearchParams();
  const token = { token: searchParams.get("token") };
  activateAccountWithProvidedToken(token);

  return (
    <>
      <Container fluid className="activation-container">
        <Row>
          <Col>
            <ParagraphBox textData="User with bounded token activated" />
          </Col>
        </Row>
      </Container>
      <GeneralFooter />
    </>
  );
};

export default AccountActivationPage;

async function activateAccountWithProvidedToken(token) {
  const response = await fetch("http://localhost:8080/auth/activate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(token),
  });

  const responseData = await response.json();
}
