import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams 
} from "react-router-dom";
import Home from "./components/home";
import Nav from "./components/nav";
import Game from "./components/game";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/game/:level"  children={<Game />} /> 
          <Route exact path="/statistics"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
