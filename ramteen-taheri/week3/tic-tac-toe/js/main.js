//store the turns
const tictactoe = {
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
        this.currentTurn = 'O';
        this.count = 0;
        for(entry in this.entryArray) {
            entry.contents = '';
        }
        //reset turn display
        document.querySelector('#turn').textContent = this.currentTurn;
        //reset grid
        let visualGrid = document.querySelectorAll('.box');
        for(let x = 0; x < this.entryArray.length; x++) {
            visualGrid[x].innerText = '';
            this.entryArray[x].contents = '';
        }
        this.endgame = false;
        document.querySelector('#endgame').style.display = "none";
        document.querySelector('.reset').style.display = "none";

    },
    updateTurn: function() {
        if(this.currentTurn === 'O') {
            this.currentTurn = 'X';
        }
        else {
            this.currentTurn = 'O';
        }
        document.querySelector('#turn').textContent = this.currentTurn;
    },
    checkWin: function() {
        //check for endgames (straights and diagonals)
        for(let x = 0; x < this.winningCombos.length; x++) {
            if((this.entryArray[this.winningCombos[x][0]].contents === this.entryArray[this.winningCombos[x][1]].contents) && (this.entryArray[this.winningCombos[x][1]].contents === this.entryArray[this.winningCombos[x][2]].contents) && (this.entryArray[this.winningCombos[x][0]].contents != '')) {
                alert("winner is: " + this.currentTurn);
                document.querySelector('#endgame').style.display = "block";
                document.querySelector('.reset').style.display = "block";
                document.querySelector('#endgame span').innerText = this.currentTurn;
                tictactoe.endgame = true;
            }
        }

        //check if grid is full
        if(this.endgame == false && this.gridFull() == true) {
            this.endgame = true;
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
})
function takeTurn(event){
  if(tictactoe.endgame === true) {
    alert("This game has closed. Press Reset To Continue");
  } else {
    const index = Array.from(box).indexOf(event.target);
    if(tictactoe.entryArray[index].contents == '') {
        //take turn
        tictactoe.entryArray[index].contents = tictactoe.currentTurn;
        box[index].textContent = tictactoe.currentTurn;
        tictactoe.count++;
        tictactoe.checkWin();
        tictactoe.updateTurn();
    } else {
        alert("This Box is already Taken");
    }
  }
}
//reset button
let reset = document.querySelector('.reset');
reset.addEventListener('click', function() {
    tictactoe.initialize();
});

