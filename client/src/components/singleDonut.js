import React, { Component } from "react";

import App from "./app";

export default class SingleDonut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.id,
      name: props.donut.name,
      image: this.image,
      description: this.description,
      review: this.review,
    };
  }

  getdonuts() {
    return;
  }

  render() {
    return <a>{this.state.name}</a>;
  }
}
