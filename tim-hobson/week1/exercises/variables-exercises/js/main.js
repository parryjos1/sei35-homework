//Variables and Primitive Data Types

//The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself?
//Store the following into variables: number of children, partner's name, geographic location, job title. Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
let numberOfChildren = 5;
let partnersName = "Dave";
let geographicLocation = "America";
let jobTitle = "Clown";

//ES5 string interpolation
console.log("You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnersName + " with " + numberOfChildren + " kids.");
const fortuneTeller = "You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnersName + " with " + numberOfChildren + " kids.";


//ES6 backtick string interpolation
console.log(`You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`);
const fortuneTellerES6 = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`



//The Age Calculator
//Forgot how old someone is? Calculate it!
//Store the current year in a variable.
//Store their birth year in a variable.
//Calculate their 2 possible ages based on the stored values.
//Output them to the screen like so: "They are either NN or NN", substituting the values.
let currentYear = 2019;
let birthYear = 1985;
console.log("They are either " + ( currentYear - birthYear ) + " or " + ( (currentYear - birthYear) - 1 ) + ".");

//ES5 string interpolation
const ageCalculator = "They are either " + ( currentYear - birthYear ) + " or " + ( (currentYear - birthYear) - 1 ) + "."

//ES6 string interpolation
const ageCalculatorES6 = `They are either ${currentYear - birthYear} or ${((currentYear - birthYear) - 1)}`


//The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//Store your current age into a variable.
//Store a maximum age into a variable.
//Store an estimated amount per day (as a number).
//Calculate how many you would eat total for the rest of your life.
//Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
let currentAge = 34;
let maximumAge = 100;
let amountPerDay = 10;
let yearsRemain = maximumAge - currentAge;
let amountPerYear = amountPerDay * 365.25;
let totalSnacksRequired = amountPerYear * yearsRemain
// console.log("You will need " + ((maximumAge - currentAge) * amountPerDay) + " to last you until the ripe of old age of " + maximumAge + ".");
console.log(`You will need ${totalSnacksRequired} to last you to the ripe old age of ${maximumAge}.`);


//The Geometrizer
//Calculate properties of a circle, using the definitions here.
//Store a radius into a variable.
//Calculate the circumference based on the radius, and output "The circumference is NN".
//Calculate the area based on the radius, and output "The area is NN".
let circleRadius = 10;
let circleCircumference = 2 * Math.PI * circleRadius;
console.log("The circumference is " + circleCircumference + ".");
let area = Math.PI * (circleRadius**2)
console.log("The area is " + (Math.PI * (circleRadius ** 2)) + ".");
//tidied up to 2 decimal places
let areaTwoDecimals = area.toFixed(2);
console.log("The area is " + areaTwoDecimals + " rounded to 2 decimal places.");

//The Temperature Converter
//It's hot out! Let's make a converter based on the steps here.
//Store a celsius temperature into a variable.
//Convert it to fahrenheit and output "NN°C is NN°F".
//Now store a fahrenheit temperature into a variable.
//Convert it to celsius and output "NN°F is NN°C."
let celsiusTemperature = 30;
let fahrenheitTemperatureConversion = (celsiusTemperature * 1.8) + 32;
console.log( celsiusTemperature + "°C is " + fahrenheitTemperatureConversion + "°F.");

let fahrenheitTemperature = 90;
let celsiusTemperatureConversion = ( (fahrenheitTemperature - 32) * (5 / 9) );
console.log( fahrenheitTemperature + "°F is " + celsiusTemperatureConversion + "°C.");
//tidied up to 2 decimal places - poorly can apply it to the print out - see below
//let celsiusTemperatureConversionTwoDecimals = celsiusTemperatureConversion.toFixed(2);
//console.log( fahrenheitTemperature + "°F is " + celsiusTemperatureConversionTwoDecimals + "°C rounded to 2 decimal places.");

//calling to only 2 decimal places without creating a completely new variable
console.log((fahrenheitTemperature + "°F is " + celsiusTemperatureConversion.toFixed(2) + "°C."));
