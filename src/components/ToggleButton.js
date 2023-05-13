import React, { useState } from "react";
import flecheBas from "../image/flecheBas.png";
import flecheHaut from "../image/flecheHaut.png";

const ToggleButton = (props) => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div className="toggle-container">
      <h2>{props.title}</h2>
      <img
        src={isShowing ? flecheHaut : flecheBas}
        alt="fleche"
        className="fleche"
        onClick={() => setIsShowing(!isShowing)}
      />
      {isShowing && (
        <div className="text-background">
          <Text text={props.text} />
        </div>
      )}
    </div>

  );
};

const Text = (props) => { 
  return <div className="text">{props.text}</div>;
};

export default ToggleButton;