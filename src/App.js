import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Groceries from "./components/Groceries";
import Login from "./components/Login";

class App extends React.Component {
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
              <NavBar />
              <Groceries userId={this.state.userId}/>
            </Fragment>
          ) : (
            <Login updateAuthenticatedState={this.updateAuthenticatedState}/>
          )}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
