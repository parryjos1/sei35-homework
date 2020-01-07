
// Homework: The Word Guesser
//
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
//
// Write a function called guessLetter that will:
//
// Take one argument, the guessed letter.
//
// Iterate through the word letters and see if the guessed letter is in there.
//
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
//
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
//
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.


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

          //join guessedLetters array in to a string and print out.
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

    console.log(guess("S"));
    console.log(guess("G"));
    console.log(guess("E"));
    console.log(guess("N"));
    console.log(guess("R"));
    console.log(guess("A"));
    console.log(guess("L"));
