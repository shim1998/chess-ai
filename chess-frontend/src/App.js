import React, { Component } from "react";
import ChessBoard from "./chessboard.js";
import './App.css';


class Main extends Component{
  render(){
    return (
      <div id="ChessBoard">
        <ChessBoard/>
      </div>
    )
  }
}

export default Main;
