import { Col, Container, Row } from "react-bootstrap";
import NewWorkoutButton from "../buttons/panel/NewWorkoutButton";
import RoutineSettingsButton from "../buttons/panel/RoutineSettingsButton";
import WorkoutHistoryButton from "../buttons/panel/WorkoutHistoryButton";
import "./css/WorkoutPlanSummary.css";
const WorkoutPlanSummary = (props) => {
  const workoutPlan = props.workoutPlan;
  return (
    <Container className="plan-summary" md={12}>
      <Row className="plan-summary-header">
        <h2>Plan Name: {workoutPlan.name}</h2>
        <hr />
        <p>Description: {workoutPlan.description}</p>
      </Row>
      <Row className="plan-summary-buttons">
        <Col>
          <NewWorkoutButton planName={workoutPlan.name} />
        </Col>
        <Col>
          <RoutineSettingsButton planName={workoutPlan.name} />
        </Col>
        <Col>
          <WorkoutHistoryButton planName={workoutPlan.name} />
        </Col>
      </Row>
    </Container>
  );
};

export default WorkoutPlanSummary;
