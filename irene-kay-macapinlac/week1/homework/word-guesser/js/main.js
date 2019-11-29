// //Homework: The Word Guesser
// //
// // You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
// //
// // Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
//
//
// const inputWord = window.prompt('Enter a word.'); //window will ask u to enter words
// const word = inputWord.toUpperCase().split(''); //create input array

const secretWord = ['F', 'O', 'X', 'X'];
const guessedLetters = ['_', '_', '_', '_'];

let correctGuesses = 0;

const guessLetter = function (letterGuess) {

  letterGuess = letterGuess.toUpperCase();

  console.log(`guessLetter('${letterGuess}')`);

  let found = false;

//1/ iterate through the secret word letterGuess
for(let i = 0; i < secretWord.length; i++) {
  //console.log(secretWord[i]);

  const currentLetter = secretWord[i].toUpperCase();

  //2) 'See if the guessed letter is in there'
if(letterGuess === currentLetter) {
console.log(`Correct guess for ${letterGuess} at position ${i}`);
guessedLetters[i] = letterGuess;
found = true;
correctGuesses++;
  }

}// for

console.log(guessedLetters.join(' '));

//Check whether we actually found any matches during any iteration of the loop
if (found) {
  console.log('You found it!');
} else {
  console.log('No matches.');

  if(correctGuesses === secretWord.length) {
    console.log('Congrats, you guessed it!');
  }
}

}; //guesss letter function

console.log();
