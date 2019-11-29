// //Variables and Primitive Data Types
//
// //The Fortune Teller
// //Why pay a fortune teller when you can just program your fortune yourself?
// //Store the following into variables: number of children, partner's name, geographic location, job title. Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// let numberOfChildren = 5;
// let partnersName = "Dave";
// let geographicLocation = "America";
// let jobTitle = "Clown";
//
// //ES5 string interpolation
// console.log("You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnersName + " with " + numberOfChildren + " kids.");
// const fortuneTeller = "You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnersName + " with " + numberOfChildren + " kids.";
//
//
// //ES6 backtick string interpolation
// console.log(`You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`);
// const fortuneTellerES6 = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`
//
//
//
// //The Age Calculator
// //Forgot how old someone is? Calculate it!
// //Store the current year in a variable.
// //Store their birth year in a variable.
// //Calculate their 2 possible ages based on the stored values.
// //Output them to the screen like so: "They are either NN or NN", substituting the values.
// let currentYear = 2019;
// let birthYear = 1985;
// console.log("They are either " + ( currentYear - birthYear ) + " or " + ( (currentYear - birthYear) - 1 ) + ".");
//
// //ES5 string interpolation
// const ageCalculator = "They are either " + ( currentYear - birthYear ) + " or " + ( (currentYear - birthYear) - 1 ) + "."
//
// //ES6 string interpolation
// const ageCalculatorES6 = `They are either ${currentYear - birthYear} or ${((currentYear - birthYear) - 1)}`
//
//
// //The Lifetime Supply Calculator
// //Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// //Store your current age into a variable.
// //Store a maximum age into a variable.
// //Store an estimated amount per day (as a number).
// //Calculate how many you would eat total for the rest of your life.
// //Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
// let currentAge = 34;
// let maximumAge = 100;
// let amountPerDay = 10;
// let yearsRemain = maximumAge - currentAge;
// let amountPerYear = amountPerDay * 365.25;
// let totalSnacksRequired = amountPerYear * yearsRemain
// // console.log("You will need " + ((maximumAge - currentAge) * amountPerDay) + " to last you until the ripe of old age of " + maximumAge + ".");
// console.log(`You will need ${totalSnacksRequired} to last you to the ripe old age of ${maximumAge}.`);
//
//
// //The Geometrizer
// //Calculate properties of a circle, using the definitions here.
// //Store a radius into a variable.
// //Calculate the circumference based on the radius, and output "The circumference is NN".
// //Calculate the area based on the radius, and output "The area is NN".
// let circleRadius = 10;
// let circleCircumference = 2 * Math.PI * circleRadius;
// console.log("The circumference is " + circleCircumference + ".");
// let area = Math.PI * (circleRadius**2)
// console.log("The area is " + (Math.PI * (circleRadius ** 2)) + ".");
// //tidied up to 2 decimal places
// let areaTwoDecimals = area.toFixed(2);
// console.log("The area is " + areaTwoDecimals + " rounded to 2 decimal places.");
//
// //The Temperature Converter
// //It's hot out! Let's make a converter based on the steps here.
// //Store a celsius temperature into a variable.
// //Convert it to fahrenheit and output "NN°C is NN°F".
// //Now store a fahrenheit temperature into a variable.
// //Convert it to celsius and output "NN°F is NN°C."
// let celsiusTemperature = 30;
// let fahrenheitTemperatureConversion = (celsiusTemperature * 1.8) + 32;
// console.log( celsiusTemperature + "°C is " + fahrenheitTemperatureConversion + "°F.");
//
// let fahrenheitTemperature = 90;
// let celsiusTemperatureConversion = ( (fahrenheitTemperature - 32) * (5 / 9) );
// console.log( fahrenheitTemperature + "°F is " + celsiusTemperatureConversion + "°C.");
// //tidied up to 2 decimal places - poorly can apply it to the print out - see below
// //let celsiusTemperatureConversionTwoDecimals = celsiusTemperatureConversion.toFixed(2);
// //console.log( fahrenheitTemperature + "°F is " + celsiusTemperatureConversionTwoDecimals + "°C rounded to 2 decimal places.");
//
// //calling to only 2 decimal places without creating a completely new variable
// console.log((fahrenheitTemperature + "°F is " + celsiusTemperatureConversion.toFixed(2) + "°C."));
//


//variables

// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?//
// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// returns a string that looks like this: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments; each time you call the function, capture the return value of the function (the string) in a new variable, and on a new line, print out the contents of the variable

