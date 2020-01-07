//Day 2 Homework

//The Calculator

/*Part 1

Square Number

Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

*/

  const squareNumber = function(number) {
  const functionSquared = number * 2;
  return ("The result of squaring the number " + number + " is " + functionSquared)
};

const squareNumber1 = squareNumber(4);

console.log (squareNumber1);


//Half Number

/*Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
*/

  const halfNumber = function(number2) {
  const functionDivided = number2 / 2;
  return ("Half of " + number2 + " is " + functionDivided)
}

const halfNumber1 = halfNumber(5);

console.log (halfNumber1);

//Percent of

/*Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
*/

const percentOf = function(number1, number2) {
  const percentage = number1/number2 * 100;
  return (number1 + " is " + percentage + "% of " + number2)
}

const findPercentageOf = percentOf(40, 90);

console.log ( findPercentageOf );

//Area of circle

/*Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
*/

const areaOfCircle = function (radius) {
  const area = 3.14 * radius**2;
  return ("The area for a circle with a radius of " + radius + " is " + area)
}

const areaOfCircle1 = areaOfCircle(12);

console.log ( areaOfCircle1 );

//Part Two

/*Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).*/

  const finalAnswer = function (number){
  const halfOfNumber = number / 2;
  const squareOfOne = halfOfNumber * 2;
  const circle = 3.14 * squareOfOne * squareOfOne;
  const percentageOfArea = circle / squareOfOne * 100;
  return percentageOfArea;
}

const partTwo = finalAnswer (8);

console.log ( partTwo );

//Strings

//1.Dr Evil

/*Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

//DrEvil(10): 10 dollars
//DrEvil(1000000): 1000000 dollars (pinky)

*/

const drEvil = function(dollars) {
  if (dollars < 1000000) {
   return (dollars + " dollars")
  } else {
    return (dollars + " dollars (Pinky)")
  }
};

  const drEvil1 = drEvil(1000000);

  console.log ( drEvil1 );


//2. Mix Up

/*Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

mixUp('mix', 'pod'): 'pox mid'
mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/

const mixUp = function(string1, string2) {
  const stringOneSlice = string1.slice(0,2);
  const stringTwoSlice = string2.slice(0,2);
  const stringOneSlice2 = string1.slice(2);
  const stringTwoSlice2 = string2.slice(2);
  console.log(`${stringTwoSlice}${stringOneSlice2}  ${stringOneSlice}${stringTwoSlice2}`);
}

console.log(mixUp("mix", "pod"));

//look for string slice on google.

//3. FixStart

/*Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

fixStart('babble'): 'ba**le'

*/

/*
const fixStart = function(string) {
const string1 = string;
console.log(newString);
};

console.log(fixstart("babble"));
*/

//4. Verbing

/*Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

verbing('swim'): 'swimming'
verbing('swimming'): 'swimmingly'
verbing('go'): 'go'

*/

const verbing = function(string) {
  // if string is less than 3 letters return string.
  if (string.length < 3) {
  console.log (string);
  //if string is more than 3 letters and doesn't contain 'ing', add 'ing' to the string.
  } if (string.length >= 3 && string.includes("ing")) {
  console.log (`${string}ly`);
  //else add 'ly' to the end of the string.
  } else {
  console.log (`${string}ing`);
  }
};

console.log (verbing("swimming"));


//5. Not Bad

/*Create a function called notBad that takes a single argument, a string.

It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

For example:

notBad('This dinner is not that bad!'): 'This dinner is good!'
notBad('This movie is not so bad!'): 'This movie is good!'
notBad('This dinner is bad!'): 'This dinner is bad!'
*/

const notBad = function (sentence) {
  const index1 = sentence.indexOf("not");
  const index2 = sentence.indexOf("bad");
  if (index1 < index2) {
    const slicedString = sentence.slice(0,index1);
    const good = "good!"
    console.log (`${slicedString}${good}`)
  } else {
    return sentence;
  }
};

console.log(notBad("This dinner is not that bad"))
