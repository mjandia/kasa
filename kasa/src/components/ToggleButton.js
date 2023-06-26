import React, { useState } from "react";
import flecheBas from "../image/flecheBas.png";
import flecheHaut from "../image/flecheHaut.png";

 

const ToggleButton = (props) => {
  const [isShowing, setIsShowing] = useState(false);
  const toggleButtonPath = window.location.pathname;

if (toggleButtonPath.startsWith('/logement/')) {
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
            <Text description={props.text} equipment={props.text1} />
          </div>
        )}
      </div>
    );
  }

if (toggleButtonPath === '/propos') {
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
          <Text propos={props.text} />
        </div>
      )}
    </div>
  );
}

else {
  return null;
}
};

const Text = (props) => {
  return <div className="text">
    {props.description && <div className="description">{props.description}</div>}
    {props.equipment && <div className="equipment">{props.equipment}</div>}
    {props.propos && <div className="propos">{props.propos}</div>}
    </div>;
};
  



export default ToggleButton;