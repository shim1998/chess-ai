import Piece from './pieces'
import b_rook from '../images/pieces/b_rook.png'
import w_rook from '../images/pieces/w_rook.png'

class Rook extends Piece{
    constructor(player){
        super(player,(player===1?b_rook:w_rook));
    }
}

export default Rook;