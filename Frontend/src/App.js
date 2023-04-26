import React from "react";
import "./styles.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";



export default function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/Signup" component={SignUp} />
      <Route
        path="/home"
        render={(props) => <Home display={true} {...props} />}
      />
      <Redirect to="/login" />
    </Switch>
  );
}
