import React, { Fragment } from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary fixed-top">
        {this.props.isAuthenticated && <Link to="/logout">Logout </Link>}

        {!this.props.isAuthenticated && (
          <Fragment>
            <Link to="/register">Register </Link>
            <Link to="/">Login </Link>
          </Fragment>
        )}
      </nav>
    );
  }
}

export default NavBar;
