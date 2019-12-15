// // const tellFortune = function (numberOfChildren, partnersName, geographicLocation, jobTitle) {
// // const output = 'you will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids.'
// //   result = output
// //   return output;
// // };
// //
// // const fortune1 = tellFortune(3, 'Debbie','Hawaii','proSurfer',);
// // console.log(tellFortune)
// // ;
// //
// //
// //
// //
// //
// const addNumbers = function ( num1, num2 ) {
//   result = num1 + num2;
//   return result;
// }
// const sum = addNumbers(5,2);
//
// sum;


const tellFortune = function( numberOfChildren, partnersName, geographicLocation, jobTitle ){
  const output = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`;
  return output;
};

const fortune1 = tellFortune(2, 'Debbie', 'Hawaii', 'pro surfer');
const fortune2 = tellFortune(5, 'Izzie', 'Sydney', 'football player');
const fortune3 = tellFortune(3, 'Tavo', 'Iran', 'head chef');

console.log(fortune1);
console.log(fortune2);
console.log(fortune3);

//
