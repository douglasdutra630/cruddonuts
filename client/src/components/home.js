import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Crud Donuts</h1>
        <div className="set-background"></div>
        <div className="front-image">
          <img
            src="https://www.voodoodoughnut.com/wp-content/uploads/2017/11/grape-ape-yeast-doughnut-side-400x400.jpg"
            alt="Donut"
          />
        </div>
        <div>
          <h2>This is your last stop for donuts youll ever need</h2>
        </div>
      </div>
    );
  }
}
