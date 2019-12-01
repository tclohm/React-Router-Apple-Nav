import React from 'react';
import { NavLink, Route } from "react-router-dom";
import Home from "./components/Home";
import iPad from "./components/iPad";
import iPhone from "./components/iPhone";
import Mac from "./components/Mac";
import Music from "./components/Music";
import Search from "./components/Search";
import Store from "./components/Store";
import Support from "./components/Support";
import TV from "./components/TV";
import Watch from "./components/Watch";
import './App.css';

function App() {
  return (
    <div>
      <div className="apple-top-nav">
        <NavLink exact to="/" className="apple-top-nav-links links-big"><i class="fas fa-apple-alt"></i></NavLink>
        <NavLink to="/mac" className="apple-top-nav-links">Mac</NavLink>
        <NavLink to="/ipad" className="apple-top-nav-links">iPad</NavLink>
        <NavLink to="/iphone" className="apple-top-nav-links">iPhone</NavLink>
        <NavLink to="/watch" className="apple-top-nav-links">Watch</NavLink>
        <NavLink to="/tv" className="apple-top-nav-links">TV</NavLink>
        <NavLink to="/music" className="apple-top-nav-links">Music</NavLink>
        <NavLink to="/support" className="apple-top-nav-links">Support</NavLink>
        <NavLink to="/search" className="apple-top-nav-links links-big"><i class="fas fa-search"></i></NavLink>
        <NavLink to="/store" className="apple-top-nav-links links-big"><i class="fab fa-app-store"></i></NavLink>
      </div>
      <Route exact path="/" component={Home} />
      <Route path="/mac" component={Mac} />
      <Route path="/ipad" component={iPad} />
      <Route path="/iphone" component={iPhone} />
      <Route path="/watch" component={Watch} />
      <Route path="/tv" component={TV} />
      <Route path="/music" component={Music} />
      <Route path="/support" component={Support} />
      <Route path="/search" component={Search} />
      <Route path="/store" component={Store} />
    </div>
  );
}

export default App;
