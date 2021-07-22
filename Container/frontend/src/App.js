import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import CreateS from './components/CreateS'
import Album from './components/Album'
import JSONdata from './surveysData/AlbumData'
import Survey from './components/Survey'

function SurveyWelcome() {
  const {id}=useParams();
  const {nameid}=useParams();

  return (
    <Survey ID={id} nameID={nameid} JSONdata={JSONdata}/>
  )
}

export default function App(props) {
  return (
    <Router>
        <Switch>
          <Route path={props.appRoot+"/create"}>
            <CreateS />
          </Route>
          <Route path={props.appRoot+"/album/:id/:nameid"}>
            <SurveyWelcome />
          </Route>
          <Route path={props.appRoot+"/album"}>
            <Album JSONdata={JSONdata}/>
          </Route>
          <Route path={props.appRoot+"/InProgress"}>
            <InProg />
          </Route>
          <Route path={props.appRoot+"/"}>
            <Home SurSum={JSONdata.length}/>
          </Route>
        </Switch>
    </Router>
  );
}

function InProg() {
  return <h2>Under construction...</h2>;
}