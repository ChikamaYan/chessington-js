import Piece from './pieces/piece';
import Player from "./player";

export default class Move {
    constructor(rowChange, colChange, moveType, canKill) {
        this.rowChange = rowChange;
        this.colChange = colChange;
        this.moveType = moveType;
        this.canKill = canKill;
    }

    static constructSameType(changes, moveType, canKill) {
        let moves = [];
        for (let i of changes) {
            moves.push(new Move(i[0], i[1], moveType, canKill));
        }
        return moves;
    }
}