import Piece from './piece';
import Player from "../player";
import Move from "../move";
import MoveType from "../moveType";

export default class Pawn extends Piece {

    constructor(player) {
        super(player);

        if (player === Player.WHITE) {
            this.moves = [new Move(1, 0, MoveType.LATERAL, false), new Move(2, 0, MoveType.LATERAL, false)];
        } else {
            this.moves = [new Move(-1, 0, MoveType.LATERAL, false), new Move(-2, 0, MoveType.LATERAL, false)];
        }
    }

    moveTo(board, newSquare) {
        super.moveTo(board, newSquare);
        this.moves.pop();
    }


}
