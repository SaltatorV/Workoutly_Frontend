import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { AiOutlineQuestionCircle as QuestionIcon } from "react-icons/ai";

import "./css/Mark.css";

const QuestionMark = (props) => {
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
        <QuestionIcon
          style={{ color: props.color }}
          className="question-mark my-3"
        />
      </div>
    </OverlayTrigger>
  );
};

export default QuestionMark;
