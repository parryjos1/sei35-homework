//html

const box = document.querySelectorAll('.box');
box.forEach(function(check){
  check.addEventListener('click', takeTurn);
});

//back button
let back = document.querySelector('.back');
back.addEventListener('click', function() {
    window.location = './index.html';
});

//reset button
let reset = document.querySelector('.reset');
reset.addEventListener('click', function() {
    document.querySelector('.currentTurn label').style.display = 'inline-block';
    document.querySelector('#turn').style.display = 'inline-block';
    tictactoe.initialize();
});

//close button
let close = document.querySelector('.close');
close.addEventListener('click', function() {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.close').style.display = 'none';
});

//data object
const tictactoe = {
    playerWins: 0,
    computerWins: 0,
    playerSymbol: '',
    computerSymbol: '',
    entryArray: [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ],
    winningCombos: [
        [0,1,2],
        [0,3,6],
        [3,4,5],
        [6,7,8],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ],
    currentTurn: '',
    count: 0,
    gridFull: function() {
        if(this.count === 9) {
            return true;
        } else {
            return false;
        }
    },
    initialize: function() {
        //initialize game

        //initialise array
        for(let x = 0; x < this.entryArray.length; x++) {
            this.entryArray[x] = '';
        }

        //get wins
        let playerWins = document.querySelector('.youWin');
        let computerWins = document.querySelector('.computerWins');
        playerWins.innerText = `You: ${this.playerWins}`;
        computerWins.innerText = `Mr. Robot: ${this.computerWins}`;

        //reset count
        this.count = 0;

        //random roll to see who goes first
      
        if(Math.round(Math.random()) === 1) {
            //you go first
            this.playerSymbol = 'O';
            this.computerSymbol = 'X';
            this.currentTurn = 'You';
        } else {
            //computer goes first
            this.playerSymbol = 'X';
            this.computerSymbol = 'O';
            this.currentTurn = 'Mr. Robot';
        }

        //reset turn display
        document.querySelector('#turn').textContent = this.currentTurn;

        //reset visual grid
        let visualGrid = document.querySelectorAll('.box');
        for(let x = 0; x < this.entryArray.length; x++) {
            visualGrid[x].classList.remove('cross-bg');
            visualGrid[x].classList.remove('nought-bg');
            this.entryArray[x] = '';
        }

        //visualGrid.classList.remove('cross-bg');
        //visualGrid.classList.remove('nought-bg');


        //reset endgame display
        this.endgame = false;
        document.querySelector('.overlay').style.display = 'none';
        document.querySelector('#endgame').style.display = "none";
        document.querySelector('.reset').style.display = "none";
        

        if(this.currentTurn != 'You') {
            //computerTakeTurn();
            smartComputer();
        }

        // // $().trigger('click');
        // document.querySelectorAll('.box')[3].click();
        // document.querySelectorAll('.box')[4].click();
        // console.log('------------');

        // document.querySelectorAll('.box')[2].click();

    },
    updateTurn: function() {
        
        if(this.currentTurn === 'You') {
            this.currentTurn = 'Mr. Robot';
        } else {
            this.currentTurn = 'You';
        }
        document.querySelector('#turn').textContent = this.currentTurn;
    },
    isDraw: function(board) {
        for(let x = 0; x < board.length; x++) {
            if(board[x] === '') {
                return false; // we found an empty cell, so it can't be a draw
            }
        }
        return true;
    },
    isWin: function(board) {
        let result = {
            found: false,
            symbol: '',
            winner: ''
        };
        for(let x = 0; x < this.winningCombos.length; x++) {
            if((board[this.winningCombos[x][0]] === board[this.winningCombos[x][1]]) && (board[this.winningCombos[x][1]] === board[this.winningCombos[x][2]]) && (board[this.winningCombos[x][0]] != '')) {
                result.found = true;
                result.symbol = board[this.winningCombos[x][0]];
                if(result.symbol === this.computerSymbol) {
                    result.winner = 'computer';
                } else {
                    result.winner = 'human';
                }
                break;
            } 
        }
        return result;
    },
    checkWin: function(board) {
        for(let x = 0; x < this.winningCombos.length; x++) {
            if((board[this.winningCombos[x][0]] === board[this.winningCombos[x][1]]) && (board[this.winningCombos[x][1]] === board[this.winningCombos[x][2]]) && (board[this.winningCombos[x][0]] != '')) {
                document.querySelector('.currentTurn label').style.display = 'none';
                document.querySelector('#turn').style.display = 'none';
                document.querySelector('.overlay').style.display = 'block';
                document.querySelector('#endgame').style.display = "block";
                document.querySelector('.reset').style.display = "block";
                document.querySelector('#endgame span').innerText = `Winner: ${this.currentTurn}`;
                this.endgame = true;
                if(this.currentTurn === 'You') {
                    this.playerWins++;
                    let playerWins = document.querySelector('.youWin');
                    playerWins.innerText = `You: ${this.playerWins}`;
                } else {
                    this.computerWins++;
                    let computerWins = document.querySelector('.computerWins');
                    computerWins.innerText = `Mr. Robot: ${this.computerWins}`;
                }
            }
        }

        //check if grid is full
        if(this.endgame === false && this.gridFull() == true) {
            this.endgame = true;
            document.querySelector('.overlay').style.display = 'block';
            document.querySelector('#endgame').style.display = "block";
            document.querySelector('.reset').style.display = "block";
            document.querySelector('#endgame span').innerText = "Draw";
        }
    },
    endgame: false
};

