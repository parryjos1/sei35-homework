console.log("Hello World!!!");


const wordSet = [ 'F', 'O', 'X']; // holds letters of word
const correctLetters = [ '_', '_', '_']; // for correct guesses
const allLetters = [];
const lives = [1, 2, 3, 4, 5, 6];
let currentMatches = [] ;



const progressUpdate = function ( currentMatches ) {
  if (currentMatches.length === 1) {
    console.log('2 more letters to get');
  } else if (currentMatches.length === 2) {
    console.log('1 more letters to get');
  } else if (currentMatches.length === 3) {
    console.log('YOU WIN');
  }
}



const guessLetter = function ( letter ) {   // function that takes one argument
    // console.log(`${letter}`);             // function is working, takes argument and logging

    // letterCheck( letter );
  if (allLetters.includes( letter ) === true) {   //not case sensitive
      return ('You tried this BUCKO');
  } else if (lives.length === 1) {
      return('GAME OVER BRO');
  } else {
    allLetters.push(letter);  // tracks letter input

      const attempt = letter;           // pretty sure that is saving the attempt as a variable

      for (let i = 0; i < wordSet.length; i++) {
        // console.log(attempt);         // loop is working, logging variable 3 times every letter
        const match = wordSet.indexOf( attempt );  //Searching wordSet array for a match to attempt
        // console.log( match );                    //Working, storing the index number of match


        if (match === 0) {                 // working, returning match and updating string
          console.log('Match');
          currentMatches.push('F'); // adds one to value of currentMatches when match
          progressUpdate(currentMatches); // calls function progress function using current match value as input
          return correctLetters[0] = attempt // updates array with correct guess
        } else if (match === 1) {
          console.log('Match');
          currentMatches.push('O');
          progressUpdate(currentMatches);
          return (`${correctLetters[1] = attempt}`);
        } else if (match === 2) {
          console.log('Match');
          currentMatches.push('X');
          progressUpdate(currentMatches);
          return (`${correctLetters[2] = attempt}`);
        } else {
          lives.pop( letter );            //takes life off array
          return ('No Dice! Try Again');
        }

      } // for loop bracket

  } // allLetters and lives bracket

} // guessLetter function bracket
