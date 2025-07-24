import * as React from "react";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function ColorCheckboxes() {

  const [name,setName]=React.useState([]);

  function setValue(e)
  {
    const data=name;
    data.push(e.target.value);
    console.log(name);

  }

  return (
    <div>
      <Checkbox {...label} defaultChecked  icon={<FavoriteBorder/>} checkedIcon={<Favorite/>} />
      <Checkbox {...label} defaultChecked color="secondary" value="firstCheckbox" onChange={(e)=>setValue(e)} />
      <Checkbox {...label} defaultChecked color="success" value="secondCheckbox" onChange={(e)=>setValue(e)} />
      <Checkbox {...label} defaultChecked color="default" value="thiredCheckbox" onChange={(e)=>setValue(e)} indeterminate />
      <Checkbox
        {...label}
        defaultChecked
        sx={{
          color: pink[800],
          "&.Mui-checked": {
            color: pink[600],
          },
        }}
        value="forthCheckbox" onChange={(e)=>setValue(e)}
      />
    </div>
  );
}
