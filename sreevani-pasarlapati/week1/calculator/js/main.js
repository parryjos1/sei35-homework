
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9.

const squareNumber = function ( number ) {
  const result = number ** 2;
  return result;
}

let output = squareNumber(4);
console.log(`The result of squaring the number ${input} is ${output}`);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function ( number ) {
  const result = number / 2;
  return result;
}

output = halfNumber(225);
console.log(`Half of ${input} is ${output}`);

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function ( number1, number2 ) {
  const result = (number1 / number2) * 100;
  return result;
}

let input1 = 110, input2 = 330;
output = percentOf(input1, input2);
console.log(`${input1} is ${output.toFixed(2)}% of ${input2}`);

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

const areaOfCircle = function ( radius ) {
  const area = (Math.PI * (radius ** 2)).toFixed(2);
  return area;
}

output = areaOfCircle(12);
console.log(`The area for a circle with radius ${input} is ${output}`);

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const multiFunction = function ( number ) {
  const result1 = halfNumber(number);
  const result2 = squareNumber(result1);
  const result3 = areaOfCircle(result2);
  const percentage = percentOf(result2, result3);
  return percentage;
}

output = multiFunction(4);
console.log(`Percentage of area to the squared result is ${output.toFixed(2)}%`);
