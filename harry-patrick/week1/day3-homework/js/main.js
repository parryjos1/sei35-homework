

// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
let secretWord = ['O', 'R', 'A', 'N', 'G', 'E']
let correctLetters = ['_', '_', '_', '_', '_']
let incorectLetters = []
let added = false
// store some variables
let guessLetter = function (letter) {

  for (var i = 0; i < secretWord.length; i++) {
    if (letter === secretWord[i]) {
      correctLetters.splice(i, 1, letter)
      added = true
      // console.log(added);
      break

    } else {
      added = false
      // console.log(added);
    }
  }
  if (added === false) {
    incorectLetters.unshift(letter)
    // alert('Trying again')
  } else {
    return
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

let winner = function (arrayOne, arrayTwo) {
  if (arrayOne === arrayTwo) {
    alert("Congrats you won")
  } else  {
     console.log('try again')
   }
};

winner(secretWord, correctLetters)
//
// let winner = function (arrayOne, arrayTwo) {
//   if (arrayOne[i] === arrayTwo[i]) {
//     alert('Congrats')
//   } else {
//     console.log('try again');
//   }
// };
//
// winner(secretWord, correctLetters)


//
// let secretWordTwo = ['m', 'o', 'o', 'c', 'h']
// let correctLettersTwo = ['_', '_', '_', '_', '_']
//
// let guessLetterTwo = function (letter) {
//   for (var i = 0; i < secretWordTwo.length; i++) {
//       if (letter === secretWordTwo[0] ) {
//         correctLettersTwo.splice(0, 1, letter)
//         break
//     }
//     if (letter === secretWordTwo[1] ) {
//       correctLettersTwo.splice(1, 2, letter, letter )
//       break
//     }
//
//     if (letter === secretWordTwo[3] ) {
//       correctLettersTwo.splice(3, 1, letter)
//       break
//     }
//
//     if (letter === secretWordTwo[4] ) {
//       correctLettersTwo.splice(4, 1, letter)
//     } else {
//       console.log("try again");
//     }
//   }
// }
//
// guessLetterTwo('c')
// guessLetterTwo('o')
// guessLetterTwo('h')
// guessLetterTwo('g')
// guessLetterTwo('m')
//
// console.log(correctLettersTwo);

// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
// let secretWord = ['S', 'H', 'A', 'N', 'E']
// let correctLetters = ['_', '_', '_', '_', '_']
// let incorectLetters = []
// // store some variables
// let guessLetter = function (letter) {
//   for (var i = 0; i < secretWord.length; i++) {
//     if (letter === secretWord[i]) {
//       correctLetters.splice(i, 1, letter)
//       break
//     } else if (letter === incorectLetters[i] ){
//       break
//     } else {
//       incorectLetters.unshift(letter)
//     }
//   }
// };
