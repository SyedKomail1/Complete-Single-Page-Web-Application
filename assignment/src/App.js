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
//import Login from "./component/Login";
import NewProduct from "./component/NewProduct";
import UpdateProduct from "./component/UpdateProduct";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        <TopMenu />
        <div style={{ padding: "5px" }}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/products/new" component={NewProduct} />
            <Route path="/products/update/:id" component={UpdateProduct} />
            <Route path="/products/:page?" component={Products} />
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
