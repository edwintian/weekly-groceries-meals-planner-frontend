import React from "react";
import axios from "../utils/axiosInstance";

class Groceries extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      groceries: null
    };
  }

  async componentDidMount() {
    const URL = "/users/" + this.props.userId + "/groceries";
    const groceries = (await axios.get(URL)).data;
    this.setState({
      groceries
    });
  }

  render() {
    return (
      <div className="container">
        <div className="table">
          {this.state.groceries === null && <p>Loading groceries...</p>}
          <table>
            <thead>
              <tr>
                <th>Ingredients</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {this.state.groceries &&
                this.state.groceries.map(item => (
                  <tr key={item.userIdWithItemName}>
                    <td>{item.userIdWithItemName}</td>
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

export default Groceries;
