import React, { Component } from "react";

import Products from "../product";

export default class PersonalView extends Component {
  render() {
    return (
      <div className="View-container">
        <div>
          <h1>{Products}</h1>
        </div>
      </div>
    );
  }
}
