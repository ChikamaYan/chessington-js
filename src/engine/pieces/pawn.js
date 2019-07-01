import Piece from './piece';
import Player from "../player";
import Move from "../move";
import MoveType from "../moveType";

export default class Pawn extends Piece {

    constructor(player) {
        super(player);
        this.popped = false;
        this.enPassantable = false;

        if (player === Player.WHITE) {
            this.moves = [
                new Move(1, 0, MoveType.LATERAL_NONKILL),
                new Move(1, -1, MoveType.KILL),
                new Move(1, -1, MoveType.EN_PASSANT),
                new Move(1, 1, MoveType.KILL),
                new Move(1, 1, MoveType.EN_PASSANT),
                new Move(2, 0, MoveType.LATERAL_NONKILL)
            ];
        } else {
            this.moves = [
                new Move(-1, 0, MoveType.LATERAL_NONKILL),
                new Move(-1, -1, MoveType.KILL),
                new Move(-1, -1, MoveType.EN_PASSANT),
                new Move(-1, 1, MoveType.KILL),
                new Move(-1, 1, MoveType.EN_PASSANT),
                new Move(-2, 0, MoveType.LATERAL_NONKILL)
            ];
        }
    }

    moveTo(board, newSquare) {
        let currentSquare = board.findPiece(this);
        this.enPassantable = Math.abs(currentSquare.row - newSquare.row) === 2;

        let moveType = MoveType.DEFAULT;
        let moves = this.getAvailableMoveObjects(board);

        for (let m of moves) {
            if (currentSquare.row + m.rowChange === newSquare.row
                && currentSquare.col + m.colChange === newSquare.col) {
                moveType = m.moveType;
            }
        }

        super.moveTo(board, newSquare, moveType);
        if (!this.popped) {
            this.moves.pop();
            this.popped = true;
        }

    }


}
