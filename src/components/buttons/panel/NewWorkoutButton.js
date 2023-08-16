import { Link } from "react-router-dom";
import BicepsMark from "../../marks/BicepsMark";

const NewWorkoutButton = (props) => {
  return (
    <button className="my-3">
      <Link to={"/panel/new-workout?planName=" + props.planName}>
        <BicepsMark description="Add new workout data" />
      </Link>
    </button>
  );
};

export default NewWorkoutButton;
