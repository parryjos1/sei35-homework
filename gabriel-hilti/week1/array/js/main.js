const maxOfTwoNumbers = function(num1, num2) {
  return (num1 > num2) ? num1 : num2;
};

console.log(`the maximum of 8 and 4 is ${maxOfTwoNumbers(8, 4)}.`);

const maxOfThree = function(num1, num2, num3) {
  const numbers = [];
  for (let i = 0; i < arguments.length; i++) {
    numbers.push(arguments[i]);
  }

  // values from max to min
  numbers.sort((a, b) => b - a); // negative: a lower index, positive: b lower index, zero: unchanged
  return numbers[0];
};

console.log(`The maximum of the values 4, 18, 11 is ${maxOfThree(4, 18, 11)}.`);

const isVowel = function(char) {
  return ['a','e','i','o','u'].includes(char);
};

console.log(`Is 'b' a vowel? ${isVowel('b').toString()}`);
console.log(`Is 'o' a vowel? ${isVowel('o').toString()}`);

const sumArray = function(arr) {
  return arr.reduce((a,b) => a + b);
};

console.log(`sum of [1,2,3,4] = ${sumArray([1,2,3,4])}`);

const multiplyArray = function(arr) {
  return arr.reduce((a,b) => a * b);
};

console.log(`multiplication of [1,2,3,4] = ${multiplyArray([1,2,3,4])}`);

const reverseString = function(str) {
  let newStr = '';
  for(i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
  // return str.split('').reverse().join('');
};

console.log(`'jag testar' reversed: '${reverseString('jag testar')}'`);

const findLongestWord = function(words) {
  return words.sort((a, b) => b.length - a.length)[0];
};

console.log(`Longest word in ['behavior', 'index', 'value', 'inconsistent', 'arguments'] is ${findLongestWord(['behavior', 'index', 'value', 'inconsistent', 'arguments'])}`);

const filterLongWords = function(words, i) {
  return words.filter(word => word.length > i);
};

const wordsList = ['abc4', 'abcd5', 'qwer5', 'qwert6', 'ghj4', 'qw3', 'a2'];
const length = 4;

console.log(`[${wordsList}] more than ${length} letters: ${filterLongWords(wordsList, length)}`);
