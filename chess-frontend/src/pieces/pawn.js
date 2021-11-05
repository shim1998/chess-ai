import Piece from './pieces'
import b_pawn from '../images/pieces/b_pawn.png'
import w_pawn from '../images/pieces/w_pawn.png'

class Pawn extends Piece{
    constructor(player){
        super(player,(player===1?b_pawn:w_pawn));
    }
}

export default Pawn;