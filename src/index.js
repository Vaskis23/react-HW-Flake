import React from 'react';
import ReactDOM from 'react-dom/client';
import './scene/Scene.css';
import App from './scene/Scene.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
