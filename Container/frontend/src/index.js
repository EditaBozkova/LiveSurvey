// Import knihoven
import React from 'react';
import ReactDOM from 'react-dom'; 

// Import komponenty App
import App from './App';

const root = "/ui" // prozatimni reseni

// Renderování komponenty App (obsahuje router přesměrování)
ReactDOM.render( 
  <React.StrictMode>
    <App appRoot={root}/> 
  </React.StrictMode>,
  document.getElementById('root')
);