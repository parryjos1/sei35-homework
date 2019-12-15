
let secretWord = ['O', 'R', 'A', 'N', 'G', 'E']
let correctLetters = ['_', '_', '_', '_', '_']
let incorectLetters = []
let added = false
let wrongGuess = 0
let reward = 0

// store some variables to remember what happened in the loop
let guessLetter = function (letter) {



  for (var i = 0; i < secretWord.length; i++) {

    if (letter === secretWord[i]) {
      correctLetters.splice(i, 1, letter)
      added = true
      reward =+ 10
      // console.log(added);
      continue
    } else {
      added = false
      // console.log(added);
    };
  };

  if (added === false) {
    incorectLetters.unshift(letter)
    wrongGuess ++
    // alert('Trying again')
  } else {
    console.log('Correct guess');
  }

  if (wrongGuess === 5){

  }

};


guessLetter('L')
guessLetter('Y')
guessLetter('E')
guessLetter('O')
guessLetter('H')
guessLetter('M')
guessLetter('A')
guessLetter('N')
guessLetter('R')
guessLetter('G')

console.log(secretWord);
console.log(correctLetters);
console.log(incorectLetters);
console.log(wrongGuess);

let correctLettersLoop = function (array) {
    return array.join()
};

let ans1 = (correctLettersLoop(correctLetters));
let ans = (correctLettersLoop(secretWord));


let winner = function (arrayOne, arrayTwo) {
  if (arrayOne === arrayTwo) {
    console.log(("Congrats you won"))
  } else  {
     console.log('try again')
   }
};

winner(ans1, ans);
