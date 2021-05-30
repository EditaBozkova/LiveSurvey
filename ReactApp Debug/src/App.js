import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home';
import CreateS from './CreateS'
import Album from './Album'
import JSONdata from './AlbumData'
import Survey from './Survey'
import Question from './Question'

function SurveyWelcome(props) {
  const {id}=useParams();
  return (
    <Survey ID={id} JSONdata={JSONdata}/>
  )
}

function SurveyQuestion(pros) {
  const {id}=useParams();
  const {question}=useParams();

  return (
    <Question ID={id} Question={question}/>
  )
}

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/create">
            <CreateS />
          </Route>
          <Route path='/album/:id/:question'>
            <SurveyQuestion />
          </Route>
          <Route path="/album/:id">
            <SurveyWelcome />
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