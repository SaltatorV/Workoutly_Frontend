import "./css/RoutineExercise.css";

const RoutineExercise = (props) => {
  const lp = props.index;
  const name = props.name;
  const type = props.type;

  return (
    <div className="routine-exercise">
      <div className="routine-exercise-number">
        <p>{lp}</p>
      </div>

      <div className="routine-exercise-content">
        <span>
          <p className="routine-exercise-header">Name:</p>
          <p className="routine-exercise-name">{name}</p>
        </span>

        <span>
          <p className="routine-exercise-header">Muscle group: </p>
          <p className="routine-exercise-type">{type}</p>
        </span>
      </div>
    </div>
  );
};

export default RoutineExercise;
