
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
      // the i is at the index in which the index is being looped at eg when the loop recognises R at index[1], i === 1 and is giving to the splice and correctLetters is append at the index[1] of the correctLetters array
      correctLetters.splice(i, 1, letter)
      added = true
      //reward += 10
      // console.log(added);
      break

    } else {
      added = false
      // console.log(added);
    }
  }
  if (added === false) {
    incorectLetters.unshift(letter)
    //wrongGuess ++
    // alert('Trying again')
    } else {
    console.log('Correct guess');
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
//console.log(wrongGuess);
//console.log(reward);

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
