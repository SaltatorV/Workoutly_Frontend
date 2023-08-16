import { Link } from "react-router-dom";

const AddNewWorkoutPlanButton = () => {
  return (
    <>
      <Link to="/panel/new-workout-plan">
        <button className="add-new-workout-plan-btn">
          Add New Workout Plan
        </button>
      </Link>
    </>
  );
};

export default AddNewWorkoutPlanButton;
