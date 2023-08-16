import { Link } from "react-router-dom";
import BookMark from "../../marks/BookMark";
import Cookies from "universal-cookie";
const WorkoutHistoryButton = (props) => {
  const cookies = new Cookies();
  cookies.set("historyPlanName", props.planName, { path: "/" });
  return (
    <button className="my-3">
      <Link to={"/panel/history?planName=" + props.planName}>
        <BookMark description="Show routine summary" />
      </Link>
    </button>
  );
};

export default WorkoutHistoryButton;
