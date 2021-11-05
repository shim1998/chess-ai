import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/chessgame'
import './styles/index.css';
import './styles/reset.css'


ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById('root')
);
