import React from "react";


export const MainFooter = () => {
  const textArray = [
    "Phone: ",
    "Email: ",
    "LinkedIn: ",
    "LineID: ",
    "GitHub: ",
  ];
  const compArray = [];

  for (var i = 0; i < textArray.length; i++) {
    compArray.push(<a href="#" id={i + "Anchor"}>{textArray[i]}</a>);
  }

  var listItems = compArray.map((elements) => (
    <li className="FooterItems" id={elements.props.id + "li"}key={elements.id}>
      {elements}
    </li>
  ))

  return (
    <div id="MainFooter">
        <h1>Contact Me: </h1>
    <ul id="FooterList">
      {listItems}
    </ul>
    </div>
  );
};
