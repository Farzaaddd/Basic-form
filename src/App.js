import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />

        <Redirect from="/" to="/signup" />
      </Switch>
    </div>
  );
}

export default App;
