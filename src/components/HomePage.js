import React from "react";
import Groceries from "./Groceries";
import Login from "./Login";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <Groceries userId={this.props.userId} />
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
