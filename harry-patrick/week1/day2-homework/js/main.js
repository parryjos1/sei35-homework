// function that will square any argument
const squareNumber = function (num) {
// the num is held to the power of 2 through the Math.pow method, the result is stored in the squared variable. note in Math.pow[0] = number, Math.pow[1] = to the power of
  const squared = Math.pow(num, 2);
// returns a string as the output of the function
  return `The result of squaring the number ${num} is ${squared}`
};

console.log(squareNumber(4));

// function that will take a parameter and halve it whena argument in parsed in
const halfNumber = function (num) {
// the num is havled and sotred to the variable halved
  const halved = num / 2;
// returns a string as the output of a function
  return `Half of ${num} is ${halved}`
};

console.log(halfNumber(8));

// function which will get the percents of one number from anthoer
const percentOf = function (num, num1) {
// the first parameter is divided by the second the * by 100 creating a percentage, this is saved to the variable percentage
  const percentage = (num/num1) * 100;
// returns a string as the output of the function note: the toFixed method trims the result down to 2 decimal places
  return `${num} is ${percentage.toFixed(0)}% of ${num1}`
};

console.log(percentOf(4, 9));

// function which will rind the area of circle from its radius
const areaOfCircle = function (radius) {
// area = pir^2 pi is found through the Math.PI method note: the uppercase, and radius squared is found using the Math.pow method.
  const area = Math.PI * Math.pow(radius, 2);
// returns a string as the ouput of a function
  return `The area for a circle with radius ${radius} is ${area.toFixed(2)}`
};

console.log(areaOfCircle(4));

//function using the functions above
const multiFunction = function (num) {
// the argument is halved and stored in the havled variable
  const halved = num / 2;
// havled is then squared using the Math.pow method and stored in the squared variable
  const squared = Math.pow(halved, 2);
// the radius of a cirlce is found with the value of the halved variable and stored as area
  const area = Math.PI * Math.pow(squared, 2);
// the percentage of radius to the area is found and stored in the percentage variable
  const percentage = (squared/area) * 100;
// returns a string as an out put of a function
  return `The number halved is ${halved}, the result squared is ${squared}, the area is ${area.toFixed(2)}, the percentage is ${percentage.toFixed(2)}%`
};

console.log(multiFunction(4));

// concatenation function
const drEvil = function (dollars) {
// the argument is concatenated together to a string and saved in the variable withPinky
  const withPinky = `${dollars} dollars (pinky)`;
//variable withPinky returned as function output
  return withPinky
};

console.log(drEvil(10000));

//function taking the firist two letters of on string and swapping them with the first two letters of another string
const mixUp = function (string, string1) {
// using the substring method the first two letters of a string are concatenated with the remaining letter of another string and the value is stored to a variable
  const mixed1 = `${string1.substring(0,2)}${string.substring(2,string.length)}`;
//not the indexs'
  const mixed2 = `${string.substring(0,2)}${string1.substring(2,string.length)}`;
// string return as an output of a function
  return `${mixed1} ${mixed2}`
};

console.log(mixUp('Hobart', 'Sydney'));

const mixUpOne = function (stringOne, StringTwo) {

  const mixed1 = `${string1.slice(0,2)}${string.slice(2)}`;
//not the indexs'
  const mixed2 = `${string.slice(0,2)}${string1.slice(2)}`;
// string return as an output of a function
  return `${mixed1} ${mixed2}`

}

console.log(mixUp('Hobart', 'Sydney'));


// function to replace any letter of a string simialar to the first with a **
const fixStart = function (word) {
// for loop to loop through each letter of the string
  for (let i = 0; i <= word.length; i++) {
// condition is i is equal to the first letter of the word replace i with *
    if (word[i] === word[0]) {
      console.log(`${word.replace(word[i], "*")}`);
    } else if (word[i] !== word[0]) {
// if i is not equal to word[0], return i
      console.log((`${word[i]}`));
    } else {
      return `${word}`;
    };
  };
};

console.log(fixStart('babble'));

//function add verding to the end of strings
const verbing = function (string) {
// if the string length is greater then 2 and the last 3 letters of the are not equal to 'ing' add 'ing' to the end of that string
  if (string.length > 2 && string.substr(string.length - 3) !== "ing"){
    return `${string}ing`
// if // if the string length is greater then 2 and the last 3 letters of the are equal to 'ing' add 'ly' to the end of that string
  } else if (string.length > 2 && string.substr(string.length - 3) === "ing") {
    return `${string}ly`
// else return string
  } else {
    return `${string}`
  };
};
console.log(verbing('parking'));

const verBing = function (verb) {

}

  // ask..
  const notBad = function (string) {
    if (string.includes('not') && string.includes('bad')) {
      string.replace('good')
    } else {
      return string
    };
  };

console.log(notBad('This dinner is not that bad!'));
