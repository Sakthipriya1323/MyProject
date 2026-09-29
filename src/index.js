import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import CounterClass from './CounterClass';
// import ConditionalRender from './ConditionalRender';
// import StringLiteral from './StringLiteral';
// import ButtonClick from './ButtonClick';
import fetchWithEffect from './fetchWithEffect';
// import form from './form';
// import parent from './parent';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <CounterClass /> */}
    {/* <ConditionalRender /> */}
    {/* <StringLiteral /> */}
    <fetchWithEffect />
    {/* <form /> */}
    {/* <parent /> */}
    {/* <ButtonClick /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
