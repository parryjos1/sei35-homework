// The Calculator
// Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

const squareNumber = function(number) {
  result = number**2;
  return `The result of squaring the number ${number} is ${result}.`;
};

const square5 = squareNumber(5);
console.log(square5);

const halfNumber = function(number) {
  result = number / 2;
  return `Half of ${number} is ${result}.`;
};

const half5 = halfNumber(5);
console.log(half5);

const percentOf = function(numOne, numTwo) {
  result = (numOne * 100) / numTwo
  return `${numOne} is ${result}% of ${numTwo}.`;
};

const percent5Of10 = percentOf(5, 10);
console.log(percent5Of10);
const percent44of200 = percentOf(44, 200);
console.log(percent44of200);

const areaOfCircle = function(radius) {
  result = Math.PI * (radius**2);
  return `The area for a circle with radius ${radius} is ${result.toFixed(2)}`;
};

const areadradius2 = areaOfCircle(2);
console.log(areadradius2);


// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const partTwo = function(number) {
  var halfNumber = number / 2;
  var squaredNumber = halfNumber**2;
  var areaNumber = Math.PI * (squaredNumber**2);
  var percentNumber = (areaNumber * 100) / squaredNumber;
  return `The starting number is ${number}. Half of that is ${halfNumber} and if we square that we get ${squaredNumber}. The area of a circle with the radius of ${squaredNumber} is ${areaNumber.toFixed(2)}, and ${areaNumber.toFixed(2)} is ${percentNumber.toFixed(2)}% of ${squaredNumber}.`;
};

const partTwo6 = partTwo(6);
console.log(partTwo6);
