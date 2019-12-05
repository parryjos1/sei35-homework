//PART ONE
//// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
const squareNumber = function (num) {
  const result = num*num;
  console.log(`The result of squaring the number ${num} is ${result}.`);
  return result;
};
squareNumber(2);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
function halfNumber(num) {
  const result = num/2;
  console.log(`Half of ${num} is ${result}`);
  return result;
};

halfNumber(10);

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
const percentOf = function (x, y) {
  const result = (x/y)*100;
  console.log(`${x} is ${result}% of ${y}.`);
  return result;
};
percentOf(2.5, 10);

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
const areaOfCircle = function (radius) {
  const result = 3.141 * radius*radius;
  console.log(`The area for a circle with radius ${radius} is ${result.toFixed(2)}.`);
  return result;
};
areaOfCircle(22);

//PART 2
function combined(num) {
  // Take half of the number and store the result.
  const x = halfNumber(num);
  // Square the result of #1 and store that result.
  const y = squareNumber(x);
  // Calculate the area of a circle with the result of #2 as the radius.
  const z = areaOfCircle(y);
  // Calculate what percentage that area is of the squared result (#3).
  const k = percentOf(z, y);
  return k;
};
combined(8);

//STRINGS
//Dr.Evil
function drEvil(num) {
  if (num < 1000000) { //if number is less than 1000000 then log
  console.log(`$${num} dollars`);
} else { //if it's more than or equal to 1000000 than false -log
  console.log(`$${num} dollars (pinky)`);
}
};
drEvil(1000);
drEvil(1000000);
// MixUp
function mixUp(word1, word2) {
  //assumption: the strings are at least 2 characters long
    const s1 = word2.slice(0,2) + word1.slice(2);
    //switching the two characters between each word
    const s2 = word1.slice(0,2) + word2.slice(2);
    return s1 + " " + s2; //prints the rearranged and character rearrangement
}

console.log(mixUp('food', 'cat'));
console.log(mixUp('tail', 'dog'));
console.log(mixUp('mix', 'pod'));

// FixStart
function fixStart(newWord) {
  //assumption: Input is string type and the string is at least one character long.
  const xyz =  new RegExp(newWord[0],"gi"); //regular expression finds patterns
  //newWord[first letter]
  return newWord[0] + newWord.slice(1).replace(xyz, "*");
}

console.log(fixStart('babble'));
console.log(fixStart('poopps'));
console.log(fixStart('Plopp Plopp Plopp'));
