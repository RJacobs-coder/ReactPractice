import React from "react";
import "./sassFiles/mainstylesheet.css";
import {MainHeader} from "./layoutcomponents/MainHeader";
import {MainFooter} from "./layoutcomponents/MainFooter"
import {MainLeftNav} from "./layoutcomponents/MainLeftNav";
import { PhotosBody } from "./layoutcomponents/LayoutBodyFolder/PhotosBody";
import {Socials} from "./components/Socials";




function App() {
  return (
    <div className="App">
   
  

{/* <PhotosBody></PhotosBody> // Scrolling works fine here.
 */}
 
 
 <MainHeader></MainHeader>
 
<a><MainLeftNav></MainLeftNav></a>{/* Scrolling does not work inside here. */}

<MainFooter></MainFooter> 






    </div>
  );
}

export default App;
