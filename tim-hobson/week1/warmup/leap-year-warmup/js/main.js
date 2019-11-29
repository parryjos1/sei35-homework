// Leap Year Warmup Exercise
// Do this in HTML and JS!


// How to structure it...
// We want a custom function called isLeapYear

let result = ''
let isLeapYear = function ( year ) {
// Write a function that will take any given year and return whether it is a leap year or not. Remember that a leap year is:
// Every year that is evenly divisible by 4 Except if it is evenly divisible by 100... Unless it is also divisible by 400
  // let result = '';
    if ( year % 4 === 0 )
    {
      result = true;
    }
    if ( year % 100 === 0)
    {
      result = false;
    }
    if ( year % 400 === 000 )
    {
      result = true;
    }
    if ( year % 4 !== 0)
    {
      result = false;
    }
  return result
}

//return is like break
// Test Data... Make sure it is working!
console.log(`1997 is not a leap year, it should return false`);
console.log(isLeapYear(1997));
//
console.log(`1996 is a leap year, it should return true`);
console.log(isLeapYear(1996));

console.log(`1900 is not a leap year, it should return false`);
console.log(isLeapYear(1900));

console.log(`2000 is a leap year, it should return true`);
console.log(isLeapYear(2000));


// Bonus!
//
// Ask the user what number they want to test
var promptYear = prompt("What year do you want to test?");
console.log(`Is the year ${promptYear} a leap year? That is ${isLeapYear(promptYear)}!`);


// document.querySelector('#button').addEventListener('click', function() {
//     // var promptYear = prompt("What year do you want to test?");
//     // alert (userAdjective);
// };
