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
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="Logout">
        <p>You have been logged out. To continue browsing this site you will have to login again</p>
      </div>
    );
  }
}
export default Logout;
