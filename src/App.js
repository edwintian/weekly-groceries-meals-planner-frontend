import React from "react";
import MyRouter from "./components/MyRouter";
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <MyRouter />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
