import Piece from './piece';
import Move from "../move";
import MoveType from "../moveType";

export default class King extends Piece {
    constructor(player) {
        super(player);

        this.moves = [];

        this.moves = this.moves.concat(Move.constructSameType([[1, 1], [-1, -1], [1, -1], [-1, 1]],
            MoveType.DIAGONAL));
        this.moves = this.moves.concat(Move.constructSameType([[1, 0], [-1, 0], [0, 1], [0, -1]],
            MoveType.LATERAL));

    }

}
