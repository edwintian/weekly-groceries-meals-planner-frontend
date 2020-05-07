import React, { Fragment } from "react";
import Groceries from "./Groceries";
import Recipes from "./Recipes";
import Login from "./Login";

class HomePage extends React.Component {
  render() {
    return (
      <div className="parent">
        {this.props.isAuthenticated ? (
          <Fragment>
            <Groceries userId={this.props.userId} />
            <Recipes userId={this.props.userId} />
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
