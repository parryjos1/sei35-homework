//Day 2 Function Exercises

console.log('Hello World!');

// The Fortune Teller

const tellFortune = function (numChildren, partnersName, geoLocation, jobTitle) {
  return (`You will be a ${jobTitle} in ${geoLocation}, and married to ${partnersName} with ${numChildren} children`);
};

const fortune1 = tellFortune(4, "Lisa", "Clovelly", "Dolphin Trainer");

const fortune2 = tellFortune(2, "Sally", "Glasgow", "Painter");

const fortune3 = tellFortune(1, "Jane", "Manchester", "Pole Dancer");

// The Puppy Age Calculator

const calculateDogAge = function(puppysAge) {
    const humanYears = puppysAge * 7;
    return (`Your doggie is ${humanYears} years old in dog years`);
};

const puppy1 = calculateDogAge (10);
const puppy2 = calculateDogAge (12);
const puppy3 = calculateDogAge (14);

//The Lifetime Supply Calculator

const calculateSupply = function(age,amountPerDay) {
    const oldAge = 100
    const ageRemaining = oldAge - age;
    const amountConsumed = ageRemaining * (amountPerDay * 365);
    return (`You will need ${amountConsumed} to last you until the ripe old age of ${oldAge}`);
};

const bars1 = calculateSupply(38, 3);
const bars2 = calculateSupply(40, 4);
const bars3 = calculateSupply(25, 2);

//The Geometrizer

const calcCircumference = function(radius) {
  const diameter = radius * 2;
  const circumference = 3.14 * diameter;
  return (`The circumference of the circle is ${circumference}`);
};

const circumference1 = calcCircumference (30);

const circumference2 = calcCircumference (30);

const circumference3 = calcCircumference (30);

// Calculating  Area

const calcArea = function(radius) {
  const area = 3.14 * radius**2;
  return (`The area is ${area}`);
};

const area1 = calcArea(50);

const area2 = calcArea(70);

const area3 = calcArea(90);


//The Temperature Converter

//Celcius to Farenheit

const celsiusToFarenheit = function (celsius){
  const farenheit = celsius * 1.8 + 32;
  return (`${celsius} degrees celsius is ${farenheit} degrees farenheit`);
  };

  const farenheit1 = celsiusToFarenheit(32);

  console.log( farenheit1 );

//Farenheit to Celcius

const farenheitToCelsius = function (farenheit) {
  const celsius1 = (farenheit - 32) * (5 / 9);
  return (`${farenheit} degrees farenheit is ${celsius1} degrees celsius`);
};

  const celsius2 = farenheitToCelsius(100);

  console.log( celsius2 );

  // Exercises in class

  //What numbers bigger

  const greaterNum = function (numberOne, numberTwo) {
      if (numberOne > numberTwo) {
      return (`The greater number is ${numberOne}`) } else {
      return (`The greater number is ${numberTwo}`)
  }
  };

  const example1 = greaterNum (21,35);
  const example2 = greaterNum (45,25);


  //The World Translator

  const helloWorld = function (languageCode) {
    if ("en") {
    return ("Hello");
    } else if ("es") {
    return (`Adios`); }
      else if ("de") {
    return (`Guten Tag`);
    } else {
    return (`Hello World`);
  }
  };

  const language1 = helloWorld ("en");
  const language2 = helloWorld ("de");


  //The Grade Assigner

  const assignGrade = function (score) {
       if (score > 90) {
        return ('You achieved an A');
       } else if (score < 90 && score > 80) {
        return ('You achieved a B');
       } else if (score < 80 && score > 70) {
        return ('You achieved a C');
      }  else if (score < 70 && score > 60) { return ('You achieved a D');
        } else {
        return ('You failed');
       }
     };

  const grade1 = assignGrade(92);
  const grade2 = assignGrade(75);
  const grade3 = assignGrade(55);

  const numOne = 95;
  const numTwo = 100;

  //The Pluraliser

  const pluralize = function (noun, number) {
     if (number > 2) {
     return (`${number} ${noun}s`);
   } else {
     return (`${number} ${noun}`)
   }
  };

  const firstNoun = pluralize("dogs",2);
  const secondNoun = pluralize("cat", 1);

  //Which number is bigger

  if (numOne > numTwo) {
      console.log('Number 1 is bigger than Number 2') } else {
      console.log(`Number 2 is bigger than Number 1`);
  }

  //Language

  const language = 'English'

  if (language === 'English') {
      console.log ('Hello World');
    } else if (language === 'French') {
      console.log ('je Taime');
  };

  
