import React from "react";
import axios from "../utils/axiosInstance";
import { Link } from "react-router-dom";

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
        console.log("Groceries is rendered");
    return (
      <div className="container">
        <h2> What You Have Now </h2>
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
                this.state.groceries.filter(item => item.quantity > 0).map(item => (
                  <tr key={item.userIdWithItemName}>
                    <td>
                      {
                        <Link
                          to={{
                            pathname: `/dashboard/${item.userIdWithItemName}`,
                            state: {
                              userId: this.props.userId
                            }
                          }}
                        >
                          {item.userIdWithItemName}
                        </Link>
                      }
                    </td>
                    <td>
                      {item.quantity} {item.unit}
                    </td>
                    <td>
                      {
                        <Link
                          to={{
                            pathname: `/dashboard/${item.userIdWithItemName}`,
                            state: {
                              userId: this.props.userId,
                              method: "delete",
                              quantity: "0",
                              unit: item.unit
                            }
                          }}
                        >
                          Remove this grocery
                        </Link>
                      }
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {
            <Link
              to={{
                pathname: `/dashboard/new item name`,
                state: {
                  userId: this.props.userId,
                  method: "post"
                }
              }}
            >
              Add new grocery
            </Link>
          }
        </div>
      </div>
    );
  }
}

export default Groceries;
