import Piece from './pieces/piece';
import Player from "./player";

export default class Move {
    constructor(rowChange,colChange,moveType,canKill){
        this.rowChange = rowChange;
        this.colChange = colChange;
        this.moveType = moveType;
        this.canKill = canKill;
    }
}