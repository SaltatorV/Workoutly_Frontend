import "./css/ParagraphBox.css";

const ParagraphBox = (textData) => {
  return (
    <section className="paragraph-box">
      <h3>{textData.textData}</h3>
    </section>
  );
};

export default ParagraphBox;
