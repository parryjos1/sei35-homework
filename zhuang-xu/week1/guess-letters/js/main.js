const secretWord = 'CANYOUGUESS'.split('');
const guessedLetters = secretWord.map((char) => '_');

console.log(secretWord);
console.log(guessedLetters);

const allFound = function() {
  return !guessedLetters.includes('_');
};

let reward = 0;

const randomReward = function() {
  return Math.floor(Math.random() * 1000);
};

const guessLetter = function(letter) {
  if (guessedLetters.includes(letter)) {
    console.log('You\'ve guessed the same letter before.');
    return;
  }

  if (allFound()) {
    console.log('Congratulations! You found the whole word!');
    return;
  }

  const indices = secretWord.reduce((accu, char, index) => {
    if (char === letter) {
      accu.push(index);
    }
    return accu;
  }, []);
  if (indices.length === 0) {
    reward -= randomReward();
    console.log('Sorry, try again.');
  } else {
    indices.forEach((i) => {
      guessedLetters[i] = letter;
      reward += randomReward();
    });
    console.log(`User found a letter: ${guessedLetters.join(' ')}`);
    if (allFound()) {
      console.log(
          `Congratulations! You found the whole word, and earned $${reward}!`);
      return;
    }
  }
};

guessLetter('U');
guessLetter('C');
guessLetter('X');
guessLetter('U');
guessLetter('A');
guessLetter('N');
guessLetter('Y');
guessLetter('O');
guessLetter('G');
guessLetter('S');
guessLetter('E');
