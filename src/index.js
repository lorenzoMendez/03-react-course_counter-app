import React from 'react';
//import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
//import FirstApp from './FirstApp';
import './index.css';
//const saludo = <h1>Hola Mundo</h1>;

const root = document.querySelector("#root");

//ReactDOM.render(<FirstApp saludo="Hola, soy Goku" />, root);

ReactDOM.render(<CounterApp  value={1}/>, root);