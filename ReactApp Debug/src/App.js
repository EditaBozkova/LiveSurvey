import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Home';
import CreateS from './CreateS'
import Album from './Album'
import JSONdata from './AlbumData'

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/create">
            <CreateS />
          </Route>
          <Route path="/album">
            <Album JSONdata={JSONdata}/>
          </Route>
          <Route path="/InProgress">
            <InProg />
          </Route>
          <Route path="/">
            <Home SurSum={JSONdata.length}/>
          </Route>
        </Switch>
    </Router>
  );
}

function InProg() {
  return <h2>Under construction...</h2>;
}