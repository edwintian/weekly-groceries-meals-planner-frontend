import React from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import axios from "../utils/axiosInstance";
import "./Register.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      showRegisterErrorMsg: false,
      showRegisterSuccessMsg: false
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
    const URL = "/users/register";

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
        if (Number(response.status) === 201) {
          this.setState({ showRegisterSuccessMsg: true });
        } else {
          console.log(response);
          this.setState({ showRegisterErrorMsg: true });
        }
      })
      .catch(error => {
        this.setState({ showRegisterErrorMsg: true });
      });
  };

  render() {
    return (
      <div className="Register">
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
            Register with new credentials
          </Button>
          {this.state.showRegisterErrorMsg && (
            <p>
              Registration unsuccessful, please try again. Ensure your username
              is alphanumeric and at least 3 characters long, password must be
              at least 8 characters long.
            </p>
          )}
          {this.state.showRegisterSuccessMsg && (
            <p>
              Registration successful, please click on the login link to login.
            </p>
          )}
        </form>
      </div>
    );
  }
}
export default Register;
