import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Register from "./Register";
import HomePage from "./HomePage";
import Logout from "./Logout";
import NavBar from "./NavBar";
import GroceryUpdateForm from "./GroceryUpdateForm";

export default () => (
  <div>
    <NavBar/>
    <Switch>
      <Route exact path="/dashboard" component={HomePage} />
      <Route exact path="/dashboard/:id" component={GroceryUpdateForm} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/" component={HomePage} />
      <Route path="/404" render={() => <div>Sorry, Page Not Found</div>} />
      <Redirect to="/404" />
    </Switch>
  </div>
);
