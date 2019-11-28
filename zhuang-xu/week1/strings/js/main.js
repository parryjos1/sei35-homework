// https://gist.github.com/textchimp/798d0760354f9eb7d4906e284dad9f95#file-js-homework-2-md
// Strings

// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount,
// and return ' dollars', except it will add '(pinky)' at the end if the amount
// is 1 million. For example:
//
//  DrEvil(10): 10 dollars
//  DrEvil(1000000): 1000000 dollars (pinky)
const drEvil = function(amount) {
  let result = `${amount} dollars`;
  if (amount === 1000000) {
    result = `${result} (pinky)`;
  }

  return result;
};

// MixUp
// Create a function called mixUp. It should take in two strings, and return
// the concatenation of the two strings (separated by a space) slicing out and
// swapping the first 2 characters of each. You can assume that the strings are
// at least 2 characters long. For example:
//
//  mixUp('mix', 'pod'): 'pox mid'
//  mixUp('dog', 'dinner'): 'dig donner'
const mixUp = function(first, second) {
  const newFirst = `${second.substring(0, 2)}${first.substring(2)}`;
  const newSecond = `${first.substring(0, 2)}${second.substring(2)}`;

  return `${newFirst} ${newSecond}`;
};

console.log(mixUp('mix', 'pod'));
console.log(mixUp('dog', 'dinner'));

// FixStart
// Create a function called fixStart. It should take a single argument, a string,
// and return a version where all occurrences of its first character have been
// replaced with '*', except for the first character itself. You can assume that
// the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'
const fixStart = function(string) {
  const firstCharacter = string.charAt(0);
  // Reference: https://javascript.info/regexp-lookahead-lookbehind
  const regex = new RegExp(`(?!^)${firstCharacter}`, 'g');
  return string.replace(regex, '*');
};

console.log(fixStart('babble'));

// Verbing
// Create a function called verbing. It should take a single argument, a string.
// If its length is at least 3, it should add 'ing' to its end, unless it
// already ends in 'ing', in which case it should add 'ly' instead. If the
// string length is less than 3, it should leave it unchanged. For example:
//
//  verbing('swim'): 'swimming'
//  verbing('swimming'): 'swimmingly'
//  verbing('go'): 'go'
const verbing = function(word) {
  let newWord = word;
  if (word.length >= 3) {
    if (word.endsWith('ing')) {
      newWord = `${newWord}ly`;
    } else {
      newWord = `${newWord}ing`;
    }
  }

  return newWord;
};

console.log(verbing('swim'));
console.log(verbing('swimming'));
console.log(verbing('go'));

// Not Bad
// Create a function called notBad that takes a single argument, a string.
//
//  It should find the first appearance of the substring 'not' and 'bad'.
//  If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
//  If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//  notBad('This dinner is not that bad!'): 'This dinner is good!'
//  notBad('This movie is not so bad!'): 'This movie is good!'
//  notBad('This dinner is bad!'): 'This dinner is bad!'
const notBad = function(string) {
  return string.replace(/not.*bad/, 'good');
};

console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This dinner is bad!'));