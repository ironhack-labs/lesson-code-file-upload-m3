// src/App.js

import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

// Import the AddMovie component
import AddMovie from "./components/AddMovie/AddMovie"; // !!!

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/movies/add"> Add a movie </NavLink>
      </nav>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies/add" component={AddMovie} />
        {/* ADD this line */}
      </Switch>
    </div>
  );
}

export default App;
