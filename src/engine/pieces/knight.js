import Piece from './piece';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
        this.moves = [[2, -1], [2, 1], [1, 2], [1, -2], [-1, 2], [-1, -2], [-2, 1], [-2, -1]];
    }

}
