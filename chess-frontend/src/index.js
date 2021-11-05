import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import ChessBoard from './components/chessboard';

ReactDOM.render(
  <React.StrictMode>
    <ChessBoard />
  </React.StrictMode>,
  document.getElementById('root')
);

