import React from "react";
import { Route, Link } from "react-router-dom";

export default function Wizard() {
  return (
    <Route>
      <div>
        <h1>Add New Listing</h1>
        <Link to="/" className="links">
          Cancel
        </Link>
      </div>
    </Route>
  );
}
