import Piece from './piece';
import Player from "../player";
import Move from "../move";
import MoveType from "../moveType";

export default class Pawn extends Piece {

    constructor(player) {
        super(player);
        this.popped = false;

        if (player === Player.WHITE) {
            this.moves = [
                new Move(1, 0, MoveType.LATERAL_NONKILL),
                new Move(1, -1, MoveType.KILL),
                new Move(1, 1, MoveType.KILL),
                new Move(2, 0, MoveType.LATERAL_NONKILL)
            ];
        } else {
            this.moves = [
                new Move(-1, 0, MoveType.LATERAL_NONKILL),
                new Move(-1, -1, MoveType.KILL),
                new Move(-1, 1, MoveType.KILL),
                new Move(-2, 0, MoveType.LATERAL_NONKILL)
            ];
        }
    }

    moveTo(board, newSquare) {
        super.moveTo(board, newSquare);
        if (!this.popped) {
            this.moves.pop();
            this.popped = true;
        }

    }


}
