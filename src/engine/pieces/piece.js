import Square from "./../square"
import MoveType from "../moveType";

export default class Piece {
    constructor(player) {
        this.player = player;
        this.moves = [];
        this.enPassantable = false;
    }

    moveTo(board, newSquare, moveType) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare, moveType);
    }

    getAvailableMoves(board) {
        let validMoves = [];
        let currentSquare = board.findPiece(this);

        for (let m of this.moves) {
            let newSquare = new Square(currentSquare.row + m.rowChange, currentSquare.col + m.colChange);
            if (this.isValidMove(board, currentSquare, newSquare, m.moveType, m.canKill)) {
                validMoves.push(newSquare);
            }
        }

        return validMoves;
    }

    getAvailableMoveObjects(board){
        let validMoves = [];
        let currentSquare = board.findPiece(this);

        for (let m of this.moves) {
            let newSquare = new Square(currentSquare.row + m.rowChange, currentSquare.col + m.colChange);
            if (this.isValidMove(board, currentSquare, newSquare, m.moveType, m.canKill)) {
                validMoves.push(m);
            }
        }

        return validMoves;
    }

    isValidMove(board, currentSquare, newSquare, moveType) {

        let blockedBy = this.player;
        if (moveType === MoveType.LATERAL_NONKILL) {
            blockedBy = "both";
        }

        return board.inBoundary(newSquare)
            && !board.isPathBlocked(currentSquare, newSquare, moveType)
            && !board.isNewSquareBlocked(newSquare, blockedBy);
    }


}
