import React from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import axios from "../utils/axiosInstance";
import "./RecipeUpdateForm.css";

class RecipeUpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipename: this.props.match.params.id || "",
      concatenatedIngredients:
        this.props.location.state.concatenatedIngredients || "",
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
    const isValidated = this.isAlphaNumericOrSpace(this.state.recipename);
    return isValidated;
  };

  handleSubmit = event => {
    event.preventDefault();
    const URL = "/users/" + this.props.location.state.userId + "/recipes";

    const payload = {
      recipeName: this.state.recipename,
      concatenatedIngredients: this.state.concatenatedIngredients,
      IsBreakfast: false
    };

    const method = this.props.location.state.method || "put";

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

    //this.props.history.goBack();
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <h2>Create Recipe</h2>
          <p>Put something like this for ingredients</p>
          <p>2_Mushrooms;2_Rice;2_Garlic;1_Carrots;1_Cabbage;1_Chicken</p>
          <FormGroup controlId="recipename" bssize="large">
            <FormLabel>recipename</FormLabel>
            <FormControl
              autoFocus
              type="recipename"
              value={this.state.recipename}
              onChange={e => this.setState({ recipename: e.target.value })}
            />
          </FormGroup>
          <FormGroup controlId="ingredients" bssize="large">
            <FormLabel>ingredients</FormLabel>
            <FormControl
              value={this.state.concatenatedIngredients}
              onChange={e =>
                this.setState({ concatenatedIngredients: e.target.value })
              }
              type="ingredients"
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
              Unable to update or remove recipes, please ensure that recipename
              only consists of space or alphanumeric characters and follow the
              format for ingredients.
            </p>
          )}
        </form>
      </div>
    );
  }
}
export default RecipeUpdateForm;
