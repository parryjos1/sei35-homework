// const isLeapYear = function ( year ){
//   if ( year % 4 === 0 ){
//     if( year % 100 !== 0 || yeah % 400 === 0 ){
//       return true;
//   } else {
//       return false;
//     }
//
//   } else {
//       return false;
//     }
// }
// console.log('1997: ', isLeapYear(1997));
// console.log('1996: ', isLeapYear(1996));
// console.log('1900: ', isLeapYear(1900));
// console.log('2000: ', isLeapYear(2000));
//
//
//

const isLeapYear = function( year ) {
  if ((year%4===0) && (year % 100 !== 0 || year % 400 === 0)) {

    return true;

  } else {
      return false;
      }
};

console.log(isLeapYear( prompt('Enter year' )));
