import React from "react";
import { saveAs } from 'file-saver';
const App = () => {
  const download=()=>{
    var FileSaver=require('file-saver')
    FileSaver.saveAs("https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg","image")
  }
  return (
    <React.Fragment>
      <div>
      </div>    
    </React.Fragment>
  );
};

export default App;
