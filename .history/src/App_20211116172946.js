import React from "react";
import { saveAs } from 'file-saver';
const App = () => {
  const download=()=>{
    var canvas = document.getElementById("my-canvas");
    canvas.toBlob(function(blob) {
      saveAs(blob, "pretty image.png");
    });
  }
  return (
    <React.Fragment>
      <div>
        <button onClick={download} width="300px"/>
        <img id="my-canvas" width="400px" src="https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg" alt="err"/>
      </div>    
    </React.Fragment>
  );
};

export default App;
