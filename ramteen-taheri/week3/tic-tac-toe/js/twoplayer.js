//store the turns
const tictactoe = {
    playerOneName: '',
    playerTwoName: '',
    playerOneWins: 0,
    playerTwoWins: 0,
    entryArray: [
        {contents: ''},
        {contents: ''},
        {contents: ''},
        {contents: ''},
        {contents: ''},
        {contents: ''},
        {contents: ''},
        {contents: ''},
        {contents: ''}
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
        if(this.count == 9) {
            return true;
        } else {
            return false;
        }
    },
    initialize: function() {

        //get player names
        let paramString = window.location.search;
        paramString = paramString.substring(1);
        let paramSplit = paramString.split('&');
        let playerOneSplit = paramSplit[0].split('=');
        let playerTwoSplit = paramSplit[1].split('=');
        this.playerOneName = playerOneSplit[1];
        this.playerTwoName = playerTwoSplit[1];


        //any player wins
        let p1Wins = document.querySelector('.playerOneWins');
        let p2Wins = document.querySelector('.playerTwoWins');
        p1Wins.innerText = `${this.playerOneName}: ${this.playerOneWins}`;
        p2Wins.innerText = `${this.playerTwoName}: ${this.playerTwoWins}`;
        
        //reset count
        this.count = 0;

        //reset visual grid
        let visualGrid = document.querySelectorAll('.box');
        for(let x = 0; x < this.entryArray.length; x++) {
            visualGrid[x].classList.remove('cross-bg');
            visualGrid[x].classList.remove('nought-bg');
            this.entryArray[x].contents = '';
        }

        //reset endgame display
        this.endgame = false;
        document.querySelector('.overlay').style.display = 'none';
        document.querySelector('#endgame').style.display = "none";
        document.querySelector('.reset').style.display = "none";
        

        //player 1 goes first
        this.currentTurn = this.playerOneName;

        //reset turn display
        document.querySelector('#turn').textContent = this.currentTurn;
        //reset grid
        for(let x = 0; x < this.entryArray.length; x++) {
            visualGrid[x].innerText = '';
            this.entryArray[x].contents = '';
        }
        this.endgame = false;
        document.querySelector('#endgame').style.display = "none";
        document.querySelector('.reset').style.display = "none";

    },
    updateTurn: function() {
        if(this.currentTurn === this.playerOneName) {
            this.currentTurn = this.playerTwoName;
        }
        else {
            this.currentTurn = this.playerOneName;
        }
        document.querySelector('#turn').textContent = this.currentTurn;
    },
    checkWin: function() {
        //check for endgames (straights and diagonals)
        for(let x = 0; x < this.winningCombos.length; x++) {
            if((this.entryArray[this.winningCombos[x][0]].contents === this.entryArray[this.winningCombos[x][1]].contents) && (this.entryArray[this.winningCombos[x][1]].contents === this.entryArray[this.winningCombos[x][2]].contents) && (this.entryArray[this.winningCombos[x][0]].contents != '')) {
                
                document.querySelector('.overlay').style.display = 'block';
                document.querySelector('#endgame').style.display = "block";
                document.querySelector('.reset').style.display = "block";
                document.querySelector('#endgame span').innerText = `Winner: ${this.currentTurn}`;

                document.querySelector('.currentTurn label').style.display = 'none';
                document.querySelector('#turn').style.display = 'none';
                tictactoe.endgame = true;
                if(this.currentTurn === this.playerOneName) {
                    this.playerOneWins++;
                    let p1Wins = document.querySelector('.playerOneWins');
                    p1Wins.innerText = `${this.playerOneName}: ${this.playerOneWins}`;
                } else if(this.currentTurn === this.playerTwoName) {
                    this.playerTwoWins++;
                    let p2Wins = document.querySelector('.playerTwoWins');
                    p2Wins.innerText = `${this.playerTwoName}: ${this.playerTwoWins}`;
                }
            }
        }

        //check if grid is full
        if(this.endgame == false && this.gridFull() == true) {
            this.endgame = true;
            document.querySelector('.overlay').style.display = 'block';
            document.querySelector('#endgame').style.display = "block";
            document.querySelector('.reset').style.display = "block";
            document.querySelector('#endgame span').innerText = "Draw";
        }
    },
    endgame: false
}

tictactoe.initialize();

//events
var box = document.querySelectorAll('.box');
box.forEach(function(check){
  check.addEventListener('click', takeTurn);
});
function takeTurn(event){
  if(tictactoe.endgame === true) {
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('#endgame').style.display = "block";
    document.querySelector('.reset').style.display = "block";
    document.querySelector('#endgame span').innerText = "This game has closed. Press Reset To Continue";
  } else {
    const index = Array.from(box).indexOf(event.target);
    if(tictactoe.entryArray[index].contents == '') {
        //take turn
        tictactoe.entryArray[index].contents = tictactoe.currentTurn;
        if(tictactoe.currentTurn === tictactoe.playerOneName) {
            box[index].classList.add("nought-bg");
        } else {
            box[index].classList.add("cross-bg");
        }
        tictactoe.count++;
        tictactoe.checkWin();
        tictactoe.updateTurn();
    } else {
        document.querySelector('.overlay').style.display = 'block';
        document.querySelector('#endgame').style.display = 'block';
        document.querySelector('.close').style.display = 'block';
        document.querySelector('#endgame span').innerText = 'This box is already taken.';
        document.querySelector('.reset').style.display = 'none';
    }
  }
}
//reset button
let reset = document.querySelector('.reset');
reset.addEventListener('click', function() {
    document.querySelector('.currentTurn label').style.display = 'inline-block';
    document.querySelector('#turn').style.display = 'inline-block';
    tictactoe.initialize();
});
//back button
let back = document.querySelector('.back');
back.addEventListener('click', function() {
    window.location = './index.html';
});

//close button
let close = document.querySelector('.close');
close.addEventListener('click', function() {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.close').style.display = 'none';
});