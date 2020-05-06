import React from "react";
import axios from "../utils/axiosInstance";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

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
                this.state.groceries.map(item => (
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
                      {/*
                        <Link to={`/login/${item.userIdWithItemName}`}>{item.userIdWithItemName} </Link>
                        */}
                      {/*item.userIdWithItemName*/}
                    </td>
                    <td>
                      {item.quantity} {item.unit}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <Button block bssize="small" type="submit">
            Click to add a new grocery item
          </Button>
        </div>
      </div>
    );
  }
}

export default Groceries;
