import "./css/SummaryBox.css";

const SummaryBox = (props) => {
  const messages = props.messages;

  return (
    <section className="summary">
      <h3>{messages.title}</h3>
      <hr />
      <p>{messages.firstParagraph}</p>
      <p>{messages.secondParagraph}</p>
    </section>
  );
};

export default SummaryBox;
