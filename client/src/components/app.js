import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Router} from 'react-router-dom';

import "../style/main";
import "../style/about";
import "../style/navbar";
import "../style/contact";
import "../style/home";

import Product from "./product";
import Home from "./home"
import Navbar from './navbar';
import About from './about';
import Contact from './contact';

export default class App extends Component {
    render() {
        return (
            <div className="whole-nav">
            <BrowserRouter>
            <div>
            <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/product" component={Product} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    {/* <Route exact path="./pages/auth" component={Auth} /> */}
                </Switch>
            </div>
            </BrowserRouter>
            </div>
        );
    }
}