import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Groceries from "./components/Groceries";
import Login from "./components/Login";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          {this.state.isAuthenticated ? (
            <Fragment>
              <NavBar />
              <Groceries />
            </Fragment>
          ) : (
            <Login />
          )}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
