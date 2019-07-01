import Piece from './piece';
import GameSettings from "../gameSettings";

export default class Rook extends Piece {
    constructor(player) {
        super(player);
        this.moves = [];
        for (let i = 1; i < GameSettings.BOARD_SIZE; i++) {
            this.moves.push([i, 0], [-i, 0], [0, i], [0, -i]);
        }
    }

}
