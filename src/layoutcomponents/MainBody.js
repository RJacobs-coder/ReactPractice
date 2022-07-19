import React from "react";

import { HomeBody } from "./LayoutBodyFolder/HomeBody";
import { AboutMeBody } from "./LayoutBodyFolder/AboutMeBody";
import { GamesBody } from "./LayoutBodyFolder/GamesBody";
import { PhotosBody } from "./LayoutBodyFolder/PhotosBody";
import { TDModelsBody } from "./LayoutBodyFolder/TDModelsBody";

export const MainBody = (props) => {
  const bodyValues = ["Home", "About Me", "Games", "Photos", "3D Models"];
  const bodyArray = [
    <HomeBody></HomeBody>,
    <AboutMeBody></AboutMeBody>,
    <GamesBody></GamesBody>,
    <PhotosBody></PhotosBody>,
    <TDModelsBody></TDModelsBody>,
  ];

  let currentState = props.id.split("-");
  console.log("Current State - " + currentState[1]);

  let currentSelection;

  if (currentState[1] === bodyValues[0]) {
    currentSelection = bodyArray[0];
  }
  if (currentState[1] === bodyValues[1]) {
    currentSelection = bodyArray[1];
  }
  if (currentState[1] === bodyValues[2]) {
    currentSelection = bodyArray[2];
  }
  if (currentState[1] === bodyValues[3]) {
    currentSelection = bodyArray[3];
  }
  if (currentState[1] === bodyValues[4]) {
    currentSelection = bodyArray[4];
  }

  return (
    <div id="MainBody">
      <a>{currentSelection}</a>
    </div>
  );
};