const tellFortune = function(numberOfChildren, partnersName, geographicLocation, jobTitle){
  const myFortune = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`;
  return myFortune;
};
myFortune = tellFortune(4, "Dave", "Sydney", "Clown");
console.log(myFortune);

// The Puppy Age Calculator
// You know how old your dog is in human years, but what about dog years? Calculate it!//
// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's human-equivalent age based on the conversion rate of 7 human years to 1 dog year.
// returns a string that looks like this: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.
// Call that function 3 times with 3 different values for the puppy's age; each time you call the function, capture the return value of the function (the string) in a new variable, and on a new line, print out the contents of the variable
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

const calculateDogAge = function(puppysAge, conversationRate) {
  const dogYearsInHumanYears = puppysAge * conversationRate;
  return `Your doggie is ${dogYearsInHumanYears} years old in human years!`;
};

const dog7Years = calculateDogAge(7, 7);
console.log(dog7Years);
const dog10Years = calculateDogAge(10, 3);
console.log(dog10Years);
const dog2Years = calculateDogAge(2, 11);
console.log(dog2Years);

// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!//
// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a fixed maximum age).
// returns a string that looks like this: "You will need NN to last you until the ripe old age of X"
// Call that function 3 times with 3 different values for the arguments; each time you call the function, capture the return value of the function (the string) in a new variable, and on a new line, print out the contents of the variable
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

const calculateSupply = function(age, amountPerDay) {
  const maxAge = 99;
  const yearsLeft = maxAge - age;
  const amountPerYear = amountPerDay * 365.25
  const lifetimeSupply = amountPerYear * yearsLeft
  return `You will need ${lifetimeSupply.toFixed(0)} to last you until the rip old age of ${maxAge}`;
};

const lifetimeAt20ADay = calculateSupply(30, 8);
console.log(lifetimeAt20ADay);
const lifetimeAt9ADay = calculateSupply(44, 9);
console.log(lifetimeAt9ADay);
const lifetimeAt11ADay = calculateSupply(50, 11);
console.log(lifetimeAt11ADay);

// The Geometrizer
// Create 2 functions that calculate properties of a circle.
// Create a function called calcCircumfrence:
// Pass the radius to the function.
// Calculate the circumference based on the radius, and return this value from the function (as a number, not a string).
// Call the function with a radius argument of your choice, capture the return value in a variable, and use the variable to print out a string like: "The circumference of the circle is XX."

const calcCircumfrence = function (radius) {
  const circumference =  2 * Math.PI * radius;
  return circumference;
};

const circumRadius5 = calcCircumfrence(5);
console.log(`The circumference of the circle is ${circumRadius5}.`);

// Create a function called calcArea:
// Pass the radius to the function.
// Calculate the area based on the radius, and return this number from the function.
// Call the function with a radius argument, capture its return value in a variable, and use the variable to output to the consle "The area is NN".

const calcArea = function(radius) {
  var area = Math.PI * (radius**2);
  return area;
}

const areaRadius5 = calcArea(5);
console.log(`The area is ${areaRadius5}`);


// The Temperature Converter
// It's hot out! Let's make a converter.
// Create a function called celsiusToFahrenheit which:
// Takes a celsius temperature as its argument.
// Converts it to fahrenheit and returns this value from the function
// Call the funtion this way:
// Create a variable called celsius and store a temperature value in it
// Call the celsiusToFahrenheit function and pass the celsius variable as the argument.
// Capture the return value of the function into a new variable, and use both this variable and your original celsius input variable to print out a result like "XX°C is YY°F".
// Now do the reverse calculation by creating a function called fahrenheitToCelsius. Pass a variable called fahrenheit into this function when you call it.
// BONUS: prompt the user for the temperatures to convert, instead of hardcoding them into variables.

celsius = 40;

// var celcius = prompt("What's the temperature in Celcius?", "00°C");
// if ( celcius == null || celcius == "") {
//   txt = 'User cancelled the prompt.';
// } else {
const celsiusToFahrenheit = function (celsius) {
  var farenheitConverted = celsius * 1.8 + 32;
  return farenheitConverted;
};

farenheitConverted = celsiusToFahrenheit(celsius);
console.log(`${celsius}°C is ${farenheitConverted}°F.`);

fahrenheit = 100;

const fahrenheitToCelsius = function (fahrenheit) {
  var celsiusConverted = fahrenheit - 32 * (5/9);
  return celsiusConverted;
}

celsiusConverted = fahrenheitToCelsius(fahrenheit);
console.log(`${fahrenheit}°F is ${celsiusConverted}°C`);
