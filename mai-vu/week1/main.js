/***** THE CALCULATOR *****/

//     Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function(num) {
  const result = Math.pow(num, 2);
  console.log(`The result of squaring the number ${num} is ${result}.`);
  return result;
};

//     Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function(num) {
  const result = num / 2;
  console.log(`Half of ${num} is ${result}.`);
  return result;
};

//     Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function(num1, num2) {
  const result = ((num1 / num2) * 100).toFixed(2);
  console.log(`${num1} is ${result}% of ${num2}.`);
  return result;
};

//     Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//     Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle = function(radius) {
  const result = (Math.PI * Math.pow(radius, 2)).toFixed(2);
  console.log(`The area of a circle with radius ${radius} is ${result}.`);
  return result;
};

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
//     Take half of the number and store the result.
//     Square the result of #1 and store that result.
//     Calculate the area of a circle with the result of #2 as the radius.
//     Calculate what percentage that area is of the squared result (#3).

const myCalc = function(number) {
  const myHalfResult = halfNumber(number);
  const mySquareResult = squareNumber(myHalfResult);
  const myAreaResult = areaOfCircle(mySquareResult);
  const myPercentResult = percentOf(myAreaResult, mySquareResult);
};

myCalc(10);

/***** STRING FUNCTIONS & CONDITIONALS *****/

// drEvil
// Create a function called drEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million.

const drEvil = function(amount) {
  if (amount == 1000000) {
    console.log(`${amount} dollars (pinky)`);
  } else {
    console.log(`${amount} dollars`);
  }
};

drEvil(20);
drEvil(1000000);

// mixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long

const mixUp = function(word1, word2) {
  const mix1 = word2.substring(0, 2) + word1.slice(2);
  const mix2 = word1.substring(0, 2) + word2.slice(2);
  return `${mix1} ${mix2}`;
};

console.log(`The mixed up output is ${mixUp("mix", "pod")}`);
console.log(`The mixed up output is ${mixUp("dog", "dinner")}`);

// fixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long.

const fixStart = function(str) {
  const firstChar = str.charAt(0);
  let remainingString = str.slice(1);
  let newString = str[0];
  for (let i = 0; i < remainingString.length; i++) {
    if (remainingString[i] == firstChar) {
      newString += "*";
    } else {
      newString += remainingString[i];
    }
    return newString;
  }
};

console.log(fixStart("babble"));

// verbing
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged.

const verbing = function(string) {
  if (string.length < 3) {
    return string;
  } else if (string.substring(string.length - 3, string.length) !== "ing") {
    return string + "ing";
  } else if (string.substring(string.length - 3, string.length) == "ing") {
    return string + "ly";
  }
};

//input
const verb = verbing("caring");
//output
console.log(`Verbing input is caring, output is ${verb}`);

// notBad
// Create a function called notBad that takes a single argument, a string.
//     It should find the first appearance of the substring 'not' and 'bad'.
//     If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
//     If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

const notBad = function(string) {
  const not = "not";
  const bad = "bad";
  const indexOfFirst = string.indexOf(not);
  const indexOfSecond = string.indexOf(bad);
  if (indexOfFirst < indexOfSecond) {
    string = string.replace(bad, "good");
    string = string.replace(not, "");
    return string;
  } else {
    return string;
  }
};
//input
const badnot = notBad(" is not bad");

console.log(`NotBad input is " is not bad", output is ${badnot}`);
