import React from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import axios from "../utils/axiosInstance";
import "./GroceryUpdateForm.css";

class GroceryUpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemname: this.props.match.params.id || "",
      quantity: this.props.location.state.quantity || "",
      unit: this.props.location.state.unit || "servings",
      showErrorMsg: false
    };
  }

  isAlphaNumericOrSpace = str => {
    var code, i, len;

    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if (
        !(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123) &&
        !(code === 32)
      ) {
        // lower alpha (a-z)
        return false;
      }
    }
    return true;
  };

  validateForm = () => {
    const isValidated =
      this.isAlphaNumericOrSpace(this.state.itemname) &&
      this.state.quantity >= 0 &&
      this.state.unit.length >= 1;
    return isValidated;
  };

  handleSubmit = event => {
    event.preventDefault();
    const URL = "/users/" + this.props.location.state.userId + "/groceries";

    const payload = {
      itemName: this.state.itemname,
      quantity: this.state.quantity,
      unit: this.state.unit
    };

    const method = this.props.location.state.method || "put";
    if (Number(payload.quantity) === 0) {
      console.log("payload is " + payload);
      axios
        .delete(URL, {
          headers: {
            "content-type": "application/json"
          },
          data: {payload}
        })
        .then(response => {
          if (Number(response.status) === 201) {
          } else {
            this.setState({ showErrorMsg: true });
          }
        })
        .catch(error => {
          this.setState({ showErrorMsg: true });
        });
    } else {
      axios[method](URL, payload, {
        headers: {
          "content-type": "application/json"
        }
      })
        .then(response => {
          if (Number(response.status) === 201) {
          } else {
            this.setState({ showErrorMsg: true });
          }
        })
        .catch(error => {
          this.setState({ showErrorMsg: true });
        });
    }
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <h2>Update Grocery</h2>
          <p>Set quantity to 0 to remove item from dashboard</p>
          <FormGroup controlId="itemname" bssize="large">
            <FormLabel>itemname</FormLabel>
            <FormControl
              autoFocus
              type="itemname"
              value={this.state.itemname}
              onChange={e => this.setState({ itemname: e.target.value })}
            />
          </FormGroup>
          <FormGroup controlId="quantity" bssize="large">
            <FormLabel>quantity</FormLabel>
            <FormControl
              value={this.state.quantity}
              onChange={e => this.setState({ quantity: e.target.value })}
              type="quantity"
            />
          </FormGroup>
          <FormGroup controlId="unit" bssize="large">
            <FormLabel>unit</FormLabel>
            <FormControl
              value={this.state.unit}
              onChange={e => this.setState({ unit: e.target.value })}
              type="unit"
            />
          </FormGroup>
          <Button
            block
            bssize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Update
          </Button>
          {this.state.showErrorMsg && (
            <p>
              Unable to update or remove groceries, please ensure that itemName
              only consists of space or alphanumeric characters and quantity is
              at least 0.
            </p>
          )}
        </form>
      </div>
    );
  }
}
export default GroceryUpdateForm;
