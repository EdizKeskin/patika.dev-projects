import { useState } from "react";
import {send} from "../socketApi";

function Palette({activeColor}) {
  const [color, setColor] = useState("#202e38");
  function onChangeHandler(e) {
    setColor(e.target.value);
  }
  function sendColor() {
      send(color);
  }
  return (
    <div className="palette">
        <h1>{color}</h1>
      <input
        type="color" 
        value={activeColor}
        onChange={onChangeHandler}
      />
      <button onClick={sendColor}>Select</button>
    </div>
  );
}

export default Palette;
