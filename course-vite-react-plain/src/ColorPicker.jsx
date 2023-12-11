import { useState } from "react";

function ColorPicker() {

  const [color, setColor] = useState("#FFFFFF");

  function handleColorChange(event){
    setColor(event.target.value);
  }

  return ( 
  <div className="color-picker-container">
    <h1>Värivalitsin</h1>
    <div className="color-display" style={{backgroundColor: color}}>
        <p>Valittu väri: {color}</p>
    </div>
    <label>Valitse väri:</label>
    <input type="color" value={color} onChange={handleColorChange}/>
  </div>
   );
}

export default ColorPicker;