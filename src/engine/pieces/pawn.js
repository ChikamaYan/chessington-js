import Piece from './piece';
import Player from "../player";


export default class Pawn extends Piece {


    constructor(player) {
        super(player);

        if (player === Player.WHITE) {
            this.moves = [[1, 0], [2, 0]];
        } else {
            this.moves = [[-1, 0], [-2, 0]];
        }
    }

    moveTo(board, newSquare) {
        super.moveTo(board, newSquare);
        this.moves.pop();
    }


}
