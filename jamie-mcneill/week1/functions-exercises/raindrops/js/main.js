/* Warmup - Raindrops
Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:

If the number contains 3 as a factor, output 'Pling'.
If the number contains 5 as a factor, output 'Plang'.
If the number contains 7 as a factor, output 'Plong'.
If the number does not contain 3, 5, or 7 as a factor, output the number as a string.

Examples:
28 has 7 as a factor.
In raindrop-speak, this would be a simple "Plong".
1755 has 3 and 5 as factors.
In raindrop-speak, this would be a "PlingPlang".
34 has neither 3, 5 nor 7 as a factor.
Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".
*/


// My Code.

const factor = function(number) {

  if (number % 3 === 0 && number % 5 === 0 && number % 7 ===0) {
    return ('plingPlangPlong');
  } else if (number % 3 === 0 && number % 5 === 0) {
    return ('plingPlang');}
   else if (number % 3 === 0 && number % 5 !== 0  && number % 7 !== 0 ) {
    return ('pling');
  }  else if (number % 5 === 0 && number % 3 !== 0 && number % 7 !== 0) {
    return ('plang')
  } else if (number % 7 === 0 && number % 5 !== 0 && number % 3 !== 0 ) {
    return ('plong')
  } else {
    return number.toString() ;
  }
};

const raindrop1 = factor(34);
const raindrop2 = factor(28);
const raindrop3 = factor(1755);
const raindrop4 = factor(75);
const raindrop5 = factor(80);
const raindrop6 = factor(155);
const raindrop7 = factor(260);

// Solution:

//Easy to Read

const raindrops = function (num) {

  let string = ' ';

  if (num % 3 === 0) {
      //string += pling
      string = string + 'pling';
  }

  if (num % 5 === 0) {
        //string += plang
      string = string + 'Plang';
  }

  if (num % 7 === 0) {
        //string += pling
        string = string + 'Plong';
  }

  if (string.length === 0) {
        //string += pling
        string = num.toString()
  }

  return string;
};

console.log (raindrops(1755));
console.log (raindrops(28));
console.log (raindrops(34));
