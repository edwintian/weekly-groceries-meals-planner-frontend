import React from "react";
import axios from "axios";

class groceries extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      groceries: null
    };
  }

  async componentDidMount() {
    const URL =
      process.env.REACT_APP_SERVER_BACKEND_BASE_URL +
      "/5a466eff-79e0-4002-9e39-15ffc9e192d7/groceries";
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
