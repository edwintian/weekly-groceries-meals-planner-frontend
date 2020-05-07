import React from "react";
import MyRouter from "./components/MyRouter";
import NavBar from "./components/NavBar";
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
          <NavBar isAuthenticated={this.state.isAuthenticated} />
          <MyRouter
            userId={this.state.userId}
            isAuthenticated={this.state.isAuthenticated}
            updateAuthenticatedState={this.updateAuthenticatedState}
          />
        </BrowserRouter>
      </div>
    );
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();

    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }
}

export default App;
