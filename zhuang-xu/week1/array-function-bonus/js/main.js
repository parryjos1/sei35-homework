const maxOfTwoNumbers = function(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};

console.log(maxOfTwoNumbers(15, 20));

const maxOfThree = function() {
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
};

console.log(maxOfThree(2, 4, 1));

const isVowel = function(character) {
  const vowels = 'aeiouAEIOU'.split('');
  return vowels.includes(character);
};

console.log(isVowel('E'));
console.log(isVowel('f'));

const sumArray = function(arrayOfNumbers) {
  return arrayOfNumbers.reduce((accu, item) => {
    accu += item;
    return accu;
  }, 0);
};

console.log(sumArray([1, 2, 3, 4]));

const multiplyArray = function(arrayOfNumbers) {
  return arrayOfNumbers.reduce((accu, item) => {
    accu *= item;
    return accu;
  }, 1);
};

console.log(multiplyArray([1, 2, 3, 4]));