import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
//import Gallery from "./Gallery";
import Table from "./Table"; 
import Getdata from "./Getdata";
import Tabelbaru from "./Tabelbaru";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="title">Single Page Application</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/Gallery">Gallery</NavLink></li>
            <li><NavLink to="/Table">Table</NavLink></li>
            <li><NavLink to="/Tabelbaru">Tabel Baru</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/Gallery" component={Getdata}/>
            <Route path="/Table" component={Table}/>
            <Route path="/Tabelbaru" component={Tabelbaru}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;