import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import App from './components/colorChart'
import Chartcolor from './components/colorChart'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Chartcolor />
  </React.StrictMode>,
  document.getElementById('root')
);

