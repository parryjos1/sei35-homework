//create a global array to hold letters which add up to a secret word.
const secretWord = ["G", "E" ,"N", "E", "R", "A" ,"L"];

//create global array two which will hold guessed letters. The guesses letters for now will each be a “_”. Must be the same number of characters to the secret word.
const guessedLetters = ["_", "_", "_", "_", "_", "_", "_"];


let correctGuesses = 0;
//write a function called guess letter that takes an argument of a guessed letter.

let guess = function (letter) {
  // set a variable to false
  let letterChecker = false;
  letter = letter.toUpperCase();
  // STEP 1
  // look through every letter of secretWord and see if the `letter (we passed in ) === `guessedLetters[i]
  for (var i = 0; i < secretWord.length; i++) {

      // for each iteration of the loop
      // see if we have a match
        if (letter === secretWord[i]) {
          // If we do have a match do this code
          console.log(`You chose ${letter}`);
          console.log(`Congratulations, you found a match at position ${i+1}`);
          guessedLetters[i] = letter;
          console.log(guessedLetters.join(' '));
          // final step, change the value of the letterChecker variable to 'true'
          letterChecker = true;
          correctGuesses ++
        } // end of if statement

      } // end of for loop

      // STEP 2
      // See if letterChecker === false
      // If it === true run the code
      if (letterChecker === false) {
        console.log('The letter is not present, try again');
      }
      if (correctGuesses === secretWord.length) {
        console.log("Congratulations you win");
      }
    };


// this then loops through each item in the secret word array to check if it is present.

//   for (i = 0; i > secretWord.length; i ++) {
//
//     console.log(i)
//     // console.log(secretWord[i])
//
//     // if (letter === secretWord[i]) {
//     //   console.log('it matches!!!')
//     // }
//
//
//   //     if (letter === secretWord[i]) {
//   //     guessedLetters[i] = letter;
//   //     console.log('Congratulations you found a match');
//   //     console.log (letter);
//   //     // guessedLetters.show("");
//   //     console.log(guessedLetters);
//   //   } else {
//   //     console.log('The letter is not present, try again');
//   //   }
//

// for (var i = 0; i < secretWord.length; i++) {
//   console.log(secretWord[i]);
// }

console.log(guess("S"));
console.log(guess("g"));
console.log(guess("E"));

// console.log(secretWord);
// console.log(guessedLetters);


// for (var key in movie) {
// 	console.log(‘key:’, key );
//         console.log( ‘value:’, movie [ key ] );
//         console.log(‘——————‘);
// }
