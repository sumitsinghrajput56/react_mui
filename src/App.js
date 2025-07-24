import logo from "./logo.svg";
import "./App.css";
import { Button, ButtonGroup } from "@mui/material";

import { Delete } from "@mui/icons-material";

function App() {
  function customizeMe()
  {
    alert("hello guys");
  }
  return (
    <div className="App">
    <ButtonGroup variant="outlined" color="secondary" orientation="vertical" >
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>

    </div>
  );
}

export default App;
