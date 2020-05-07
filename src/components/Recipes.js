import React from "react";
import axios from "../utils/axiosInstance";
import { Link } from "react-router-dom";

class recipes extends React.Component {
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
    console.log(recipes);
  }

  render() {
    return (
      <div className="container">
        <h2> What You Can Make </h2>
        <div className="table">
          {this.state.recipes === null && <p>Loading recipes...</p>}
          <table>
            <thead>
              <tr>
                <th>Recipes</th>
                <th>Ingredients</th>
              </tr>
            </thead>
            <tbody>
              {this.state.recipes &&
                this.state.recipes.filter(item => item.quantity > 0).map(item => (
                  <tr key={item.userIdWithRecipeName}>
                    <td>
                      {
                        <Link
                          to={{
                            pathname: `/dashboard/recipes/${item.userIdWithRecipeName}`,
                            state: {
                              userId: this.props.userId
                            }
                          }}
                        >
                          {item.userIdWithRecipeName}
                        </Link>
                      }
                    </td>
                    <td>
                      {item.concatenatedIngredients}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default recipes;