//functions

//wait a bit
function sleep(ms) {
    return new Promise(resolve=>setTimeout(resolve, ms));
}

function getEmptyCells(board) {
    let emptyIndexes = [];
    //loop through all empty cells
    for(let x = 0; x < board.length; x++) {
        //get available moves
        if(board[x] === '') {
            emptyIndexes.push(x);
        }
    }
    return emptyIndexes;
}

function minimax(board, player, depth=0) {

    //debugger;
    
    let child = [...board];

    //check for empty spots
    let availableSpots = getEmptyCells(child);

    //debugger;

    //check for terminal state
    let temp = tictactoe.isWin(child);

    const scoreBase = 10;
    //player is computer
    if(temp.winner === 'computer') {
        //computer wins
        return {score: scoreBase - depth};

    } else if(temp.winner === 'human') {
        //human wins 
        return {score: -scoreBase - depth};

    } else if(availableSpots.length === 0) {
        //draw
        return { score: 0 };
    }
    
    //collect scores from each empty spot
    let moves = [];
    //console.log(availableSpots);
    for(let x = 0; x < availableSpots.length; x++) {
        // const boardCopy = [...child];
        let move = {};
        move.index = availableSpots[x];
        if(player === "Mr. Robot") {
        //setting empty spot on the board to current player
            child[move.index] = tictactoe.computerSymbol;
            let result = minimax(child, "You", depth+1);
            move.score = result.score;
        } else {
            child[move.index] = tictactoe.playerSymbol;
            //console.log('next human move:', availableSpots[x], child);
            let result = minimax(child, "Mr. Robot", depth+1);
            move.score = result.score;
        }
        child[move.index] = ''; // reset after testing a move

        //console.log(`Depth: ${depth}, board: ${boardCopy}`);

        moves.push(move); 
    }

    let bestMove; //minimax always calculates the best move

    //choose the highest score when AI is playing and lowest score when human is playing
    if(player === 'Mr. Robot') {
        let bestScore = -Infinity; //set to really low when AI playing
        for(let x = 0; x < moves.length; x++) {
            //looping through the moves array
            if(moves[x].score > bestScore) {
                bestScore = moves[x].score;
                bestMove = x;
            }
        }
    }
    else {
        let bestScore = Infinity;
        for(let x = 0; x < moves.length; x++) {
            if(moves[x].score < bestScore) {
                //look for lowest score
                bestScore = moves[x].score;
                bestMove = x;
            }
        }
    }

    if(tictactoe.count > 3){
        console.log('%cmoves', 'font-size: 18pt', moves);
    }
    return moves[bestMove];
}

