//  js-homework-2.md
// Strings
// These exercises will test your knowledge of string function and conditionals. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// Some of these are challenging and require extra research or a good memory of the pre-work. Don't despair if you get stuck!


// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

const drEvil = function (amount) {
  if ( amount === 1000000 ) {
    var result = `${amount} dollars (pinky).`;
  } else {
  var result = `${amount} dollars.`;
  };
  return result;
};

const drEvil10000 = drEvil(10000);
console.log(drEvil10000);
const drEvil1000000 = drEvil(1000000);
console.log(drEvil1000000);

// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

const mixUp = function (stringOne, stringTwo) {
  var mixOne = ((stringTwo.slice(0,2)) + (stringOne.slice(2)));
  var mixTwo = ((stringOne.slice(0,2)) + (stringTwo.slice(2)));
  result = (`${mixOne} ${mixTwo}`);
  return result;
};

const mixPod = mixUp('mix', 'pod');
console.log(mixPod);
const glowWorm = mixUp('glow', 'worm');
console.log(glowWorm);
const cheeseTruck = mixUp('cheese', 'truck');
console.log(cheeseTruck);


// FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// fixStart('babble'): 'ba**le'

// const fixStart = function (fixStartString) {
//   var firstLetter = fixStartString.slice(0, 1);
//   var remainingLetters = fixStartString.slice(1);
//   var regex = /firstLetter/gi
//   var result = firstLetter + (remainingLetters.replace(regex, `*`))
//   return result
// }

const fixStart = function (fixStartString) {
  var firstLetter = fixStartString.slice(0, 1);
  var remainingLetters = fixStartString.slice(1);
  //had to create a RegExp inside the brackets as firstLetter was a function and not a string.
  var result = firstLetter + (remainingLetters.replace( new RegExp( firstLetter, 'g' ), `*` ));
  return result
}

const fixStartBabble = fixStart('babble');
console.log(fixStartBabble);
const fixStartSessions = fixStart('sessions');
console.log(fixStartSessions);



// Verbing
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

// const verbing = function (string) {
//   if (strings.length => 3)
// }

const verbing = function (verbingString) {
  if (verbingString.endsWith('ing')) {
    result = (verbingString + 'ly');
  } else if (verbingString.length >= 3) {
    result = (verbingString + 'ing');
  } else {
    var result = verbingString
  }
  return result
}

const swimming = verbing('swimming');
console.log(swimming);
const walk = verbing('walk');
console.log(walk);
const go = verbing('go');
console.log(go);


// Not Bad
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'

// //
//
//


const notBad = function (notBadString) {
  var indexOfNot = notBadString.indexOf('not');
  console.log(indexOfNot);
  var indexOfBad = notBadString.indexOf('bad');
  console.log(indexOfBad);
  console.log((indexOfNot != -1 && indexOfBad != -1));
  if ( (indexOfNot != -1 && indexOfBad != -1) && (indexOfNot < indexOfBad) ) {
    var beforeNot = notBadString.slice(0, indexOfNot);
    console.log(beforeNot);
    var afterBad = notBadString.slice((indexOfBad+3), -1);
    console.log(afterBad);
    var result = `${beforeNot}good${afterBad}`
    return result;
} if (( indexOfNot == -1 || indexOfBad == -1 ) || ( indexOfNot > indexOfBad )) {
    return  notBadString;
  }
}

const notBadOne = notBad('This dinner is not that bad I really enjoyed it.');
console.log(notBadOne);
const notBadTwo = notBad('This dinner is bad!');
console.log(notBadTwo);
const notBadThree = notBad('This dinner is not good at all.');
console.log(notBadThree);

//
//
// const notBad = function (notBadString) {
//   var indexOfNot = notBadString.indexOf('not');
//   // console.log(indexOfNot);
//   var indexOfBad = notBadString.indexOf('bad');
//   // console.log(indexOfBad);
//   if ((indexOfNot === -1 || indexOfBad === -1) || indexOfBad > indexOfNot) {
//     return  notBadString;
//   } else if ( indexOfNot < indexOfBad ) {
//       var beforeNot = notBadString.slice(0, indexOfNot);
//       // console.log(beforeNot);
//       var afterBad = notBadString.slice((indexOfBad+3), -1);
//       // console.log(afterBad);
//       var result = `${beforeNot}good${afterBad}`
//       return result;
// }
// }




//
// var paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
//
// var searchTerm = 'dog';
// var indexOfFirst = paragraph.indexOf(searchTerm);
//
// console.log('The index of the first "' + searchTerm + '" from the beginning is ' + indexOfFirst);
// // expected output: "The index of the first "dog" from the beginning is 40"
//
// console.log('The index of the 2nd "' + searchTerm + '" is ' + paragraph.indexOf(searchTerm, (indexOfFirst + 1)));
// // expected output: "The index of the 2nd "dog" is 52"
//
//
// var sentence = 'The quick brown fox jumps over the lazy dog.';
//
// var word = 'fox';
//
// console.log(`The word "${word}" ${sentence.includes(word)? 'is' : 'is not'} in the sentence`);
// // expected output: "The word "fox" is in the sentence"
