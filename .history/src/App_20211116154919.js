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
        Take Screenshots
      </button>
      <button onClick={downloadImage}>Download</button>
      <div  ref={ref}>
              <img id="scream" style={imgStyle} src={url} height="448" width="100%" ref={imgRef}></img> //imgRef is for zoom functionality
            </div>
    </React.Fragment>);
}

export default App;
