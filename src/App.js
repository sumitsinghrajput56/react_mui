import * as React from "react";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Radio } from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function ColorCheckboxes() {

  const [gender,setGender]=React.useState("male");

 const setValue=(e)=>{
   console.log(gender);
   setGender(e.target.value);
 }

  return (
    <div>
      <div>
        <Radio color="secondary"  value="male" checked={gender==="male"} onChange={setValue}/>
        <span>male</span>
      </div>
       <div>
        <Radio color="primary" value="female" checked={gender==="female"}  onChange={setValue} />
        <span>female</span>
      </div>
    </div>
  );
}
