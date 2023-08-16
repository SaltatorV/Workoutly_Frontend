import useModal from "../../hook/useModal";
import "./css/ExerciseTypeButton.css";
import ExerciseModal from "../../modals/routines/ExerciseModal";
const ExerciseTypeButton = (props) => {
  const exercises = Object.values(props.exercises);
  const { isShowing, toggle } = useModal();
  const sendRequest = () => {};
  const title = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <>
      <button className="exercise-type-btn" onClick={toggle}>
        {title(exercises[0].type)} Exercises
      </button>
      <ExerciseModal
        addExercise={props.addExercise}
        removeExercise={props.removeExercise}
        isShowing={isShowing}
        hide={toggle}
        exercises={props.exercises}
      />
    </>
  );
};

export default ExerciseTypeButton;