//intelligent computer's turn
// async 
async function smartComputer() {


    if(tictactoe.endgame === true) {
        //do nothing
    } else {
        await sleep(2000);

        //begin turn

        // //get the best move index
        let bestMove = minimax(tictactoe.entryArray, "Mr. Robot");

        //make the move
        tictactoe.entryArray[bestMove.index] = tictactoe.computerSymbol;
        // box[bestMove.index].innerText = tictactoe.computerSymbol;
        if(tictactoe.computerSymbol === 'O')    
            box[bestMove.index].classList.toggle("nought-bg");
        else {
            box[bestMove.index].classList.toggle("cross-bg");
        }
        tictactoe.count++;

        console.log(bestMove);

        //check for a win and update
        tictactoe.checkWin(tictactoe.entryArray);
        tictactoe.updateTurn();

    }
}


//computers turn
// async 
async function computerTakeTurn() {
    //computers turn
    if(tictactoe.endgame === true) {
        //do nothing
    } else {
        //computer makes a move by picking a random empty spot
        //get all the remaining empty spots
        await sleep(2000);
        let listOfIndexes = [];
        for(let x = 0; x < tictactoe.entryArray.length; x++) {
            if(tictactoe.entryArray[x] === '') {
                listOfIndexes.push(x);
            }
        }
        let randomIndex = Math.floor(Math.random() * (listOfIndexes.length));
        randomIndex = randomIndex.toFixed(0);
        randomIndex = listOfIndexes[randomIndex];
        tictactoe.entryArray[randomIndex] = tictactoe.computerSymbol;
        if(tictactoe.computerSymbol === 'O') {
            box[randomIndex].classList.toggle("nought-bg");
        } else {
            box[bestMove.index].classList.toggle("cross-bg");
        }
        // box[randomIndex].innerText = tictactoe.computerSymbol;

        tictactoe.count++;
        tictactoe.checkWin(tictactoe.entryArray);
        tictactoe.updateTurn();
    }
}

//player turn
function takeTurn(event) {
    if(tictactoe.currentTurn === 'Mr. Robot') {
        document.querySelector('.overlay').style.display = 'block';
        document.querySelector('#endgame').style.display = 'block';
        document.querySelector('.close').style.display = 'block';
        document.querySelector('#endgame span').innerText = 'Not your turn...';
        document.querySelector('.reset').style.display = 'none';
    } else {
           //your turn
        if(tictactoe.endgame === true) {
            document.querySelector('#endgame span').innerText = "This game has closed. Press Reset To Continue";
        } else {
            const index = Array.from(box).indexOf(event.target);
            if(tictactoe.entryArray[index] === '') {
                //take turn
                tictactoe.entryArray[index] = tictactoe.playerSymbol;
                if(tictactoe.playerSymbol === 'O') {
                    box[index].classList.add("nought-bg");
                } else {
                    box[index].classList.add("cross-bg");
                }
                // box[index].innerText = tictactoe.playerSymbol;
                tictactoe.count++;
                tictactoe.checkWin(tictactoe.entryArray);
                tictactoe.updateTurn();

                //computerTakeTurn();
                smartComputer();
            } else {
                document.querySelector('.overlay').style.display = 'block';
                document.querySelector('#endgame').style.display = 'block';
                document.querySelector('.close').style.display = 'block';
                document.querySelector('#endgame span').innerText = 'This box is already taken.';
                document.querySelector('.reset').style.display = 'none';
            }
        }   
    }
}

//main program
tictactoe.initialize();
