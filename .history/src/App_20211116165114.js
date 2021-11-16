import { useScreenshot } from 'use-react-screenshot';
import React,{useRef} from "react";
const App=()=>{
  const ref=useRef();
  const {image,takeScreenshot}=useScreenshot();
  const getImage=()=>takeScreenshot({ref});
  const downloadImage=()=>{
  }
  return (<React.Fragment>
      <button onClick={getImage}>
        Take Screenshots
      </button>
      <button onClick={downloadImage}>Download</button>
      <div  ref={ref}>
        <img id="scream" src="2.jpg" height="448" width="100%" ></img>
      </div>
    </React.Fragment>);
}

export default App;
