import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Register from "./Register";
import HomePage from "./HomePage";

export default () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/dashboard" component={HomePage} />
      <Route exact path="/register" component={Register} />
    </Switch>
  </div>
);
