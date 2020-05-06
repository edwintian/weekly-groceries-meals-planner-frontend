import React, { Fragment } from "react";
import NavBar from "./NavBar";
import Groceries from "./Groceries";
import Login from "./Login";
// import Cookies from 'js-cookie'

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

  // checkForCookie = () => {
  //   const jwt = Cookies.get();
  //   console.log("checking for cookie: ", jwt);
  // }

  render() {
   //this.checkForCookie();
    return (
        <div>
          {this.state.isAuthenticated ? (
            <Fragment>
              <NavBar />
              <Groceries userId={this.state.userId} />
            </Fragment>
          ) : (
            <Login updateAuthenticatedState={this.updateAuthenticatedState} />
          )}
        </div>
    );
  }
}

export default HomePage;
