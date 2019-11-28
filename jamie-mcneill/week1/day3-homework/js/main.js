//create a global array to hold letters which add up to a secret word.
const secretWord = ["G", "E" ,"N", "E", "R", "A" ,"L"];

//create global array two which will hold guessed letters. The guesses letters for now will each be a “_”. Must be the same number of characters to the secret word.
const guessedLetters = ["_", "_", "_", "_", "_", "_", "_"];

//write a function called guess letter that takes an argument of a guessed letter.

let guessLetter = function (guessedLetter) {
// this then loops through each item in the secret word array to check if it is present.

  for (var i = 0; i < secretWord.length; i +=1 ) {
    if (secretWord[i] === guessedLetter) {
    console.log (`congratulations, you found a new letter`);
    }
  }
