import Piece from './pieces'
import b_king from '../images/pieces/b_king.png'
import w_king from '../images/pieces/w_king.png'

class King extends Piece{
    constructor(player){
        super(player,(player===1?b_king:w_king));
    }
}

export default King;