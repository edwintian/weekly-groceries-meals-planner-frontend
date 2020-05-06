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
      .then(response => {})
      .catch(error => {
      });
    this.props.updateAuthenticatedState(false, "");
  };

  render() {
    return (
      <div className="Logout">
        <p>
          You have been logged out. You will have
          to login again to view the Dashboard.
        </p>
      </div>
    );
  }
}
export default Logout;
