import React from "react";
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
const App=()=>{
  return (
    <BrowserRouter>
      <Link to="\download">Download Image Here</Link>
      <Link to="\image">Link to the image</Link>
    </BrowserRouter>
  );
}

export default App;
