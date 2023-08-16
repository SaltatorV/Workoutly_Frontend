import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import ExerciseTypeButton from "./ExerciseTypeButton";
const ExerciseButtons = (props) => {
  const exercises = props.exercises;
  const findExerciseType = (type) => {
    const exercisesWithType = [];
    Object.values(exercises).map((key) => {
      if (key.type === type) {
        exercisesWithType.push(key);
      }
    });

    return exercisesWithType;
  };

  const findArmsExercises = () => {
    return findExerciseType("arms");
  };
  const findBackExercises = () => {
    return findExerciseType("back");
  };
  const findCalvesExercises = () => {
    return findExerciseType("calves");
  };
  const findChestExercises = () => {
    return findExerciseType("chest");
  };
  const findLegsExercises = () => {
    return findExerciseType("legs");
  };
  const findShouldersExercises = () => {
    return findExerciseType("shoulders");
  };

  const sendRequest = () => {
    const armsExercise = findArmsExercises();
    const backExercise = findBackExercises();
    const calvesExercise = findCalvesExercises();
    const chestExercise = findChestExercises();
    const legsExercise = findLegsExercises();
    const shouldersExercise = findShouldersExercises();
  };

  return (
    <>
      <Container>
        <Row>
          <ExerciseTypeButton
            addExercise={props.addExercise}
            removeExercise={props.removeExercise}
            exercises={findArmsExercises()}
          />
          <ExerciseTypeButton
            addExercise={props.addExercise}
            removeExercise={props.removeExercise}
            exercises={findBackExercises()}
          />
          <ExerciseTypeButton
            addExercise={props.addExercise}
            removeExercise={props.removeExercise}
            exercises={findCalvesExercises()}
          />
        </Row>

        <Row>
          <ExerciseTypeButton
            addExercise={props.addExercise}
            removeExercise={props.removeExercise}
            exercises={findChestExercises()}
          />
          <ExerciseTypeButton
            addExercise={props.addExercise}
            removeExercise={props.removeExercise}
            exercises={findLegsExercises()}
          />
          <ExerciseTypeButton
            addExercise={props.addExercise}
            removeExercise={props.removeExercise}
            exercises={findShouldersExercises()}
          />
        </Row>
      </Container>
    </>
  );
};

export default ExerciseButtons;
