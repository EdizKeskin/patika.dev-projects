import "./App.css";
import { useEffect,useState } from "react";
import {init,subscribe} from "./socketApi"
import Palette from "./components/Palette";
function App() {
  const [activeColor, setActiveColor] = useState("#202e38")

  useEffect(()=>{
    init();
    subscribe((color)=>{
      setActiveColor(color);
    });
  },[]);
  return (
    <div className="App" style={{backgroundColor: activeColor}}>
      <Palette activeColor={activeColor}/>
    </div>
  );
}

export default App;
