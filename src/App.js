import * as React from "react";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Radio, Slider } from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function ColorCheckboxes() {
  const [gender, setGender] = React.useState("male");

  const mark = [
    {
      value: 0,
      label: "start",
    },
    {
      value: 200,
      label: "end",
    },
    {
      value: 100,
      label: "mid",
    },
  ];

  const getValue=(e)=>
  {
    console.log(e.target.value);
  }

  return (
    <div>
      <div style={{ width: 100, marginLeft: 100 ,marginTop:50}}>
        <Slider 
        max={200} 
        defaultValue={70} 
        marks={mark} 
        step={20}
        valueLabelDisplay="auto"
        onChange={getValue}
        color="secondary"
        />
      </div>
    </div>
  );
}
