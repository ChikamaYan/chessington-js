import Piece from './piece';
import GameSettings from "../gameSettings";

export default class Queen extends Piece {
    constructor(player) {
        super(player);
        this.moves = [];
        for (let i = 1; i < GameSettings.BOARD_SIZE; i++) {
            this.moves.push([i, i], [-i, -i], [i, -i], [-i, i], [i, 0], [-i, 0], [0, i], [0, -i]);
        }
    }


}
