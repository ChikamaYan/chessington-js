import Player from './player';
import GameSettings from './gameSettings';
import Square from './square';
import MoveType from "./moveType";

export default class Board {
    constructor(currentPlayer) {
        this.currentPlayer = currentPlayer ? currentPlayer : Player.WHITE;
        this.board = this.createBoard();
    }

    createBoard() {
        const board = new Array(GameSettings.BOARD_SIZE);
        for (let i = 0; i < board.length; i++) {
            board[i] = new Array(GameSettings.BOARD_SIZE);
        }
        return board;
    }

    setPiece(square, piece) {
        this.board[square.row][square.col] = piece;
    }

    getPiece(square) {
        return this.board[square.row][square.col];
    }

    findPiece(pieceToFind) {
        for (let row = 0; row < this.board.length; row++) {
            for (let col = 0; col < this.board[row].length; col++) {
                if (this.board[row][col] === pieceToFind) {
                    return Square.at(row, col);
                }
            }
        }
        throw new Error('The supplied piece is not on the board');
    }

    inBoundary(square) {
        return (square.row >= 0 && square.row < GameSettings.BOARD_SIZE &&
            square.col >= 0 && square.col < GameSettings.BOARD_SIZE);
    }

    isNewSquareBlocked(square, player = "both") {
        if (this.getPiece(square) === undefined) {
            return false;
        }

        if (player === "both") {
            return true;
        }

        return this.getPiece(square).player === player;
    }

    isPathBlocked(currentSquare, newSquare, moveType) {
        if (moveType === MoveType.LATERAL) {
            let direction;
            let fixed;
            if (currentSquare.row !== newSquare.row) {
                direction = "row";
                fixed = currentSquare.col;

            } else {
                direction = "col";
                fixed = currentSquare.row;

            }

            return this.isLateralPathBlocked(currentSquare.row, newSquare.row, fixed, direction);

        } else if (moveType === MoveType.DIAGONAL) {

        }

    }

    isLateralPathBlocked(start, end, fixed, direction) {
        if (direction === "row") {

            if (start < end) {
                for (let i = start + 1; i < end; i++) {
                    if (this.board[i][fixed] !== undefined) {
                        return true;
                    }
                }
            } else {
                for (let i = start - 1; i > end; i--) {
                    if (this.board[i][fixed] !== undefined) {
                        return true;
                    }
                }
            }

        } else if (direction === "col") {

        }
    }

    movePiece(fromSquare, toSquare) {
        const movingPiece = this.getPiece(fromSquare);
        if (movingPiece && movingPiece.player === this.currentPlayer) { // "!!" ???
            this.setPiece(toSquare, movingPiece);
            this.setPiece(fromSquare, undefined);
            this.currentPlayer = (this.currentPlayer === Player.WHITE ? Player.BLACK : Player.WHITE);
        }
    }
}
