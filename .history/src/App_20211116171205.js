import React from "react";
const App = () => {
  var canvas = document.getElementById("my-canvas");
  canvas.toBlob(function(blob) {
    saveAs(blob, "pretty image.png");
  });
  return (
    <React.Fragment>
      
    </React.Fragment>
  );
};

export default App;
