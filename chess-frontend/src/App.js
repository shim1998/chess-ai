import React, { Component } from "react";
import Chessboard from "./chessboard.js";
import './App.css';


class Main extends Component{
  render(){
    return (
      <div id="ChessBoard">
        <Chessboard>
        </Chessboard>
      </div>
    )
  }
}

export default Main;
