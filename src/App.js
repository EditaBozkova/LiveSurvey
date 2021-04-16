import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Home';
import CreateS from './CreateS'
import Album from './Album'

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/create">
            <CreateS />
          </Route>
          <Route path="/album">
            <Album />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}