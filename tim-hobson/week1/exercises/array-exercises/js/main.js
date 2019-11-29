// Exercises: Arrays
// Your top choices
// Create an array to hold your top five choices of something (colors, presidents, whatever). If you choose movies, the right top choice is "Satantango".
//

let favColors = [
  'Pink',
  'Blue',
  'Orange',
  'Red',
  'Black'
];

console.log(favColors);

// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number.
//
// My way with an if statement.
// for ( let i = 0; i < favColors.length; i++ ) {
//   if (i === 0) {
//     suffix = 'st';
//   } else if (i === 1) {
//     suffix = 'nd';
//   } else if ( i === 2) {
//     suffix = 'rd';
//   } else {
//     suffix = 'th';
//   }
//   console.log( `My ${i + 1}${suffix} choice.` );
// }

//Lukes way with an array.


const suffixes = [ 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th']
for ( let i = 0; i < favColors.length; i++ ) {
  console.log( `My ${i + 1}${suffixes[ i ]} choice.` );
}

//ramteen's function that should work indefinitely
// function getSuffix(n) {
//   if (n >= 11 && n <= 13) {
//       return "th";
//   }
//   switch (n % 10) {
//       case 1:  return "st";
//       case 2:  return "nd";
//       case 3:  return "rd";
//       default: return "th";
//   }
// }

  // console.log( favColors[i] );
// console.log( `My ${i + 1}(suffix) choice.` );


//testing suffix if
// };
// j = 2
//
// if (j === 1) {
//   suffix = 'st';
// } else if (j === 2) {
//   suffix = 'nd';
// } else if ( j === 3) {
//   suffix = 'rd';
// } else {
//   suffix = 'th';
// }
//
// console.log(suffix);
//
