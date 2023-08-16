import QuestionMark from "../marks/QuestionMark";
import "./css/SummaryHeader.css";

const SummaryHeader = (props) => {
  return (
    <>
      <h3 className="my-3 summary-header" style={{ color: props.color }}>
        {props.title}
      </h3>
      <QuestionMark
        description={props.description}
        color={props.color}
        className="summary-question-mark"
      />
      <hr
        style={{ backgroundColor: props.color }}
        className="my-3 summary-header-line"
      />
    </>
  );
};

export default SummaryHeader;
