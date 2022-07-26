import React from "react";

import smIcon0 from "../artassets/artAssets/smIcons/iconWindowFB.png";
import smIcon1 from "../artassets/artAssets/smIcons/iconWindowGitHub.png";
import smIcon2 from "../artassets/artAssets/smIcons/iconWindowLine.png";
import smIcon3 from "../artassets/artAssets/smIcons/iconWindowLinkedIn.png";
import windowBlue from "../artassets/windowAssets/windowBlue.png";

export const Socials = () => {
  const color = "Blue";
  const smIconSrc = [smIcon0, smIcon1, smIcon2, smIcon3];
  const windowsSrc = windowBlue; // Will be array at later date.
  var socialIcons = [];

  for (let i = 0; i < 4; i++) {
    let iconName = smIconSrc[i].split("/").slice(3);

    // Compiles all picture assets into a single array.
    // Array Iterates with unique ID's when needed.
    socialIcons.push(
      <div className="Socials" id={i + color + "Socials"}>
        <h1 id={i + color + "Title"}></h1>
        <img
          className="backDrop"
          id={i + color + iconName.toString() + "backDrop"}
        ></img>
        <img
          className="midDrop"
          id={i + color + iconName.toString() + "midDrop"}
        ></img>
        <img
          className="pictureLogo"
          id={i + color + iconName.toString() + "back"}
          src={smIconSrc[i]}
        ></img>
        <img
          className="pictureWindow"
          id={i + color + iconName.toString() + "front"}
          src={windowsSrc}
        ></img>
      </div>
    );

  }
  //Entire social "bar" is collected.
  let listItems = socialIcons.map((icon) => (
    <a id={icon.props.id + "Anchor"} key={icon.id}>
      {icon}
    </a>
  ));

  return <ul id="SocialList">{listItems}</ul>;
};
