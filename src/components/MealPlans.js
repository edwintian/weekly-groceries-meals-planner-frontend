import React from "react";
import axios from "../utils/axiosInstance";

class MealPlan extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      mealplans: null
    };
  }

  async componentDidMount() {
    const URL = "/users/" + this.props.userId + "/mealplans";
    const mealplans = (await axios.get(URL)).data;
    this.setState({
      mealplans
    });
  }

  render() {
    return (
      <div className="container">
        <div className="table">
          {this.state.mealplans === null && <p>Loading mealplans...</p>}
          <table>
            <thead>
              <tr>
                <th>MealPlan</th>
              </tr>
            </thead>
            <tbody>
              {this.state.mealplans &&
                this.state.mealplans.map(item => (
                  <tr key={item.userIdWithItemName}>
                    <td>
                      {item.quantity} {item.unit}
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

export default MealPlan;
