let secretWord = [];
let guessedLetters = [];
let trackLetters = [];
const randomWords = ['reward', 'wheel', 'hangman', 'material', 'banana', 'FOX'];
let reward = 0;
let state = 0;


const getRandomWord = function() {
  return randomWords[Math.floor(Math.random()*randomWords.length)];
}

const setWord = function(word) {
  word = word.toLowerCase();
  secretWord = word.split('');
  guessedLetters = secretWord.map(letter => '_');
};

const setReward = function(status, counter) {
  if (status) {
    reward += counter * Math.floor(Math.random()*3 + 1)*10;
  } else {
    reward -= (reward > 0) ? 10 : 0;
  }
}

const trackingLetters = function(guess) {
  if (trackLetters.includes(guess)) {
    return true;
  } else {
    trackLetters.push(guess);
    return false;
  }
};


const guessLetter = function(guess) {
  guess = guess.toLowerCase();
  if (trackingLetters(guess)) {
    console.log("You've already guessed that letter.");
    return;
  }
  if (secretWord.includes(guess)) {
    let counter = 0;
    for(let i = 0; i < secretWord.length; i++) {
      if (secretWord[i] === guess) {
        guessedLetters[i] = guess;
        counter++;
      }
    }
    setReward(true, counter);
    state--;
    console.log(`Congratulation! You found a letter. (hangman status: ${state}/6)`);
  } else {
      setReward(false);
      state++;
      console.log(`Sorry, try an other guess. (hangman status: ${state}/6)`);
  }
  console.log(guessedLetters);
};


setWord(getRandomWord());
console.log(guessedLetters);


while(guessedLetters.includes('_')) {
  const letter = prompt('Guess a letter');
  letter.length === 1 ? guessLetter(letter) : alert('only single letter');
  if (state === 6) {
    break;
  }
}

if (state === 6) {
  console.log(`
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========
Game Over`);
} else {
  console.log(`YOU WON!!! Your reward: ${reward}$.`);
}
