// src/App.js

import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";

// add here AddMovie
import AddMovie from "./components/AddMovie"; // !!!

function App() {
  return (
    <div className='App'>
      <nav>
        <NavLink to='/movies/add'> Add a movie </NavLink>
      </nav>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/movies/add' component={AddMovie} /> {/* ADD this line */}
      </Switch>
    </div>
  );
}

export default App;
