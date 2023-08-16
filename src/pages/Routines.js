import { loadSummaryWorkoutPlans } from "../services/CarouselLoader";
import { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import WorkoutPlanSummary from "../components/routines/WorkoutPlanSummary";
import "./css/Routines.css";
import AddNewWorkoutPlanButton from "../components/buttons/routines/AddNewWorkoutPlanButton";
const RoutinesPage = () => {
  const { workoutPlans } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={workoutPlans}>
        {(workoutPlans) => (
          <Container md={12} fluid className="mx-0 my-0 routines-container">
            <Row>
              <h2>Your workout routines</h2>
              <hr />
            </Row>
            <Row md={12}>
              {workoutPlans.length > 0 &&
                workoutPlans.map((key) => {
                  return (
                    <Col md={4}>
                      <WorkoutPlanSummary workoutPlan={key} />
                    </Col>
                  );
                })}
            </Row>
            {workoutPlans.length < 3 && (
              <Row>
                <span>
                  <AddNewWorkoutPlanButton />
                </span>
              </Row>
            )}
          </Container>
        )}
      </Await>
    </Suspense>
  );
};

export default RoutinesPage;

export function routinesLoader() {
  return defer({
    workoutPlans: loadSummaryWorkoutPlans(),
  });
}
