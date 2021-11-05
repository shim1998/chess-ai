import Piece from './pieces'
import b_bishop from '../images/pieces/b_bishop.png'
import w_bishop from '../images/pieces/w_bishop.png'

class Bishop extends Piece{
    constructor(player){
        super(player,(player===1?b_bishop:w_bishop));
    }
}

export default Bishop;