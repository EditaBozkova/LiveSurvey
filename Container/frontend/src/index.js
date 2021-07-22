import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const appRoot = "/ui"

ReactDOM.render(
  <React.StrictMode>
    <App appRoot={appRoot}/>
  </React.StrictMode>,
  document.getElementById('root')
);