import React from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import axios from "../utils/axiosInstance";
import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      showLoginErrorMsg: false,
    };
  }

  isAlphaNumeric = str => {
    var code, i, len;

    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if (
        !(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)
      ) {
        // lower alpha (a-z)
        return false;
      }
    }
    return true;
  };

  validateForm = () => {
    const isValidated =
      this.isAlphaNumeric(this.state.username) &&
      this.state.username.length >= 3 &&
      this.state.password.length >= 8;
    return isValidated;
  };

  handleSubmit = event => {
    event.preventDefault();
    const URL = "/users/login";

    const payload = {
      username: this.state.username,
      password: this.state.password
    };

    axios
      .post(URL, payload, {
        headers: {
          "content-type": "application/json"
        }
      })
      .then(response => {
        if (Number(response.status) === 200) {
          const userId = response.data.split("as ")[1];
          this.props.updateAuthenticatedState(true, userId);
        } else {
          this.setState({ showLoginErrorMsg: true });
        }
        console.log(response);
      })
      .catch(error => {
        console.log(error);
        this.setState({ showLoginErrorMsg: true });
      });
  };

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bssize="large">
            <FormLabel>Username</FormLabel>
            <FormControl
              autoFocus
              type="username"
              value={this.state.username}
              onChange={e => this.setState({ username: e.target.value })}
            />
          </FormGroup>
          <FormGroup controlId="password" bssize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bssize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
          {this.state.showLoginErrorMsg && (
            <p>
              Your login credentials could not be verified, please try again. If
              you are a new user, please click on the register link.
            </p>
          )}
        </form>
      </div>
    );
  }
}
export default Login;
