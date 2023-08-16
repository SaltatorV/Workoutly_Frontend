import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

import GeneralFooter from "../components/footers/GeneralFooter";
import ParagraphBox from "../components/box/general/ParagraphBox";

import "./css/RoutineSettings.css";
import { useState } from "react";
const RoutineSettings = () => {
  const [searchParams] = useSearchParams();
  const planName = { planName: searchParams.get("planName") };
  const [isDeleted, setIsDeleted] = useState(false);

  const handleClick = () => {
    deleteWorkoutPlan(planName.planName);
    setIsDeleted(true);
  };

  return (
    <>
      <Container fluid className="workout-plan-deleted-container">
        <Row>
          <Col>
            <h3 className="workout-plan-delted-header">
              Workout Plan Name: {planName.planName}
            </h3>
            <hr />
            <div
              className={
                isDeleted
                  ? "workout-plan-deleted-visable"
                  : "workout-plan-deleted-hidden"
              }
            >
              <ParagraphBox textData="Workout Plan For Provided User Successfuly Deleted" />
            </div>

            <button onClick={handleClick} className="delete-workout-plan">
              Delete Workout Plan
            </button>
          </Col>
        </Row>
      </Container>
      <GeneralFooter />
    </>
  );
};

export default RoutineSettings;

async function deleteWorkoutPlan(planName) {
  const response = await fetch(
    "http://localhost:8080/auth/delete-workout-plan",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(planName),
    }
  );
  const responseData = await response.json();
}
