import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import Appli from './Appli';

// const baseName = (window.location.href.search(/github)) ? "/panier-achats-pvt-gr2" : "";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Appli />
    </Router>
  </React.StrictMode>,
  document.getElementById('racine')
);