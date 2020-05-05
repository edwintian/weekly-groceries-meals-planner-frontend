import React from "react";
import axios from "../utils/axiosInstance";

class groceries extends React.Component {
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
    console.log(groceries);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.groceries === null && <p>Loading groceries...</p>}
          {this.state.groceries &&
            this.state.groceries.map(item => (
              <div className="card-body">
                <h4 className="card-title">{item.userIdWithitemName}</h4>
                <p className="card-text">{item.quantity}</p>
                <p className="card-text">{item.unit}</p>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default groceries;
