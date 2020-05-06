import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import LogOutNavBar from "./LogOutNavBar";
import Groceries from "./Groceries";
import Login from "./Login";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      userId: ""
    };
  }

  updateAuthenticatedState = (isUserAuthenticated, userId) => {
    this.setState({
      isAuthenticated: isUserAuthenticated,
      userId: userId
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          {this.state.isAuthenticated ? (
            <Fragment>
              <LogOutNavBar />
              <Groceries userId={this.state.userId} />
            </Fragment>
          ) : (
            <Login updateAuthenticatedState={this.updateAuthenticatedState} />
          )}
        </div>
      </BrowserRouter>
    );
  }
}

export default HomePage;
