import React from "react";
import { useRef } from "react";

export const PhotosBody = () =>{

  const lastElement = useRef(null);

  const scroll = () => {
    window.scrollTo({top : lastElement.current.offsetTop,
    behavior: 'smooth'})
  }

    return(
    <div>
    
    <button onClick={scroll}>Click here</button>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1>This is where the Photos will go.</h1>
    <h1 ref={lastElement}>This is where the Photos will go. Bottom</h1>
   
    </div>
    
    
    
    )
}