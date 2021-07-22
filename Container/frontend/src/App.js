// Import používaných knihoven
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Import používaných komponent
import Home from './components/Home';
import CreateS from './components/CreateS'
import Album from './components/Album'
import Survey from './components/Survey'

// Import dat pro ankety
import JSONdata from './surveysData/AlbumData'

// Funkce pro získání dat z URL a spuštění komponenty Survey
function SurveyWelcome() {
  const {id}=useParams();
  const {nameid}=useParams();

  return (
    <Survey ID={id} nameID={nameid} JSONdata={JSONdata}/>
  )
}

// Funkce pro přesměrování podle URL adresy
export default function App(props) {
  return (
    <Router>
        <Switch>
          <Route path={props.appRoot+"/create"}> {/*Spuštění komponenty pro tvorbu nových anket (in progress)*/}
            <CreateS />
          </Route>
          <Route path={props.appRoot+"/album/:id/:nameid"}> {/*Spuštění komponenty pro vyplňování anket*/}
            <SurveyWelcome />
          </Route>
          <Route path={props.appRoot+"/album"}> {/*Spuštění komponenty pro výběr anket*/}
            <Album JSONdata={JSONdata}/>
          </Route>
          <Route path={props.appRoot+"/InProgress"}> {/*in progress...*/}
            <InProg />
          </Route>
          <Route path={props.appRoot+"/"}> {/*Komponenta pro domovskou stránku*/}
            <Home SurSum={JSONdata.length}/> {/*Počet vytvořených anket*/}
          </Route>
        </Switch>
    </Router>
  );
}

function InProg() {
  return <h2>Under construction...</h2>;
}