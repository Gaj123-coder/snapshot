import { useScreenshot } from 'use-react-screenshot';
import {useRef} from "react";
const App=()=>{
  const ref=useRef();
  const {image,takeScreenshot}=useScreenshot();
  const getImage=()=>takeScreenshot({ref});
  const downloadImage=()=>{
    var FileSaver=require('file-saver');
    FileSaver.saveAs(`${image}`, "image.jpg");
  }
  return (<button onClick={getImage}>

  </button>);
}

export default App;
