import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

window.React = React;
window.ReactDOM = ReactDOM;

window.renderApp = (root) => {  
  if (root) {
    console.log('React App with element', root);
    ReactDOM.render(React.createElement(App), root);
  } else {
    console.log('React App with element root id');
    ReactDOM.render(React.createElement(App), document.getElementById("root"));
  }
};