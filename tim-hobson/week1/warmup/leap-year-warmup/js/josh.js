const isLeapYear = function ( year ) {

  if ( year % 4 === 0 )
    {
      if ( year % 100 !== 0 || year % 400 === 0 )
      {
        return true;
      }
      else
      {
        return false;
      }
    }
  else
  {
    return false;
  }

};

// const isLeapYear = function ( year ) {
//
//   if ( ( year % 4 === 0 ) && ( ( year % 100 !== 0 || year % 400 === 0 ) )) {
//
//     return true;
//
//   } else {
//
//     return false;
//
//   }
//
// };

// console.log(isLeapYear(prompt('Enter year')));

console.log(`1997 is not a leap year, it should return false`);
console.log(isLeapYear(1997));
//
console.log(`1996 is a leap year, it should return true`);
console.log(isLeapYear(1996));

console.log(`1900 is not a leap year, it should return false`);
console.log(isLeapYear(1900));

console.log(`2000 is a leap year, it should return true`);
console.log(isLeapYear(2000));
