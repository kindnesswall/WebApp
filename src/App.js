import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import MainRouter from './MainRouter';

import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import  './static/css/styles.css';
import './static/css/dialog.css';
import "./static/css/ReactToastify.css";


const App = () => {
  return (
    <BrowserRouter>
      <MainRouter />
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
