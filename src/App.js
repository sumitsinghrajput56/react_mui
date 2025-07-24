import logo from "./logo.svg";
import "./App.css";
import { Button } from "@mui/material";

function App() {
  return (
    <div className="App">
        <Button color="secondary" variant="text" onClick={()=>alert("hello guys")}>Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button><br></br>

        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button><br></br>

        <Button variant="contained">Contained</Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" href="#contained-buttons">
          Link
        </Button>
    </div>
  );
}

export default App;
