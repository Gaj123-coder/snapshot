import React, { createRef, useState } from 'react'
import { useScreenshot } from 'use-react-screenshot'
const App=()=>{
  const { image, takeScreenshot } = useScreenshot();
  return (
    <div>
      <h1>Hello World!</h1>
      <button onClick={() => takeScreenshot()}>screenshot</button>
      {image && <img src={image} />}
    </div>
  );
  
}

export default App;
