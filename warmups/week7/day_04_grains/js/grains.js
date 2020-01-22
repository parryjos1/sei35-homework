
const grains = {

  squareMax: 64,

  grainsInSquare: function(number) {
    return 2 ** (number - 1);
  },

  grainsOnBoard: function() {

    for (let i = 1; i <= this.squareMax; i++) {
      console.log(`Square ${i}: ${this.grainsInSquare(i)} grains.`);
    }
  },

  totalGrainsOnBoard: function(){
    //imperative programming
    let total = 0;
    for (let i = 1; i <= this.squareMax; i++) {
      total += this.grainsInSquare(i);
    }

    //declarative programming
    // const total = Array(this.squareMax) //generates array with 64Xempty
    //   .fill(0) //filling array with zeros, as .map of empty just gives empty
    //   .map( (elem, i) => this.grainsInSquare(i+1) )
    //   .reduce( (runningTotal, current) => runningTotal + current );

      // console.log(total);
    return `Total grains on board: ${total}.`
  }
}

console.log(grains.grainsInSquare(3)); //4
grains.grainsOnBoard();
console.log(grains.totalGrainsOnBoard());
