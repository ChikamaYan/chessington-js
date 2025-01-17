import Piece from './piece';
import GameSettings from "../gameSettings";
import Move from "../move";
import MoveType from "../moveType";

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
        this.moves = [];
        for (let i = 1; i < GameSettings.BOARD_SIZE; i++) {
            this.moves = this.moves.concat(Move.constructSameType([[i, i], [-i, -i], [i, -i], [-i, i]],
                MoveType.DIAGONAL));
        }
    }

}
