import React, { Component } from "react";

import Products from "../product";

export default class PersonalView extends Component {
  render() {
    return (
      <div className="view-container">
        <div>{Products}</div>
      </div>
    );
  }
}
