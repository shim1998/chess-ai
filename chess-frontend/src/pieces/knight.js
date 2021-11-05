import Piece from './pieces'
import b_knight from '../images/pieces/b_knight.png'
import w_knight from '../images/pieces/w_knight.png'

class Knight extends Piece{
    constructor(player){
        super(player,(player===1?b_knight:w_knight));
    }
}

export default Knight;