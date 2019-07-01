import Square from "./../square"

export default class Piece {
    constructor(player) {
        this.player = player;
        this.moves = [];
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }

    getAvailableMoves(board) {
        let validMoves = [];
        let currentPos = board.findPiece(this);

        for (let m of this.moves) {
            let newPos = new Square(currentPos.row + m[0], currentPos.col + m[1]);
            if (Piece.isValidMove(board, newPos)) {
                validMoves.push(newPos);
            }
        }

        return validMoves;
    }

    static isValidMove(board, square) {
        // square is the destination

        return board.inBoundary(square);

        // TODO: check overlap as well;
    }


}
