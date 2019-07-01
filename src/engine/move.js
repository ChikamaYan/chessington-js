import Piece from './pieces/piece';
import Player from "./player";

export default class Move {
    constructor(rowChange, colChange, moveType) {
        this.rowChange = rowChange;
        this.colChange = colChange;
        this.moveType = moveType;
    }

    static constructSameType(changes, moveType) {
        let moves = [];
        for (let i of changes) {
            moves.push(new Move(i[0], i[1], moveType));
        }
        return moves;
    }
}