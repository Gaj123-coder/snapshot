import React from "react";
import {BrowserRouter,Switch,Route,Link} from "";
import Download from "./components/Download"; 
import Image from "./components/Image";
const App=()=>{
  return (
    <Router>
      <h1>Examples</h1>
      <ul>
        <li>
          <Link to='/download'> Download </Link> -{' '}
          <code>/components/Download.js</code>
        </li>{' '}
        <li>
          <Link to='/image'> Image </Link> - <code>/components/Image.js</code>
        </li>
      </ul>

      <hr />

      <Switch>
        <Route path='/download' component={Download} />
        <Route path='/image' component={Image} />
      </Switch>
    </Router>
  )
}

export default App;
