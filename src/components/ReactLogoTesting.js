import smIcon0 from "../artassets/artAssets/smIcons/iconWindowFB.png";
import smIcon1 from "../artassets/artAssets/smIcons/iconWindowGitHub.png";
import smIcon2 from "../artassets/artAssets/smIcons/iconWindowLine.png";
import smIcon3 from "../artassets/artAssets/smIcons/iconWindowLinkedIn.png";
import windowBlue from "../artassets/windowAssets/windowBlue.png";
import windowDark from "../artassets/windowAssets/windowDark.png";
import windowLight from "../artassets/windowAssets/windowLight.png";
import windowRed from "../artassets/windowAssets/windowRed.png";
import windowGreen from "../artassets/windowAssets/windowGreen.png";

export const ReactLogoTesting = () => {
  const color = ["Light", "Dark", "Blue", "Red", "Green"];
  const smIconSrc = [smIcon0, smIcon1, smIcon2, smIcon3];
  const windowsSrc = [
    windowBlue,
    windowDark,
    windowLight,
    windowRed,
    windowGreen,
  ];
  const defaultStyle = "100px";

  var testingSections = [];
  for (var j = 0; j < 5; j++) {
    for (var i = 0; i < 4; i++) {
      var iconName = smIconSrc[i].split("/").slice(3);
      var iconInPath = "../artassets/artAssets/smIcons/";

      var windowName = windowsSrc[i].split("/").slice(3);
      var winInPath = "../artassets/windowAssets/";

      testingSections.push(
        <div class="Testing" id={color[i] + "Testing"}>
          <h1 id={color[i] + "Title"}></h1>
          <img
            class="backDrop"
            id={color[i] + iconName.toString() + "backDrop"}
          ></img>
          <img
            class="midDrop"
            id={color[i] + iconName.toString() + "midDrop"}
          ></img>
          <img
            class="pictureLogo"
            id={color[i] + iconName.toString() + "back"}
            src={smIconSrc[i]}
          ></img>
          <img
            class="pictureWindow"
            id={color[i] + iconName.toString() + "front"}
            src={windowsSrc[j]}
          ></img>
        </div>
      );

      console.log("Real Address" + windowBlue);
      console.log("Constructed" + winInPath + windowName.toString());
    }
  }

  return (
    <ul>
      {testingSections.map((icon) => (
        
          <a key={icon.id}>{icon}</a>
        
      ))}
    </ul>
  );
};
