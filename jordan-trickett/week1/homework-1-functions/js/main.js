console.log("Hello World!!!");
// The Calculator
// Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function ( num1 ) {
    const result = Math.pow(num1, 2);
    return (`The result of squaring the number ${num1} is ${result}`);
};

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function ( num1 ) {
    const result = num1 / 2;
    return  (`Half of ${num1} is ${result}`);
};


// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const  percentOf = function ( num1, num2 ) {
    const result = num1 * 100 / num2;
    return (`${num1} is ${result}% of ${num2}`);
};




// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

// Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle = function ( radius ) {
    const  result = (Math.PI * Math.pow( radius, 2)).toFixed(2);
    return  (`The area for a circle with radius ${radius} is ${result}`);
};



// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

// Take half of the number and store the result.

// Square the result of #1 and store that result.

// Calculate the area of a circle with the result of #2 as the radius.

// Calculate what percentage that area is of the squared result (#3).

// ADDED in to two decimal places for practice .toFixed(2)

const crazyFunction = function ( num1 ) {
  // could have reused the previous functions
    const halfNumber = num1 / 2;
    const squareResultOf1 = (Math.pow( halfNumber, 2)).toFixed(2);
    const areaOfCircleFrom2 = (Math.PI * Math.pow( squareResultOf1, 2)).toFixed(2);
    const percentAreaOfSquare = (areaOfCircleFrom2 * 100 / squareResultOf1).toFixed(2);
    return (`The area of the circle is ${areaOfCircleFrom2}, which is ${percentAreaOfSquare}% of ${squareResultOf1}, which was the squared result of the first number ${num1}, after being divided by 2!`)
}
