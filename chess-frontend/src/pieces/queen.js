import Piece from './pieces'
import b_queen from '../images/pieces/b_queen.png'
import w_queen from '../images/pieces/w_queen.png'

class Queen extends Piece{
    constructor(player){
        super(player,(player===1?b_queen:w_queen));
    }
}

export default Queen;