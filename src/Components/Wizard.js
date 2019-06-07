import React, { Component } from "react";
import store from './store'
import axios from "axios";
import {
  updateAddress,
  updateImage,
  updateCity,
  updateState,
  updateName,
  updateZipcode,
  updateRent,
  updateMortgage
} from './reducer'
import { Link } from "react-router-dom";

export default class Wizard extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      houses: reduxState.houses
    };

    this.makePost = this.makePost.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  makePost() {
    axios
      .post("http://localhost:3000/api/wizard/post", {
        name: this.props.name,
        address: this.props.address,
        city: this.props.city,
        state: this.props.state,
        zipcode: this.props.zipcode,
        image_url: this.props.image_url,
        monthly_mortgage: this.props.monthly_mortgage,
        monthly_rent: this.props.monthly_rent

      })
      .then(response => {
        this.setState({
          name: response.data.name,
          address: response.data.address,
          city: response.data.city,
          state: response.data.state,
          zipcode: response.data.zipcode,
          image_url: response.data.image_url,
          monthly_mortgage: response.data.monthly_mortgage,
          monthly_rent: response.data.monthly_rent
        });
      });
  }

  cancel() {
    this.setState({ name: "", address: "", city: "", state: "", zipcode: 0, monthly_mortgage: 0, monthly_rent: 0, image_url: "" });
  }

  componentDidUpdate() {
    setTimeout(() => {
    axios
    .get('/api/properties')
    .then(response => this.setState({ houses: response.data }))
    .catch(error => console.log(`House-axiosGet: ${error}`))
    }, 1000)
}

  render() {

    return (
      <div className="Wizard">
        <div className="container">
          <h3>Property Name</h3>
          <input type="text" onChange={e => updateName(e.target.value)} />
          <h3>Address</h3>
          <input type="text" onChange={e => updateAddress(e.target.value)} />
          <h3>City</h3>
          <input type="text" onChange={e => updateCity(e.target.value)} />
          <h3>State</h3>
          <input type="text" onChange={e => updateState(e.target.value)} />
          <h3>Zip</h3>
          <input type="text" onChange={e => updateZipcode(e.target.value)} />
          <h3>Image</h3>
          <input type="text" onChange={e => updateImage(e.target.value)} />
          <h3>Rent</h3>
          <input type="text" onChange={e => updateRent(e.target.value)} />
          <h3>Mortgage</h3>
          <input type="text" onChange={e => updateMortgage(e.target.value)} />
          <Link to="/"><button className="cancel" onClick={this.cancel}>
            Cancel
          </button>
          </Link>
          <Link to="/">
            <button onClick={event => this.makePost(this.props)}>Submit</button>
          </Link>
        </div>
      </div>
    );
  }
}

export function mapStateToProps(state) {
  return {
    name: state.name,
    address: state.address,
    city: state.city,
    state: state.state,
    zip: state.zip,
    image_url: state.image_url,
    monthly_rent: state.monthly_rent,
    monthly_mortgage: state.monthly_mortgage
  };
}


