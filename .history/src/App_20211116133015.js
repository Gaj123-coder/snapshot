import React from "react";
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import Download from ""; 
import Image from "";
const App=()=>{
  return (
    <BrowserRouter>
      <Link to="\download">Download Image Here</Link>
      <Link to="\image">Link to the image</Link>
      <Switch>
        <Route path="/image">
          <Image/>
        </Route>
        <Route path="/download">
          <Download/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
