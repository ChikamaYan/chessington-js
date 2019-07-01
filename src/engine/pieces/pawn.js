import Piece from './piece';



export default class Pawn extends Piece {

    constructor(player) {
        super(player);
        this.moves = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    }
}
