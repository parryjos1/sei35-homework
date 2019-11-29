// Warmup - Raindrops
// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:
//
// If the number contains 3 as a factor, output 'Pling'.
// If the number contains 5 as a factor, output 'Plang'.
// If the number contains 7 as a factor, output 'Plong'.
// If the number does not contain 3, 5, or 7 as a factor, output the number as a string.


// Examples
// 28 has 7 as a factor.
// In raindrop-speak, this would be a simple "Plong".
// 1755 has 3 and 5 as factors.
// In raindrop-speak, this would be a "PlingPlang".
// 34 has neither 3, 5 nor 7 as a factor.
// Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".

// const rainDrops = function (number) {
//   if ( number % 3 === 0 ) {
//   var isPling = 'Pling';
// } else if ( number % 5 === 0 ) {
//   var isPlang = 'Plang';
// } else if ( number % 7 === 0 ) {
//   var isPlong = 'Plong';
// } else {
//   var noDrop = number
// }
//  result = `${isPling}${isPlang}${isPlong}${noDrop}`;
//  return result;
// }

//
// const rainDrops = function (number) {
//   if ( number % 3 === 0 ) {
//   var result = 'Pling';
// } else if ( number % 5 === 0 ) {
//   var result = (result + 'Plang');
// } else if ( number % 7 === 0 ) {
//   var result = (result + 'Plong');
// } else {
//   var result = number
// }
//  return result;
// }
//
// const rainDrops = function (number) {
//   if (number%3===0) {
//     var result = 'Pling';
//   } else if (number%5===0) {
//     result = result + 'Plang';
//   } else if (number%7===0) {
//     result = result + 'Plong';
//   } else {
//     result = number;
//   }
//   return result;
// }


const rainDrops = function (number) {
  var result = '';
  if ( number % 3 === 0 ) {
  var result = (result + 'Pling');
} if ( number % 5 === 0 ) {
  var result = (result + 'Plang');
} if ( number % 7 === 0 ) {
  var result = (result + 'Plong');
} if (result.length === 0) {
  var result = number
}
 return result;
}

const testDrops28 = rainDrops(28);
console.log(testDrops28);
const testDrops1755 = rainDrops(1755);
console.log(testDrops1755);
const testDrops34 = rainDrops(34);
console.log(testDrops34);

// Josh's result

const jRainDrops = function (num) {

  let string = '';

  if ( num % 3 === 0 ) {
    string = string + 'Pling'
  }

  if ( num % 5 === 0 ) {
    string = string + 'Plang'
  }

  if (num % 7 === 0 ) {
    string = string + 'Plong'
  }

  if (string.length === 0 ) {
    string = num.toString()
  }

  return string

};

const jTestDrops28 = jRainDrops(28);
console.log(jTestDrops28);
const jTestDrops1755 = jRainDrops(1755);
console.log(jTestDrops1755);
const jTestDrops34 = jRainDrops(34);
console.log(jTestDrops34);


// Can also place a function inside the condition to save space
const isDiviableBy = function ( number, divisor ) {

  return number % divisor === 0;

}
