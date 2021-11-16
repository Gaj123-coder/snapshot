import { useScreenshot } from 'use-react-screenshot';
import React,{useRef} from "react";
const App=()=>{
  const ref=useRef();
  const {image,takeScreenshot}=useScreenshot();
  const getImage=()=>takeScreenshot({ref});
  const downloadImage=()=>{
    var FileSaver=require('file-saver');
    FileSaver.saveAs(`${image}`, "image.jpg");
  }
  return (<React.Fragment>
    <button onClick={getImage}>

</button>
    </React.Fragment>);
}

export default App;
