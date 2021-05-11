import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Usergithub from './hw4.js';

ReactDOM.render(
  <React.StrictMode>
    <Usergithub source="https://api.github.com/users/tillen1001" />
  </React.StrictMode>,   
  document.getElementById('root') 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
