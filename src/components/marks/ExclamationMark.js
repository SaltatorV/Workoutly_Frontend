import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { RxExclamationTriangle as ExclamationIcon } from "react-icons/rx";

import "./css/Mark.css";

const ExclamationMark = (textData) => {
  const prepareTextData = preapreData(textData.textData);

  const renderTooltip = (textData) => (
    <Tooltip id="exclamation-mark-tooltip">
      <ul>
        {textData.map((data, index) => (
          <li key={data}>{data}</li>
        ))}
      </ul>
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip(prepareTextData)}
    >
      <div className="exclamation-mark-link">
        <ExclamationIcon className="exclamation-mark" />
      </div>
    </OverlayTrigger>
  );
};

export default ExclamationMark;

const preapreData = (data) => {
  const pureData = data.replaceAll('"', "").replaceAll(",", "");
  const noEmptyArray = pureData.split(".").filter((data) => data !== "");
  return noEmptyArray;
};
