// Exercises: if/else statements
// What number's bigger?
// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

const greaterNum = function(numOne, numTwo) {
  if (numOne > numTwo) {
    var higher = numOne;
  } else if (numTwo > numOne) {
    var higher = numTwo;
  }
  return `The greater number of ${numOne} and ${numTwo} is ${higher}.`;
}

const test5And10 = greaterNum(5, 10);
console.log(test5And10);
const test11And50 = greaterNum(11, 50);
console.log(test11And50);


// The World Translator
// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

const helloWorld = function(languageCode) {
  if (languageCode === "en" || languageCode === "") {
    return `Hello World`;
  } else if (languageCode === "es" ) {
    return `Hola Mundo`;
  } else if (languageCode === "de" ) {
    return `Hallo Welt`;
  }
}

const testEnglish = helloWorld("en");
console.log(testEnglish);
const testSpanish = helloWorld("es");
console.log(testSpanish);
const testGerman = helloWorld("de");
console.log(testGerman);
const testBlank = helloWorld("");
console.log(testBlank);


// The Grade Assigner
// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F" (for example, scores above 90 receive an "A", scores between 90 and 80 receive a "B", and so on).
// Call that function for a few different scores and log the result to make sure it works.

const assignGrade = function(numberScore) {
  if (numberScore >= 90) {
    return "A";
  } else if (numberScore >= 80) {
    return "B";
  } else if (numberScore >= 70) {
    return "C";
  } else if (numberScore >= 60) {
    return "D";
  } else if (numberScore >= 0) {
    return "F";
  }
}

const grade80 = assignGrade(80);
console.log(grade80);
const grade40 = assignGrade(40);
console.log(grade40);
const grade99 = assignGrade(99);
console.log(grade99);


// The Pluralizer
// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

const thePluralizer = function(noun, number) {
  if (noun === "sheep") {
    return `${number} ${noun}.`;
  } else if(noun === "deer") {
    return `${number} ${noun}.`;
  } else if(noun === "fish") {
    return `${number} ${noun}.`;
  } else if(noun === "geese") {
    return `${number} ${noun}.`;
  } else if(noun === "moose") {
    return `${number} ${noun}.`;
  } else if (number === 1) {
    return `${number} ${noun}.`;
  } else if (number > 1) {
    return `${number} ${noun}s.`;
  }
}

const dog2 = thePluralizer("dog", 2);
console.log(dog2);
const deer7 = thePluralizer("deer", 7);
console.log(deer7);
