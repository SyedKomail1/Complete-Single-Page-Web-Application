import React from "react";
import TopMenu from "./component/TopMenu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LandingPage from "./component/LandingPage";
import Products from "./component/products";
import Contactus from "./component/Contactus";
import Notfound from "./component/Notfound";
import Login from "./component/Login";
function App() {
  return (
    <Router>
      <div>
        <TopMenu />
        <div style={{ padding: "5px" }}>
          <Switch>
            <Route path="/products" component={Products} />
            <Route path="/Contact-us" component={Contactus} />
            <Route path="/notfound" component={Notfound} />
            <Route path="/login" component={Login} />

            <Route path="/" exact component={LandingPage} />
            <Redirect to="/notfound" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
