// Homework: The Word Guesser

// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.



const word = [ 'X', 'O', 'X' ];

const guesses = [ ];

let display = [ '_', '_', '_' ];
let gameDisplay = `${display[0]} ${display[1]} ${display[2]}`


const guessedLetter = function( guess ) {

  guesses.unshift(guess);
  let gamePrompt = '';

  for (var i = 0; i < word.length; i++) {

    if (guess === word[i].toString()) {

    gamePrompt = `You guessed the letter ${guess} correctly!`;
    display[i] = guess;

    }

    if (word.toString() === display.toString()) {
        // Luke - to create a condition that doesn't loop or take too much time you can check that the found number is the same as the number of letters in the word - ie: word.length = 3, found words = 3 then solved!
    gamePrompt = `${gamePrompt} You have guessed the word ${word[0]}${word[1]}${word[2]}!`;
    break;

    }

    if ((guess !== word[i].toString()) && (gamePrompt == ''))

    gamePrompt = `You guessed the letter ${guess} incorrectly.`;

    };
// another way to do this is to make the gamePrompt be a true or false result instead of a string, this would help if there is a if statement that has an empty/no string needed result

  console.log(gamePrompt);
  console.log(display.toString());

};

console.log('F');
console.log(guessedLetter('F'));
console.log('B');
console.log(guessedLetter('B'));
console.log('O');
console.log(guessedLetter('O'));
console.log('R');
console.log(guessedLetter('R'));
console.log('X');
console.log(guessedLetter('X'));
