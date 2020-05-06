import React, { Fragment } from "react";
import NavBar from "./NavBar";
import Groceries from "./Groceries";
import Login from "./Login";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <Fragment>
            <NavBar />
            <Groceries userId={this.props.userId} />
          </Fragment>
        ) : (
          <Login
            updateAuthenticatedState={this.props.updateAuthenticatedState}
          />
        )}
      </div>
    );
  }
}

export default HomePage;
