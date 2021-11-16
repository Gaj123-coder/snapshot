import React from "react";
import { saveAs } from 'file-saver';
const App = () => {
  const download=()=>{
    var FileSaver = require('file-saver');
    var blob = document.getElementById("my-canvas");
    FileSaver.saveAs(blob, "hello world.txt");
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
