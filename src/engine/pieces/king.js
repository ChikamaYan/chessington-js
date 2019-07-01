import Piece from './piece';

export default class King extends Piece {
    constructor(player) {
        super(player);
        this.moves = [[1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1]];
    }

}
