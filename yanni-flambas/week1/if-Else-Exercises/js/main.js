// //What number is bigger?
// //Write an if statement that tests two numbers (numOne and numTwo), and prints the biggest number
// const numOne = 6
// const numTwo = 12
// if (numOne>numTwo){
// } if (true){
//   console.log('numOne is greater');
// } if (false){
//   console.log('numTwo is greater');
// }
// // else (numTwo>numOne)
// // if (true){
// //   console.log('numTwo is greater');
// // }
// // else console.log('They are Equal');

//Exercise 1: What number is bigger     attempt 2  Successful
const numOne = 60
const numTwo = 12
  console.log('Number One: ' + numOne)
  console.log('Number Two: ' + numTwo)
if (numOne > numTwo) {
  console.log('Number One is bigger! ' + numOne + ' is greater than ' + numTwo +'!');
} else {
  console.log('Number Two is bigger! ' + numOne + ' is less than ' + numTwo +'!');
}


//Exercise 2: The World Translator    Write an if statement that writes Hello World in different languages (i.e. if the language is english, write Hello World, if the language is French write something romantic)
//
const country = function (languageSpoken){
const output = 'Hello ${languageSpoken}-man!';
return output;

const english = country('english');
const spanish = country('spanish');
const french = country('french');
const greek = country('greek');
console.log(country)
;

const findCountry = function()
