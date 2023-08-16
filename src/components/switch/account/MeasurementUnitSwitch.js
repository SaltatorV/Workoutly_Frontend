import { useState } from "react";
import { Switch } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const MeasurementUnitSwitch = (props) => {
  const [checked, setChecked] = useState(props.isChecked);

  const toggle = () => {
    setChecked(!checked);
    props.toggle();
  };

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography>{props.unit_a}</Typography>
      <Switch size="big" checked={checked} onChange={toggle} />
      <Typography>{props.unit_b}</Typography>
    </Stack>
  );
};

export default MeasurementUnitSwitch;
