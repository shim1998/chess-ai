import React, { Component } from "react";
import '../styles/chessboard.css';
import initialise from './initialise';

function isblack(i,j){
  return (i+j)%2===0;
}

function createtiles(){
  const squares = [];
  const piece_squares = initialise();
  for(let i=0;i<64;i++){
    let tile_color=isblack(Math.floor(i/8),i%8)?"white_tile":"black_tile";
    squares.push(
      <div id={tile_color}>
          <div id="Piece_Container">
            <img src={(piece_squares[i]?piece_squares[i].image:null)} id="Piece"/>
          </div>
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