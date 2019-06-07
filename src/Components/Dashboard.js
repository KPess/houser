import React, {Component} from 'react';
// import axios from 'axios';
import House from './House'

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      Houses: []
    };
  }

//   componentDidMount() {
//     axios.get("/api/Houses").then(response => {
//       this.setState({ Houses: response.data });
//     });
//   }
  render() {
    return <div>
        <House Houses={this.state.Houses}/>

    </div>;
  }
}