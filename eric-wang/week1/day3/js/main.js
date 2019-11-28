// Homework: The Word Guesser
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

const array = ["G","U","e","s","s"];
const guessedLetter = [];
const guessLetter = function (letter){
  for (let i = 0; i < array.length; i++)
    if (array[i] == letter) {
      console.log("congratulation!");
      guessedLetter.push(letter)
    }
    else {
      console.log("sorry try again")
    }
}

console.log(guessLetter("G"));
console.log(guessLetter("U"));
console.log(guessLetter("a"));
console.log(guessLetter("e"));
console.log(guessLetter("s"));

if (array.length == guessLetter.length) {
  console.log(guessedLetter)
}

// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.


const maxOfTwoNumbers = function (num,num1){
   if (num < num1) {
     return num1
   }
   else {
     return num
   }
};
console.log(maxOfTwoNumbers(1,2));
console.log(maxOfTwoNumbers(20,2));

const maxOfThree = function (num, num1, num2){
  if (num < num1 && num2 < num1)
    return num1
  else if (num < num2 && num1 < num2) {
    return num2
  }
  else {
    return num
  }
};
console.log(maxOfThree(3,123,2313));
console.log(maxOfThree(32222,123,2313));

const array1 = ['a', 'e', 'i', 'o', 'u']
const character = function (str){
   for (var i = 0; i < array1.length; i++)
     if (array1[i]== str) {
       return 'true'
     }
     else {
       return 'false'
     }
};
console.log(character("a"));
console.log(character("aiii"));

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
