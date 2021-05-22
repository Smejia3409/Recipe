import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style/app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//components
import Recipes from "./components/Recipes";

import Home from "./components/Home";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const App = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/recipes">
            <Recipes />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
