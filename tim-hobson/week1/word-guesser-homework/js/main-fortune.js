// Bonus: Make it more like Wheel of Fortune:
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.


const word = [ 'F', 'O', 'X' ];

const guesses = [ ];
prizeMoney = 0

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

    gamePrompt = `${gamePrompt} You have guessed the word ${word[0]}${word[1]}${word[2]}!`;
    break;

    }

    if ((guess !== word[i].toString()) && (gamePrompt == ''))

    gamePrompt = `You guessed the letter ${guess} incorrectly.`;

    };


  console.log(gamePrompt);
  console.log(display.toString());

}

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
