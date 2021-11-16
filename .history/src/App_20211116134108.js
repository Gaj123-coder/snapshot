import React from "react";
import {BrowserRouter,Switch,Route,Link} from "";
import Download from "./components/Download"; 
import Image from "./components/Image";
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
