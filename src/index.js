
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

ReactDOM.render(
  <Router basename="/goit-react-hw-05-movies"> 
    <App />
  </Router>,
  document.getElementById('root')
);
