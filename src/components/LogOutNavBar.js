import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Logout from "./Logout";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary fixed-top">
        <Link to="/logout">Logout </Link>
      </nav>
      <Switch>
        <Route exact path="/logout" component={Logout} />
      </Switch>
    </div>
  );
}

export default NavBar;
