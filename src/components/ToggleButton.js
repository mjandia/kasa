import React, { useState } from "react";
import flecheBas from "../image/flecheBas.png";
import flecheHaut from "../image/flecheHaut.png";

function ToggleButton({ text }) {
  const [isShowing, setIsShowing] = useState(false);

  function handleClick() {
    setIsShowing(!isShowing);
  }

  return (
    <div>
      <img
        src={isShowing ? flecheHaut : flecheBas}
        alt="Toggle Button"
        onClick={handleClick}
      />
      {isShowing && <p>{text}</p>}
    </div>
  );
}

export default ToggleButton;