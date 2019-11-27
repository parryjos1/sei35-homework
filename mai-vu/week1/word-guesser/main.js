// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

//     Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
//     Write a function called guessLetter that will:
//     Take one argument, the guessed letter.
//     Iterate through the word letters and see if the guessed letter is in there.
//     If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
//     When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
//     It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
//     Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

let wordLetters = ["F", "U", "L", "L", "S", "T", "A", "C", "K"];
let guessedLetters = ["_", "_", "_", "_", "_", "_", "_", "_", "_"];
let rewardAmount = 0; //moving it globally fixed it

const guessLetter = function(letter) {
  let correctGuess = false;
  let guessMore = false;
  // let rewardAmount = 0;

  for (var i = 0; i < wordLetters.length; i++) {
    if (wordLetters[i] == letter) {
      guessedLetters[i] = letter;
      correctGuess = true;
      // rewardAmount + 50;
    }

    if (guessedLetters[i] == "_") {
      guessMore = true;
    }
  }

  if (correctGuess) {
    console.log(`Congrats, you found a letter!`);
    console.log(guessedLetters.join(""));
    rewardAmount = rewardAmount + 50;
    console.log(`${rewardAmount} points`);

    if (!guessMore) {
      console.log(`YOU WIN! GOOD JOB!`);
      rewardAmount = rewardAmount + 100;
      console.log(`${rewardAmount} points`);
    }
  } else {
    console.log(`Wrong letter, try again`);
    rewardAmount = rewardAmount - 25;
    console.log(`${rewardAmount} points`);
  }
};

guessLetter("S");
guessLetter("F");
guessLetter("E");
guessLetter("U");
guessLetter("W");
guessLetter("T");
guessLetter("L");
guessLetter("A");
guessLetter("K");
