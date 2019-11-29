// Exercise 1
//You will be a X in Y, and married to Z with N kids
const job_title = "butcher"
const age = 22
const partner = "Yanni"
const kids = 1
console.log('You will be a ' + job_title + ' in ' + age + 'years, and married to ' + partner + ' with ' + kids + ' kid.');

//Exercise 2
// The age calculator
//output them to the screen like so: "they are either NN or NN", substituting values
const currentYear = 2019
const birthYear = 1996
let currentAge = currentYear - birthYear
// let currentAge2 = (birthYear - currentYear)^2
let currentAge20 = currentAge - 1;

console.log('They are either ' + currentAge + ' or ' + currentAge20 + ' years old.')

//Exercise 3
//Lifetime supply calculator

const currentAge3 = 23
const maxAge = 100
const dailyUsage = 3
const lifeLeft = maxAge - currentAge3
const nn = ((dailyUsage * 365)*lifeLeft)
console.log('you will need ' + nn + ' burgers to last you until the ripe old age of ' + maxAge)
//"you will need NN to last you until the ripe old age of X"
// Geometry calculator
//store a radius
//calc circ
//calc area

const circleRadius = 18
console.log('A circle with the Radius of '+ circleRadius +' metres will have a circumference of ' + (3.14*(circleRadius*2)) +' metres and an area of '+ ((circleRadius*3.14)^2)+ ' metres.')

//The temperature converter
//store a celsius temperature into a variable
//convert it to farenheit "NN°C IS NN°F"
//now store a farenheit temperature
//convert it to Celsius and output is "NN°F IS NN°C"
const tempCelsius = 30;
const tempFahrenheit = ((tempCelsius * 9/5) + 32);
console.log('30°C is ' + tempFahrenheit +' °F');
const tempFahrenheit2 = 140;
const  tempCelsius2 = ((tempFahrenheit2-32)*5/9);
console.log('150°F is ' + tempCelsius2 +' °C');
