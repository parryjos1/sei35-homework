// Exercises: For loops
// The even/odd reporter
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
//

// for (var i = 0; i <= 20; i++) {
//
//   if (i % 2 === 0) {
//
//     console.log(`${i} is even.`);
//
// // can be either of the following statements
//   // } else if (i % 2 !== 0) {
//   } else {
//
//     console.log(`${i} is odd.`);
//   }
// }

// faster way
// for (var i = 0; i <= 20; i++) {
//
//   let status = '';
//
//   if ( i % 2 === 0 ) {
//
//     status = 'even';
//
//   } else {
//
//     status = 'odd';
//
//   console.log(`${i} is ${status}`);
//
// }

// an even faster way

for (var i = 0; i <= 20; i++) {

  let status = 'odd';

  if ( i % 2 === 0 ) {

    status = 'even';

  }

  console.log(`${i} is ${status}`);

}


// Multiplication Tables
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
//


// my original slow way
// for (var i = 0; i <= 10; i++) {
//
//   result = i * 9;
//
//   console.log(`${i} * 9 = ${result}`);
//
// }


// a faster way - is to put the math into the console log
for (var i = 0; i <= 10; i++) {

  console.log(`${i} * 9 = ${i * 9}`);

}


// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).


// my slow way

// for (var i = 0; i <= 10; i++) {
//
//   for (var x = 0; x <= 10; x++) {
//
//     result = i * x;
//
//   console.log(`${i} * ${x} = ${result}`);
//
// }
//
// }

//Luke's faster way - also code conventions say after i we should use j, etcetc
for (var i = 0; i <= 10; i++) {

  for (var j = 0; j <= 10; j++) {

  console.log(`${i} * ${j} = ${i * j}`);

  }

}

// creating a highlight for multiple of tens
for (var i = 0; i <= 10; i++) {

  for (var j = 0; j <= 10; j++) {
    const product = i * j;
    if ( product % 10 === 0 ) {
      console.log(`%cMULTIPLE OF TEN ${i} * ${j} is ${product}.`);
    }

  console.log(`${i} * ${j} = ${product}`);

  }

}

//
// The Grade Assigner
// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.
//
//
// for (var i = 0; i <= 100; i++) {
//
//   let grade = "";
//
//   if (i >= 90) {
//     grade = "A";
//
//   } else if (i >= 80) {
//     grade = "B";
//
//   } else if (i >= 70) {
//     grade = "C";
//
//   } else if (i >= 60) {
//     grade = "D";
//
//   } else if (i >= 0) {
//     grade = "F";
//
//   }
//
//   console.log(`For ${i}, you got a ${grade}.`);
//
// }

// refactoring from my original Grade

const assignGrade = function ( score ) {

  if ( score >= 90 ) {
    return 'A';
  }

  if (score >= 80 ) {
    return 'B';
  }

  if (score >= 70 ) {
    return 'C';
  }

  if (score >= 60 ) {
    return 'D';
  }

  else {

  return 'F';

  }
}

for (var i = 0; i < 100; i++) {

  const grade = assignGrade( i );
  console.log(`The grade for ${i} is ${assignGrade(i)}.`);

}
