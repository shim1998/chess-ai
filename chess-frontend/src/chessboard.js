import React, { Component } from "react";
import './chessboard.css';
import isvalidposition from "./chesspiece";

function isblack(i,j){
  return (i+j)%2===0;
}

function createtiles(){
  const squares = [];
  for(let i=0;i<64;i++){
    let tile_color=isblack(Math.floor(i/8),i%8)?"white_tile":"black_tile";
    console.log(isvalidposition(Math.floor(i/8),i%8));
    let if_chess_piece=isvalidposition(Math.floor(i/8),i%8);
    squares.push(
      <div id={tile_color}>
          {if_chess_piece}
      </div>
    );
  }
  return squares;
}

class ChessBoard extends Component{  
  render(){
    var tiles= []
    tiles = createtiles()
    return (
      <React.Fragment>
          <div id="ChessBoard">
            {tiles}
          </div>
      </React.Fragment>
    )
  }
}
  
export default ChessBoard;