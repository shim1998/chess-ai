import React, { Component } from "react";
import './chessboard.css';
import b_pawn from './images/pieces/b_pawn.png'
import w_pawn from './images/pieces/w_pawn.png'
import b_bishop from './images/pieces/b_bishop.png'
import w_bishop from './images/pieces/w_bishop.png'
import b_rook from './images/pieces/b_rook.png'
import w_rook from './images/pieces/w_rook.png'
import b_knight from './images/pieces/b_knight.png'
import w_knight from './images/pieces/w_knight.png'
import b_king from './images/pieces/b_king.png'
import w_king from './images/pieces/w_king.png'
import b_queen from './images/pieces/b_queen.png'
import w_queen from './images/pieces/w_queen.png'

let chess_piece_position = new Map();
chess_piece_position.set(b_pawn,[[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7]]);
chess_piece_position.set(w_pawn,[[6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7]]);
chess_piece_position.set(b_bishop,[[0,2],[0,5]]);
chess_piece_position.set(w_bishop,[[7,2],[7,5]]);
chess_piece_position.set(b_rook,[[0,0],[0,7]]);
chess_piece_position.set(w_rook,[[7,0],[7,7]]);
chess_piece_position.set(b_knight,[[0,1],[0,6]]);
chess_piece_position.set(w_knight,[[7,1],[7,6]]);
chess_piece_position.set(b_king,[[0,4]]);
chess_piece_position.set(w_king,[[7,4]]);
chess_piece_position.set(b_queen,[[0,3]]);
chess_piece_position.set(w_queen,[[7,3]]);

function isValidPosition(i,j){
  for(let [chess_piece_name, positions] of chess_piece_position){
    for(const position of positions){
      if(position[0]===i && position[1]===j){
        return (<div id="Piece_Container">
          <img src={chess_piece_name} id="Piece"/>
          </div>)
      }
    }
  }
}

function isBlack(i,j){
  return (i+j)%2===0;
}

function createtiles(){
  const squares = [];
  for(let i=0;i<64;i++){
    let Tile_Color=isBlack(Math.floor(i/8),i%8)?"white_tile":"black_tile";
    console.log(isValidPosition(Math.floor(i/8),i%8));
    let if_chess_piece=isValidPosition(Math.floor(i/8),i%8);
    squares.push(
      <div id={Tile_Color}>
          {if_chess_piece}
      </div>
    );
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