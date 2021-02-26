import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import DropDown from "./components/drop-down";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(

  <BrowserRouter>
    <DropDown />
  </BrowserRouter>,

  document.getElementById('root')
);

reportWebVitals();
