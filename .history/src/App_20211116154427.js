import { useScreenshot } from 'use-react-screenshot';
import {useRef} from "react";
const App=()=>{
  const ref=useRef();
  const {image,takeScreenshot}=useScreenshot();
  const getImage=()=>takeScreenshot({ref});
  
}

export default App;
