import React, { Fragment } from "react";
import Groceries from "./Groceries";
import Recipes from "./Recipes";
import Login from "./Login";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredientStock: {}
    };
  }

  updateIngredientStockState = (takeStock) => {
    this.setState({
      ingredientStock: takeStock
    });
  };

  render() {
    return (
      <div className="parent">
        {this.props.isAuthenticated ? (
          <Fragment>
            <Groceries userId={this.props.userId} updateIngredientStockState={this.updateIngredientStockState}/>
            <Recipes userId={this.props.userId} ingredientsInStock={this.state.ingredientStock}/>
          </Fragment>
        ) : (
          <Login
            updateAuthenticatedState={this.props.updateAuthenticatedState}
          />
        )}
      </div>
    );
  }
}

export default HomePage;
