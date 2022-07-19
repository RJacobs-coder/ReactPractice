import React, {useState} from "react";
import {MainBody} from "./MainBody";


export const MainLeftNav = () => {
  const [currentBody, setBody] = useState("");
  console.log("Initial Set - " + currentBody);
  
  const buttonValues = ["Home", "About Me", "Games", "Photos", "3D Models"];
  const buttonArray = [];

  const bodySwitch = (e) => {
    console.log("Before Click - " + currentBody);
    setBody(e.value);
    console.log("After Click - " + currentBody);
    return currentBody;
  } 


  for (var i = 0; i < buttonValues.length; i++) {
    
    buttonArray.push(
      <button
        className="NavButtons"
        id={i + "NavButton"}
        value={buttonValues[i]}
        onClick={(e) => bodySwitch(e.target)}
      >
        {buttonValues[i]}
      </button>
    );
  }

  var listButtons = buttonArray.map((buttons) => (
    <li
      className="NavButtonsList"
      id={buttons.props.id + "Li"}
      key={buttons.id}
    >
      {buttons}
    </li>
  ));

  return (
    <div id="NavBodyDiv">
    <div id="NavBarContainer">
      <ul id="LeftNavButtonList">{listButtons}</ul>
     
    </div>
    <div><MainBody id={"MainBody-" + currentBody}></MainBody></div>
    </div>
  );
};
