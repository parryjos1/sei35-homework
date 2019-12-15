// // var rainNum = 12
// // if rainNum % 3 === 0
// //   console.log('Pling');
// // if rainNum % 5 === 0
// //   console.log('Plang');
// // if rainNum % 7 === 0{
// //   console.log('Plong')
// // if else
// //   console.log(+rainNum+)
// // // const tellFortune = function (numberOfChildren, partnersName, geographicLocation, jobTitle) {
// // // const output = 'you will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids.'
// // //   result = output
// // //   return output;
// // // };
// // //
// // // const fortune1 = tellFortune(3, 'Debbie','Hawaii','proSurfer',);
// // // console.log(tellFortune)
// // // ;
// // //
// // //
// // //
// // //
// // //
// // const addNumbers = function ( num1, num2 ) {
// //   result = num1 + num2;
// //   return result;
// // }
// // const sum = addNumbers(5,2);
// //
// // sum;
//
//
// const rainNum = 12
//   if rainNum (% 3 === 0)
//     console.log('Pling');
//   if rainNum % 5 === 0
//     console.log('Plang');
//   if rainNum % 7 === 0{
//     console.log('Plong')
//   if else
//     console.log(+rainNum+)
//
// //
// function raindropCount(num) {
//   if (num === 3) {
//     return ('plink')
//   }
//   if (num === 5) {
//     return ('plang')
//   }
//   if (num === 7) {
//     return ('plong')
//   }
//   else {
//     return ('test')
// }

//Easy to read Raindrop solution


const raindrops = function ( num ) {

    let string = '';

    if ( num % 3 === 0) {

        string = string + 'Pling '
    }

    if ( num % 5 === 0) {

        string = string + 'Plang '
    }

    if ( num % 7 === 0) {

        string = string + 'Plong '
    }

    if (string.length === 0) {
      string += num;
    }
    return string

};

console.log(raindrops(3));
console.log(raindrops(15));
console.log(raindrops(42));



const raindrops = function ( num ) {

    let string = '';

    if ( num % 3 === 0) {

        string = string + 'Pling '
    }

    if ( num % 5 === 0) {

        string = string + 'Plang '
    }

    if ( num % 7 === 0) {

        string = string + 'Plong '
    }

    if (string.length === 0) {
      string += num;
    }
    return string

};

console.log(raindrops(3));
console.log(raindrops(15));
console.log(raindrops(42));
