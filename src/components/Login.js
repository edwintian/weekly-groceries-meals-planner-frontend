import React from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import axios from "../utils/axiosInstance";
import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  validateForm = () => {
    return this.state.username.length >= 3 && this.state.password.length >= 8;
  };

  handleSubmit = event => {
    event.preventDefault();
    const URL = "/users/login";

    const payload = {
      username: this.state.username,
      password: this.state.password
    };

    axios
      .post(
        URL,
        payload,
        {
          headers: {
            "content-type": "application/json"
          }
        },
      )
      .then(response => {
        if (Number(response.status) === 200) {
          const userId = response.data.split("as ")[1];
          this.props.updateAuthenticatedState(true, userId);
        }
      })
      .catch(error => {
        console.log(error);
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
        </form>
      </div>
    );
  }
}
export default Login;
