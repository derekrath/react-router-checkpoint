import * as React from "react";
import "./components/App.css";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Profiles from "./components/Profiles.js";
import { Switch, Redirect, Route } from "react-router-dom";
import SearchAppBar from "./components/SearchAppBar.js";

function App() {

  return (
    <>
      <div className="App">
        <SearchAppBar title="Social Media Page" />
        <Switch>
          <Route path={`/home`} component={Home}></Route>
          <Route path={`/profiles`} component={Profiles}></Route>
          <Route path={`/about`} component={About}></Route>
          <Redirect to={`/home`} />
        </Switch>
      </div>
    </>
  );
}

export default App;
