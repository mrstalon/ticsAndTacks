class TicTacToe {
    constructor() {
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];

        this.whichPlayerTurn = 'x';
        this.winner = null;
    }


    getCurrentPlayerSymbol() {
        return this.whichPlayerTurn;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.field[rowIndex][columnIndex]) {
            this.field[rowIndex][columnIndex] = this.whichPlayerTurn;

            if (this.weatherSomebodyWin(this.whichPlayerTurn)) {
                this.winner = this.whichPlayerTurn;
            }

            if (this.whichPlayerTurn === "x") {
                this.whichPlayerTurn = "o";
            } else {
                this.whichPlayerTurn = "x";
            }
        }
    }


    isFinished() {

        if (this.winner === null) {
            return this.isDraw();
        } else {
            return true;
        }

    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        if (this.field[0][0] !== null
            && this.field[0][1] !== null
            && this.field[0][2] !== null
            && this.field[1][0] !== null
            && this.field[1][1] !== null
            && this.field[1][2] !== null
            && this.field[2][0] !== null
            && this.field[2][1] !== null
            && this.field[2][2] !== null) {
            return true;
        } else {
            return false;
        }

    }

    isDraw() {
        if (this.winner === null) {

            return this.noMoreTurns();
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }

    weatherSomebodyWin(symbol) {
        if (this.field[0][0] === symbol && this.field[0][1] === symbol && this.field[0][2] === symbol) {
            return true;
        } else if (this.field[1][0] === symbol && this.field[1][1] === symbol && this.field[1][2] === symbol) {
            return true;
        } else if (this.field[2][0] === symbol && this.field[2][1] === symbol && this.field[2][2] === symbol) {
            return true;
        } else if (this.field[0][0] === symbol && this.field[1][0] === symbol && this.field[2][0] === symbol) {
            return true;
        } else if (this.field[0][1] === symbol && this.field[1][1] === symbol && this.field[2][1] === symbol) {
            return true;
        } else if (this.field[0][2] === symbol && this.field[1][2] === symbol && this.field[2][2] === symbol) {
            return true;
        } else if (this.field[0][0] === symbol && this.field[1][1] === symbol && this.field[2][2] === symbol) {
            return true;
        } else if (this.field[0][2] === symbol && this.field[1][1] === symbol && this.field[2][0] === symbol) {
            return true;
        }
        else {
            return false;
        }
    }

}

module.exports = TicTacToe;

