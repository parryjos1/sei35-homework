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
