import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/levels"></Route>
          <Route exact path="/game"></Route>
          <Route exact path="/statistics"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
