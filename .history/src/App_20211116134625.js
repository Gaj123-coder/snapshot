import React from "react";
import {BrowserRouter,Switch,Route,Link} from "";
import Download from "./components/Download"; 
import Image from "./components/Image";
const App=()=>{
  return (
    <BrowserRouter>

      <Switch>
        <Route path='/download' component={Download} />
        <Route path='/image' component={Image} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
