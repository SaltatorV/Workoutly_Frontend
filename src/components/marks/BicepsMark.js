import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { AiFillFileAdd as BicepsIcon } from "react-icons/ai";

import "./css/Mark.css";
import "./css/BicepsMark.css";

const BicepsMark = (props) => {
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
        <BicepsIcon className="biceps-mark" />
      </div>
    </OverlayTrigger>
  );
};

export default BicepsMark;
