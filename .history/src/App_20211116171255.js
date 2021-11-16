import React from "react";
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
        <button onClick={}
      </div>    
    </React.Fragment>
  );
};

export default App;
