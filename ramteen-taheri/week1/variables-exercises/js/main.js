//fortune teller

const numberOfChildren = 2;
const partnersName = "Anna";
const geoLocation = "The Amazon Rainforest";
const jobTitle = "Zookeeper";

// const fortune = "You will be a " + jobTitle + " in " + geoLocation + ". You will be married to someone named " + partnersName + " with " + numberOfChildren + " kids.";

const fortune = `You will be a ${jobTitle} in ${geoLocation}. You will be married to someone named ${partnersName} with ${numberOfChildren} kids.`;

console.log(fortune);


//age calculator
let currentYear = 2019;
let birthYear = 1985;
const age1 = 2019 - 1985;
const age2 = age1-1;

console.log("They are either " + age1 + " or " + age2);

//Lifetime supply calculator
let currentAge = 34;
let maximumAge = 80;
const estimatedPerDay = 20;
let calculatedSupply = (estimatedPerDay * 365) * (maximumAge - currentAge);

console.log("You will need " + calculatedSupply + " to last you until the old ripe age of " + maximumAge);

//the geometizer
let radius = 15;
let circumference = 2 * Math.PI * radius;
// let area = Math.PI * Math.pow(radius, 2);
let area = Math.PI * radius**2;

console.log("circumference is " + circumference.toFixed(2));
console.log("area is " + area.toFixed(2));

//the temperature converter
let tempCelsius = 24;
let tempFaren = (tempCelsius * 9/5) + 32;

console.log(tempCelsius.toFixed(2) + " \xb0C is " + tempFaren.toFixed(2) + " \xb0F");
tempCelsius = (tempFaren - 32) / 5/9;
console.log(tempFaren.toFixed(2) + " \xb0F is " + tempCelsius.toFixed(2) + " \xb0C");