import React, { Component } from "react";
import './chessboard.css';
import ChessPiece from "./chesspiece";

function isBlack(i,j){
  return (i+j)%2===1;
}

function createtiles(){
  const squares = [];
  for(var i=0;i<64;i++){
    var Tile_Color=isBlack(Math.floor(i/8),i%8)?"white_tile":"black_tile";
    squares.push(<div id={Tile_Color}><div id={ChessPiece}></div></div>);
  }
  return squares;
}

class Chessboard extends Component{  
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
  
export default Chessboard;