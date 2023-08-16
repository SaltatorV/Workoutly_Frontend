import { Col, Container, Row } from "react-bootstrap";
import RoutineExercise from "./RoutineExercise";

import "./css/SummaryCarouselItem.css";
import NewWorkoutButton from "../buttons/panel/NewWorkoutButton";
import RoutineSettingsButton from "../buttons/panel/RoutineSettingsButton";
import WorkoutHistoryButton from "../buttons/panel/WorkoutHistoryButton";

const SummaryCarouselItem = (props) => {
  const routinePlan = Object.values(props.routinePlan);

  return (
    <Container md={12} className="general-carousel-item-content">
      <Row className="my-3 carousel-item-header">
        <h2>Routine Exercises</h2>
        <NewWorkoutButton planName={props.planName} />
        <WorkoutHistoryButton planName={props.planName} />
        <RoutineSettingsButton planName={props.planName} />
      </Row>

      <Row md={12} className="px-5 justify-content-md-center">
        <Col md={2} className="mx-4 my-4">
          {routinePlan[0] !== undefined && (
            <RoutineExercise
              index={1}
              name={routinePlan[0].name}
              type={routinePlan[0].type}
            />
          )}
          {routinePlan[1] !== undefined && (
            <RoutineExercise
              index={2}
              name={routinePlan[1].name}
              type={routinePlan[1].type}
            />
          )}
          {routinePlan[2] !== undefined && (
            <RoutineExercise
              index={3}
              name={routinePlan[2].name}
              type={routinePlan[2].type}
            />
          )}
        </Col>
        <Col md={2} className="mx-4 my-4">
          {routinePlan[3] !== undefined && (
            <RoutineExercise
              index={4}
              name={routinePlan[3].name}
              type={routinePlan[3].type}
            />
          )}
          {routinePlan[4] !== undefined && (
            <RoutineExercise
              index={5}
              name={routinePlan[4].name}
              type={routinePlan[4].type}
            />
          )}
          {routinePlan[5] !== undefined && (
            <RoutineExercise
              index={6}
              name={routinePlan[5].name}
              type={routinePlan[5].type}
            />
          )}
        </Col>
        <Col md={2} className="mx-4 my-4">
          {routinePlan[6] !== undefined && (
            <RoutineExercise
              index={7}
              name={routinePlan[6].name}
              type={routinePlan[6].type}
            />
          )}
          {routinePlan[7] !== undefined && (
            <RoutineExercise
              index={8}
              name={routinePlan[7].name}
              type={routinePlan[7].type}
            />
          )}
          {routinePlan[8] !== undefined && (
            <RoutineExercise
              index={9}
              name={routinePlan[8].name}
              type={routinePlan[8].type}
            />
          )}
        </Col>
        <Col md={2} className="mx-4 my-4">
          {routinePlan[9] !== undefined && (
            <RoutineExercise
              index={10}
              name={routinePlan[9].name}
              type={routinePlan[9].type}
            />
          )}
          {routinePlan[10] !== undefined && (
            <RoutineExercise
              index={11}
              name={routinePlan[10].name}
              type={routinePlan[10].type}
            />
          )}
          {routinePlan[11] !== undefined && (
            <RoutineExercise
              index={12}
              name={routinePlan[11].name}
              type={routinePlan[11].type}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SummaryCarouselItem;
