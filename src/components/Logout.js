import React from "react";
import axios from "../utils/axiosInstance";

class Logout extends React.Component {
  componentDidMount = () => {
    const URL = "/users/logout";

    const payload = {
      logout: "arandomstring"
    };

    axios
      .post(URL, payload, {
        headers: {
          "content-type": "application/json"
        }
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="Logout">
        <p>You have been logged out. Visit the homepage to login again</p>
      </div>
    );
  }
}
export default Logout;
