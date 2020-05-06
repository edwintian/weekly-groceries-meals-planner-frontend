import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./HomePage";
import Logout from "./Logout";
import Login from "./Login";
import Register from "./Register";
import NavBar from "./NavBar";
import GroceryUpdateForm from "./GroceryUpdateForm";

export default props => (
  <div>
    <NavBar />
    <Switch>
      <Route
        exact
        path="/dashboard"
        render={() => (
          <HomePage
            isAuthenticated={props.isAuthenticated}
            userId={props.userId}
            updateAuthenticatedState={props.updateAuthenticatedState}
          />
        )}
      />
      <Route exact path="/dashboard/:id" component={GroceryUpdateForm} />
      <Route exact path="/register" component={Register} />
      <Route
        exact
        path="/logout"
        render={() => (
          <Logout
            isAuthenticated={props.isAuthenticated}
            userId={props.userId}
            updateAuthenticatedState={props.updateAuthenticatedState}
          />
        )}
      />
      <Route
        exact
        path="/login"
        render={() => (
          <Login
            isAuthenticated={props.isAuthenticated}
            userId={props.userId}
            updateAuthenticatedState={props.updateAuthenticatedState}
          />
        )}
      />
      <Route
        exact
        path="/"
        render={() => (
          <HomePage
            isAuthenticated={props.isAuthenticated}
            userId={props.userId}
            updateAuthenticatedState={props.updateAuthenticatedState}
          />
        )}
      />
      <Route path="/404" render={() => <div>Sorry, Page Not Found</div>} />
      <Redirect to="/404" />
    </Switch>
  </div>
);
