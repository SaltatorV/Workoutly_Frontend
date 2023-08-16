import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { BsFillGearFill as GearIcon } from "react-icons/bs";

import "./css/Mark.css";
import "./css/GearMark.css";

const GearMark = (props) => {
  const renderTooltip = (description) => (
    <Tooltip>
      <p>{description}</p>
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip(props.description)}
    >
      <div>
        <GearIcon className="gear-mark" />
      </div>
    </OverlayTrigger>
  );
};

export default GearMark;
