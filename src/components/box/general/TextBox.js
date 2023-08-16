const TextBox = (props) => {
  return (
    <span>
      <p className="text-box mx-4">{props.title} </p>
      <p className="text-box-data">{props.text}</p>
    </span>
  );
};

export default TextBox;
