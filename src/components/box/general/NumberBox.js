const NumberBox = (props) => {
  return (
    <span>
      <p className="number-box-data  mx-4">{props.title}</p>
      <input
        onChange={props.onChange}
        className="number-box"
        type="number"
        step={props.step}
        min={props.min}
        max={props.max}
        placeholder={props.initValue}
      />
      <p className="number-box-data mx-1">{props.text}</p>
    </span>
  );
};

export default NumberBox;
