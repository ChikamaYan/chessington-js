import Piece from './piece';
import Move from "../move";
import MoveType from "../moveType";

export default class Knight extends Piece {
    constructor(player) {
        super(player);
        this.moves = Move.constructSameType([[2, -1], [2, 1], [1, 2], [1, -2], [-1, 2], [-1, -2], [-2, 1], [-2, -1]],
            MoveType.KNIGHT, false);
    }

}
