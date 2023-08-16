const GeneralXAxis = (props) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="middle"
        fill={props.color}
        transform="rotate(-15)"
        fontSize="12"
      >
        {payload.value}
      </text>
    </g>
  );
};

export default GeneralXAxis;
