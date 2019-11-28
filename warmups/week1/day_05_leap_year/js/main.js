
console.log("hi");

// Write a function that will take any given year and return whether it is a leap year or not. Remember that a leap year is:
//
// Every year that is evenly divisible by 4
// Except if it is evenly divisible by 100...
// Unless it is also divisible by 400
//
// Test Data... Make sure it is working!
//
// - 1997 is not a leap year, it should return false
// - 1996 is a leap year, it should return true
// - 1900 is not a leap year, it should return false
// - 2000 is a leap year, it should return true
//
// How to structure it...
//
// - We want a custom function called isLeapYear
//
// Bonus!
//
// - Ask the user what number they want to test
//
// Watch a whole heap of information about leap years... http://www.youtube.com/watch?v=xX96xng7sAE
// helper function to make our code more readable

const isLeapYear = function( year ){

  if( year % 4 === 0){

    if( year % 100 !== 0 || year % 400 === 0  ){
      return true;
    } else {
      return false;
    }

  } else {
    return false;
  }

};

// if the year is divisible by 4 AND (NOT divisible by 100 OR it's divisible by 400)

const isLeapYear = function( year){

//   return (year % 4 === 0 ) && (( year % 100 !== 0) || (year % 400 === 0));

  if( (year % 4 === 0 ) && (( year % 100 !== 0) || (year % 400 === 0) )){
    return true;
  } else {
    return false;
  }
};


console.log('1997: ', isLeapYear(1997));
console.log('1996: ', isLeapYear(1996));
console.log('1900: ', isLeapYear(1900));
console.log('2000: ', isLeapYear(2000));

// console.log(isLeapYear(prompt('Enter year')));
