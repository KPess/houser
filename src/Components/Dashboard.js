import React, {Component} from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom'
import House from './House'

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
  }

  componentDidMount() {
    axios.get("/api/properties").then(response => {
      this.setState({ houses: response.data });
    });
  }
  render() {
    return <div>
        <House houses={this.state.houses}/>

    </div>;
  }
}