import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import mastercraftData from './mastercraft-data.json'

ReactDOM.render(
  <React.StrictMode>
    <App productData={JSON.parse(JSON.stringify(mastercraftData))}/>
  </React.StrictMode>,
  document.getElementById('root')
);
