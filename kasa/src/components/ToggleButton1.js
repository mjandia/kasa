import React, { useState } from "react";
import flecheBas from "../image/flecheBas.png";
import flecheHaut from "../image/flecheHaut.png";

const ToggleButton1 = (props) => {
  const [isShowing, setIsShowing] = useState(false);
  
  return (
    <div className="toggle-container">
      <div
        className="title-container"
        onClick={() => setIsShowing(!isShowing)}
      >
        <h2>{props.title}</h2>
        <img
          src={isShowing ? flecheHaut : flecheBas}
          alt="fleche"
          className="fleche"
        />
      </div>
      {isShowing && (
        <div className="text-background">
          <Text1 text={props.textEquipment} />
        </div>
      )}
    </div>
  );
};


const Text1 = (props) => {
    const textList = props.text.split(',');
    return (
        <ul className="text1">
            {textList.map((item, index) => (
                <li key={index}>{item.trim()}</li>
            ))}
        </ul>
    )
  }

export default ToggleButton1;