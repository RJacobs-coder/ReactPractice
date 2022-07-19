import React from "react";
import textCollect from "../textassets/aboutMeText/textCollect.json";
import pic0 from "../artassets/aboutMePictures/bridge.jpg";
import pic1 from "../artassets/aboutMePictures/bubbles.jpg";
import pic2 from "../artassets/aboutMePictures/disney.jpg";
import pic3 from "../artassets/aboutMePictures/fishing.jpg";
import pic4 from "../artassets/aboutMePictures/london.jpg";
import pic5 from "../artassets/aboutMePictures/snorkling.jpg";
import pic6 from "../artassets/aboutMePictures/StudentAward.jpg";
import pic7 from "../artassets/aboutMePictures/traveling.jpg";

import { useRef } from "react";
import ScrollToTop from "react-scroll-to-top";
import ScrollToBottom from "react-scroll-to-bottom";

export const AboutMeBlock = () => {


  const TEXTASSETS = textCollect.map((items) => (
    <a className="aboutMeText" id={items.id + "aboutMeText"}>
      {items.content}
    </a>
  ));
  const picArray = [pic0, pic1, pic2, pic3, pic4, pic5, pic6, pic7];
  const PICTUREASSETS = [];
  for (let i = 0; i < picArray.length; i++) {
    PICTUREASSETS.push(
      textCollect.map((items) => (
        <img
          className="aboutMePicture"
          id={items.id + "aboutMePicture"}
          src={picArray[i]}
        ></img>
      ))
    );
  }

  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
    console.log("Button Clicked");
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
      
    });
    console.log("ScrollToBottom Buttom Clicked");
  };

  return (
    <div>
      <button className="link btn" onClick={scrollToBottom}>
        Scroll to bottom
      </button>

      <button>
        <a className="ScrollButton" onClick={() => scrollDown()}>
          First one
        </a>
      </button>
      <button>
        <a className="ScrollButton" onClick={() => scrollDown()}>
          Second one
        </a>
      </button>
      <button>
        <a className="ScrollButton" onClick={() => scrollDown()}>
          Third one
        </a>
      </button>
      <button>
        <a className="ScrollButton" onClick={() => scrollDown()}>
          Fouth one
        </a>
      </button>
      <button>
        <a className="ScrollButton" onClick={() => scrollDown()}>
          Fith one
        </a>
      </button>
      <button>
        <a className="ScrollButton" onClick={() => scrollDown()}>
          Sixth one
        </a>
      </button>
      <button>
        <a className="ScrollButton" onClick={() => scrollDown()}>
          Seventh one
        </a>
      </button>
      <button>
        <a className="ScrollButton" onClick={() => scrollDown()}>
          Eighth one
        </a>
      </button>
      <ul className="ScrollTesting" id="ScrollingTestingId">
        <li>
          {TEXTASSETS[0]}
          {PICTUREASSETS[0]}
        </li>
        <li>
          {PICTUREASSETS[1]}
          {TEXTASSETS[1]}
        </li>
        <li>
          {TEXTASSETS[2]}
          {PICTUREASSETS[2]}
        </li>
        <li>
          {PICTUREASSETS[3]}
          {TEXTASSETS[3]}
        </li>
        <li>
          {TEXTASSETS[4]}
          {PICTUREASSETS[4]}
        </li>
        <li>
          {PICTUREASSETS[5]}
          {TEXTASSETS[5]}
        </li>
        <li>
          {TEXTASSETS[6]}
          {PICTUREASSETS[6]}
        </li>
        <li>
          {PICTUREASSETS[7]}
          {TEXTASSETS[7]}
        </li>
      </ul>
    </div>
  );
};
