import React from 'react';
import { BrowserRouter } from "react-router-dom";
import MainRouter from './MainRouter';

import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import  './static/css/styles.css';


const App = () => {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
};

export default App;
