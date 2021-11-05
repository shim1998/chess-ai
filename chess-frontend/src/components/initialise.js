import Pawn from '../pieces/pawn';
import Bishop from '../pieces/bishop';
import Rook from '../pieces/rook';
import Knight from '../pieces/knight';
import King from '../pieces/king';
import Queen from '../pieces/queen';

export default function initialise(){
    const piece_squares = Array(64).fill(null);
    for(let i=0;i<8;i++){
        piece_squares[8+i] = new Pawn(1);
        piece_squares[48+i] = new Pawn(2);
    }
    piece_squares[2] = new Bishop(1);
    piece_squares[5] = new Bishop(1);
    piece_squares[58] = new Bishop(2);
    piece_squares[61] = new Bishop(2);
    piece_squares[0] = new Rook(1);
    piece_squares[7] = new Rook(1);
    piece_squares[56] = new Rook(2);
    piece_squares[63] = new Rook(2);
    piece_squares[1] = new Knight(1);
    piece_squares[6] = new Knight(1);
    piece_squares[57] = new Knight(2);
    piece_squares[62] = new Knight(2);
    piece_squares[3] = new King(1);
    piece_squares[59] = new King(2);
    piece_squares[4] = new Queen(1);
    piece_squares[60] = new Queen(2);
    return piece_squares;
}