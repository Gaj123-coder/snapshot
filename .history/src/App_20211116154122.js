import { useScreenshot } from 'use-react-screenshot';
import {useRef} from "react";
const App=()=>{
  const { image, takeScreenshot } = useScreenshot();
  const ref=useRef();
  return (
    <div ref={ref}>
      <h1>Hello World!</h1>
      <button onClick={() => takeScreenshot()}>screenshot</button>
      {image && <img src={image} alt="Screenshot not displaying..."/>}
    </div>
  );
  
}

export default App;
