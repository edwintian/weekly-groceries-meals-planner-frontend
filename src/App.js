import React from "react";
import MyRouter from "./components/MyRouter";
import { BrowserRouter } from "react-router-dom";

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
      <div>
        <BrowserRouter>
          <MyRouter
            userId={this.state.userId}
            isAuthenticated={this.state.isAuthenticated}
            updateAuthenticatedState={this.updateAuthenticatedState}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
