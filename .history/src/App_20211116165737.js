import { useScreenshot } from "use-react-screenshot";
import React, { useRef } from "react";
const App = () => {
  const ref = useRef();
  const { image, takeScreenshot } = useScreenshot();
  const getImage = () => takeScreenshot;
  const downloadImage = () => {};
  return (
    <React.Fragment>
      
    </React.Fragment>
  );
};

export default App;
