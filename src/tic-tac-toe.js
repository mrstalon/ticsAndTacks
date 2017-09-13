class TicTacToe {
    constructor() {
        this.field = initializeGameField();
        this.whichPlayerTurn = 'x';
        this.winner = null;
    }


    getCurrentPlayerSymbol() {
        if (this.whichPlayerTurn === "x") {
            return 'x';
        } else if (this.whichPlayerTurn === "o") {
            return 'o';
        }
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.whichPlayerTurn === "x") {
            this.field[rowIndex][columnIndex] = "x";
            this.whichPlayerTurn = "o";
        } else if (this.whichPlayerTurn === "o") {
            this.field[rowIndex][columnIndex] = "o";
            this.whichPlayerTurn = "x";
        }
    }

    isFinished() {

        if (this.field[0][0] === 'x' && this.field[0][1] === 'x' && this.field[0][2] === "x") {
            this.winner = 'x';
            return 'x';
        } else if (this.field[1][0] === 'x' && this.field[1][1] === 'x' && this.field[1][2] === "x") {
            this.winner = 'x';
            return 'x';
        } else if (this.field[2][0] === 'x' && this.field[2][1] === 'x' && this.field[2][2] === "x") {
            this.winner = 'x';
            return 'x';
        } else if (this.field[0][0] === 'x' && this.field[1][0] === 'x' && this.field[2][0] === "x") {
            this.winner = 'x';
            return 'x';
        } else if (this.field[0][1] === 'x' && this.field[1][1] === 'x' && this.field[2][1] === "x") {
            this.winner = 'x';
            return 'x';
        } else if (this.field[0][2] === 'x' && this.field[1][2] === 'x' && this.field[2][2] === "x") {
            this.winner = 'x';
            return 'x';
        } else if (this.field[0][0] === 'x' && this.field[1][1] === 'x' && this.field[2][2] === "x") {
            this.winner = 'x';
            return 'x';
        }else if(this.field[0][2] === 'x' && this.field[1][1] === 'x' && this.field[2][0] === "x"){
            return 'x';
        }else if (this.field[0][0] === 'o' && this.field[0][1] === 'o' && this.field[0][2] === "o") {
            this.winner = 'o';
            return 'o';
        } else if (this.field[1][0] === 'o' && this.field[1][1] === 'o' && this.field[1][2] === "o") {
            this.winner = 'o';
            return 'o';
        } else if (this.field[2][0] === 'o' && this.field[2][1] === 'o' && this.field[2][2] === "o") {
            this.winner = 'o';
            return 'o';
        } else if (this.field[0][0] === 'o' && this.field[1][0] === 'o' && this.field[2][0] === "o") {
            this.winner = 'o';
            return 'o';
        } else if (this.field[0][1] === 'o' && this.field[1][1] === 'o' && this.field[2][1] === "o") {
            this.winner = 'o';
            return 'o';
        } else if (this.field[0][2] === 'o' && this.field[1][2] === 'o' && this.field[2][2] === "o") {
            this.winner = 'o';
            return 'o';
        } else if (this.field[0][0] === 'o' && this.field[1][1] === 'o' && this.field[2][2] === "o") {
            this.winner = 'o';
            return 'o';
        }else if(this.field[0][2] === 'o' && this.field[1][1] === 'o' && this.field[2][0] === "o"){
            return 'o';
        }
        else {
            return null;
        }

        if (this.winner === null) {
            var isGameEnded = true;
            for (var i = 0; i++; i < 3) {
                for (var r = 0; r++; r < 3) {
                    if (this.field[i][r] === null) {
                        isGameEnded = false;
                    }
                }
            }
            return isGameEnded;
        } else if (this.winner === 'x' || this.winner === 'y') {
            isGameEnded = true;
            return isGameEnded;
        }

    }

    getWinner() {
        if (this.field[0][0] === 'x' && this.field[0][1] === 'x' && this.field[0][2] === "x") {
            this.winner = 'x';
            return 'x';
        } else if (this.field[1][0] === 'x' && this.field[1][1] === 'x' && this.field[1][2] === "x") {
            this.winner = 'x';
            return 'x';
        } else if (this.field[2][0] === 'x' && this.field[2][1] === 'x' && this.field[2][2] === "x") {
            this.winner = 'x';
            return 'x';
        } else if (this.field[0][0] === 'x' && this.field[1][0] === 'x' && this.field[2][0] === "x") {
            this.winner = 'x';
            return 'x';
        } else if (this.field[0][1] === 'x' && this.field[1][1] === 'x' && this.field[2][1] === "x") {
            this.winner = 'x';
            return 'x';
        } else if (this.field[0][2] === 'x' && this.field[1][2] === 'x' && this.field[2][2] === "x") {
            this.winner = 'x';
            return 'x';
        } else if (this.field[0][0] === 'x' && this.field[1][1] === 'x' && this.field[2][2] === "x") {
            this.winner = 'x';
            return 'x';
        }else if(this.field[0][2] === 'x' && this.field[1][1] === 'x' && this.field[2][0] === "x"){
            return 'x';
        }else if (this.field[0][0] === 'o' && this.field[0][1] === 'o' && this.field[0][2] === "o") {
            this.winner = 'o';
            return 'o';
        } else if (this.field[1][0] === 'o' && this.field[1][1] === 'o' && this.field[1][2] === "o") {
            this.winner = 'o';
            return 'o';
        } else if (this.field[2][0] === 'o' && this.field[2][1] === 'o' && this.field[2][2] === "o") {
            this.winner = 'o';
            return 'o';
        } else if (this.field[0][0] === 'o' && this.field[1][0] === 'o' && this.field[2][0] === "o") {
            this.winner = 'o';
            return 'o';
        } else if (this.field[0][1] === 'o' && this.field[1][1] === 'o' && this.field[2][1] === "o") {
            this.winner = 'o';
            return 'o';
        } else if (this.field[0][2] === 'o' && this.field[1][2] === 'o' && this.field[2][2] === "o") {
            this.winner = 'o';
            return 'o';
        } else if (this.field[0][0] === 'o' && this.field[1][1] === 'o' && this.field[2][2] === "o") {
            this.winner = 'o';
            return 'o';
        }else if(this.field[0][2] === 'o' && this.field[1][1] === 'o' && this.field[2][0] === "o"){
            return 'o';
        }
        else {
            return null;
        }
    }

    noMoreTurns() {
        if(this.field[0][1]!== null
            && this.field[0][1]!== null
            && this.field[0][2]!== null
            && this.field[1][0]!== null
            && this.field[1][1]!== null
            && this.field[1][2]!== null
            && this.field[2][0]!== null
            && this.field[2][1]!== null
            && this.field[2][2]!== null){
            return true;
        }else{
            return false;
        }

    }

    isDraw() {
        if(this.winner === null){

            return this.noMoreTurns();
        }else if(this.winner === 'x' || this.winner === 'y'){
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        if(this.field[rowIndex][colIndex] === null){
            return null;
        }else{
            return this.field[rowIndex][colIndex];
        }
    }
}

module.exports = TicTacToe;

function initializeGameField() {


    var field = new Array();

    for (var i = 0; i < 3; i++) {
        field[i] = new Array();
        for (var j = 0; j < 3; j++) {
            field[i][j] = null;
        }
    }
    return field;
}

