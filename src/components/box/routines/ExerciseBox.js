import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { useState } from "react";
import "./css/ExerciseBox.css";
const ExerciseBox = (props) => {
  const [isAdded, setIsAdded] = useState(false);
  const handleAdd = () => {
    props.addExercise(props.exercise.name);
    setIsAdded(true);
  };

  const handleRemove = () => {
    props.removeExercise(props.exercise.name);
    setIsAdded(false);
  };

  const exercise = props.exercise;
  return (
    <div
      className={
        isAdded
          ? "is-added exercise-box my-4"
          : "is-added-hidden exercise-box my-4"
      }
    >
      <div className="exercise-box-index">{props.index + 1}.</div>
      <div className="exercise-box-content">
        <div className="exercise-box-info">
          <p className="exercise-box-text exercise-box-name">{exercise.name}</p>
          <p className="exercise-box-text">{exercise.type}</p>
        </div>
        <div>
          <button onClick={handleAdd}>
            <AiOutlinePlusSquare className="exercise-icon-add" />
          </button>
          <button onClick={handleRemove}>
            <AiOutlineMinusSquare className="exercise-icon-remove" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseBox;
