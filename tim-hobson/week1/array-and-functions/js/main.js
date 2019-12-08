// Array and Functions Bonus Material

// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

let maxOfTwoNumbers = function ( number1, number2 ) {

  if (number1 > number2 ) {
    return number1;
  } else if (number2 > number1) {
    return number2;
  } else {
    return 'Numbers are even.'
  }
}

console.log(maxOfTwoNumbers(2, 4));


// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

let maxOfThreeNumbers = function ( number1, number2, number3 ) {
//  This isn't returning the right answer if 2 numbers are the same and the other is smaller
  if ((number1 > number2) && (number1 > number3)) {
    return number1;
  } else if ((number2 > number1) && (number2 > number3)) {
    return number2;
  } else if ((number3 > number2) && (number3 > number1)) {
    return number3;
  } else {
    return `Numbers are even`
  }
};

console.log(maxOfThreeNumbers(1, 2, 3));


// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const isVowel = function ( character ) {
  if ( character === ('a' || 'e' || 'i' || 'o' || 'u') ) {
    return `It is a vowel!`
  } else {
    return `It isn't a vowel`
  }
};

console.log(isVowel('b'));
console.log(isVowel('a'));


// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
const sumArray = function (numberArray) {
  let sumResult = 0
  for (let i = 0; i < numberArray.length; i++) {
    sumResult = (sumResult + numberArray[i])
  }
  return sumResult
};


const multiplyArray = function (timesArray) {
  let multResult = timesArray[0]
  for (let i = 0; i < timesArray.length; i++) {
    // needs to be 1x2x3x4=24
    // multResult = (multResult * timesArray[i]) // both work but the one but this is longer
    multResult *= (timesArray[i]) // both work but this is shorter
  }
  return multResult
};

//

console.log(sumArray([1, 2, 3, 4]))
console.log(multiplyArray([1, 2, 3, 4]))



// Bonus


// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function ( input ) {
  let inputAsArray = input.split("")
  let reverseArray = inputAsArray.reverse()
  let arrayToString = reverseArray.join('')
  return arrayToString
}

console.log(reverseString('jag testar'));


// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

// const findLongestWord = function ( array ) {
//i don't understand the map feature so i'd rather figure a loop out somehow
//   let max = array[0].length;
//   array.map(v => max = Math.max(max, v.length));
//   result = array.filter(v => v.length == max);
//   return result;
// }

let longestWord = ''
const findLongestWord = function ( array ) {
    for (var i = 0; i < array.length; i++) {
    if (longestWord.length < array[i].length) {
      longestWord = array[i]
    // } else if (array[i].length > longestWord.length) {
      // console.log('hi');
    }
  }
  return longestWord
}


console.log(findLongestWord(['a', 'aa', 'aaa','aaaaa','aaaa']))



findLongestWordArray = [ 'hello', 'how', 'are', 'you', 'reverse' ]
testInput = findLongestWord(findLongestWordArray)
console.log(findLongestWord(findLongestWordArray));


// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.


let matchedWord = '' // create blank variable
const filterLongWords = function ( wordArray, number) {
    for (var i = 0; i < wordArray.length; i++) { // loop through the words
      if (wordArray[i].length === number) { // if the length of the word in loop matches the number input
        matchedWord = wordArray[i] // make matchedWord then be that current word
    }
  }
  return matchedWord
}


{
testArray = ['one', 'four', 'three', 'du', 'i']
test = filterLongWords( testArray, 3 )
console.log(test);
}
