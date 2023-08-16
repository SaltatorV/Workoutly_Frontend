import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { IoBook as BookIcon } from "react-icons/io5";

import "./css/Mark.css";
import "./css/BookMark.css";

const BookMark = (props) => {
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
        <BookIcon className="book-mark" />
      </div>
    </OverlayTrigger>
  );
};

export default BookMark;
