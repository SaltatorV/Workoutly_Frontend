import ExerciseBox from "../../box/routines/ExerciseBox";

const AddExerciseForm = (props) => {
  return (
    <div className="add-exercise-form">
      {Object.values(props.exercises).map((key, index) => {
        return (
          <ExerciseBox
            addExercise={props.addExercise}
            removeExercise={props.removeExercise}
            exercise={key}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default AddExerciseForm;
