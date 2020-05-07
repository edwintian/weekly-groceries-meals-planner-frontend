import React from "react";
import axios from "../utils/axiosInstance";
import { Link } from "react-router-dom";

class Recipes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      recipes: null
    };
  }

  async componentDidMount() {
    const URL = "/users/" + this.props.userId + "/recipes";
    const recipes = (await axios.get(URL)).data;
    this.setState({
      recipes
    });
  }

  ingredientCheck = recipeIngredients => {
    let checkResult = "Enough :)";
    let allIngredients = {};
    console.log(this.props.ingredientsInStock);

    if (this.props.ingredientsInStock) {
    this.props.ingredientsInStock.map(
      item => (allIngredients[item.userIdWithItemName] = item.quantity)
    );
    }
    for (const item of recipeIngredients.split(";")) {
      const itemName = item.split("_")[1];
      const itemCount = item.split("_")[0];
      if (!(itemName in allIngredients && allIngredients[itemName] >= itemCount)) {
        checkResult = "Not enough";
      }
    }
    // recipeIngredients.split(";").map(item => {
    //   const itemName = item.split("_")[1];
    //   const itemCount = item.split("_")[0];
    //   if (!(itemName in allIngredients && allIngredients[itemName] >= itemCount)) {
    //     checkResult = "Not enough";
    //   }
    // });
    return checkResult;
  };

  render() {
    return (
      <div className="container">
        <h2> All Your Recipes </h2>
        <div className="table">
          {this.state.recipes === null && <p>Loading recipes...</p>}
          <table>
            <thead>
              <tr>
                <th>Recipes</th>
                <th>Enough Ingredients</th>
              </tr>
            </thead>
            <tbody>
              {this.state.recipes &&
                this.state.recipes.map(item => (
                  <tr key={item.userIdWithRecipeName}>
                    <td>{item.userIdWithRecipeName}</td>
                    <td>
                      {this.ingredientCheck(item.concatenatedIngredients)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {
            <Link
              to={{
                pathname: `/dashboard/recipes/new item name`,
                state: {
                  userId: this.props.userId,
                  method: "post"
                }
              }}
            >
              Add new recipe
            </Link>
          }
        </div>
      </div>
    );
  }
}

export default Recipes;
