import React, { useEffect } from "react";
import { saveAs } from 'file-saver';
const App = () => {
  const download=()=>{
    var FileSaver=require('file-saver')
    FileSaver.saveAs("https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg","image")
  }
  useEffect(()=>{

  },[])
  return (
    <React.Fragment>
      <input type="text">Enter the title of the photo to search</input>  
    </React.Fragment>
  );
};

export default App;
