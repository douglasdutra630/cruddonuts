import React, { Component } from "react";
import { NavLink, BrowserRouter } from "react-router-dom";
import { withRouter } from "react-router";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <div className="nav-link-wrapper">
          <NavLink exact to="/">
            Home
          </NavLink>
        </div>
        <div className="nav-link-wrapper">
          <NavLink to="/product">Product</NavLink>
        </div>
        <div className="nav-link-wrapper">
          <NavLink to="/contact">contact</NavLink>
        </div>
        <div className="nav-link-wrapper">
          <NavLink to="/about">about</NavLink>
        </div>
        <div className="nav-link-wrapper">
          <NavLink to="/auth">Login</NavLink>
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
