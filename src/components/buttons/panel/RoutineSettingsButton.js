import { Link } from "react-router-dom";
import GearMark from "../../marks/GearMark";

const RoutineSettingsButton = (props) => {
  return (
    <button className="my-3">
      <Link to={"/panel/routine-settings?planName=" + props.planName}>
        <GearMark description="Change routine settings" />
      </Link>
    </button>
  );
};

export default RoutineSettingsButton;
