import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./HomePage";
import Logout from "./Logout";
import Register from "./Register";
import GroceryUpdateForm from "./GroceryUpdateForm";
import RecipeUpdateForm from "./RecipeUpdateForm";

export default props => (
  <div>
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
      <Route exact path="/dashboard/recipes/:id" component={RecipeUpdateForm} />
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
          <HomePage
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
