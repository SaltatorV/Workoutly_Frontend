import { convertCmToIn, convertKgToLbs } from "../../../utils/UnitConverter";
import "./css/MeasurementBox.css";

function prepareContent(profile, content, index) {
  if (index === 0) {
    if (profile.weightUnit === "LBS") {
      return convertKgToLbs(content) + " LBS";
    } else {
      return content + " KG";
    }
  } else if (index === 1) {
    return content + " %";
  } else {
    if (profile.measurementUnit === "IN") {
      return convertCmToIn(content) + " IN";
    } else {
      return content + " CM";
    }
  }
}

const MeasurementBox = (props) => {
  return (
    <div className="measurement-box">
      <div className="measurement-box-header">{props.header}</div>
      <div className="measurement-box-content">
        {prepareContent(props.profile, props.content, props.index)}
      </div>
    </div>
  );
};

export default MeasurementBox;
