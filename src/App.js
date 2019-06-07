import React, { Component } from "react";
import { HashRouter, Link } from "react-router-dom";
import routes from "./routes";

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav className="nav">
            <div>Houser</div>
            <div className="link-wrap">
              <Link to="/wizard/step1" className="links">
                Add New Property
              </Link>
            </div>
          </nav>
          {routes}
        </div>
      </HashRouter>
    );
  }
}