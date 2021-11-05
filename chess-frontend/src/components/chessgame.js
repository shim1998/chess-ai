import React, { Component } from "react";
import ChessBoard from "./chessboard";

class Game extends Component{
    render(){
        return(
            <React.Fragment>
            <ChessBoard/>
            </React.Fragment>
        )   
    }
}

export default Game;