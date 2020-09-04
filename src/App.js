import React from "react";
import Home from "./routes/Home";
import Cart from "./routes/Cart";
import List_Product from "./routes/List_product";
import Detail_Product from "./routes/Detail_product";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Cart">
            <Cart />
          </Route>
          <Route path="/Products" exact>
            <List_Product />
          </Route>
          <Route path="/Products/:code">
            <Detail_Product />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
