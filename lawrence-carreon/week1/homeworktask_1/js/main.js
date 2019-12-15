//declaring global string variables for outputting messages at the end
//we need the functions to return numbers for Part 2
//use let on declaration so the functions can change their values
//variables are declared as empty strings
let outputSquare = ``;
let outputHalf = ``;
let outputPercent = ``;
let outputArea = ``;
//declare function expressions
const squareNumber = function (numToSquare){
    const result = Math.pow(numToSquare,2);
    outputSquare = `The result of squaring the number ${numToSquare} is ${result}`;
    return result;
};
const halfNumber = function (numToHalf){
    const result = numToHalf / 2;
    outputHalf = `Half of ${numToHalf} is ${result}.`;
    return result;
};
//I use fraction words to describe the parameters so it's easier to determine how to use
//them
const percentOf = function (denominator, numerator){
    //rounding the resulting percentage down to avoid repeating decimals
    const result = Math.floor((numerator / denominator * 100));
    outputPercent = `${numerator} is ${result}% of ${denominator}.`;
    return result;
};
const areaOfCircle = function (radius){
    const result = Math.PI * Math.pow(radius,2);
    //rounding the above to 2 decimal places
    const resultRounded = result.toFixed(2);
    outputArea = `The area for a circle of ${radius} is ${resultRounded}.`;
    return resultRounded;
};
//function to prompt the user for a number input and then call the
//functions for desired output, doesn't need any parameters
const promptAndCall = function (){
    let numberEntered = false;
    while ( numberEntered != true )
    {
        //Check whether or not the input is a valid number
        var userNum = prompt("Please enter a number (it will be rounded down!)");
        if ( isNaN(userNum) )
            {
            //alerts the user that the input was not a number
            alert("That isn't a number bub!");
            }else
                {
                //When the isNaN check fails, it confirms that the input
                //is a number and switches the numberEntered variable to
                //true, so while statement can be exited.
                numberEntered = true;
                //rounds the number down to make it easier to use in this case
                Math.floor(userNum);
                };
    };
    //completing part 2 in the order requested
    const userNumHalf = halfNumber(userNum);
    const squareTheAbove = squareNumber(userNumHalf);
    const areaCircleOfAbove = areaOfCircle(squareTheAbove);
    //I dont use squareNumber() to while passing a parameter to percentOf() so
    //outputSquare is unaffected by a second call of the function
    const percentageArea = percentOf(Math.pow(areaCircleOfAbove,2), areaCircleOfAbove);
    //use the above results separated by "\n" to start each string on a new line
    //by returning the strings the functions modified
    return `${outputHalf}\n${outputSquare}\n${outputArea}\n${outputPercent}`;
};
//call "promptAndCall" function for some output
console.log(promptAndCall());