const mtn = {
    n: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    l: [ "8th", "6th", "Union Square", "3rd", "1st" ],
    six: [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}
//Prompt User to enter
const promptUser = function(){
  console.log(`Please enter your embarking line (n, l, or six) and stop and your destination line and stop`);
}
//Log trip Plan
const tripPlan = function (line1, stop1, line2, stop2) {
    //display the users start and end destination
    console.log(`You would like to travel from line ${line1} stop ${stop1} to line ${line2} stop ${stop2}`);
    // prompt that their reccomended route is:
    console.log(`The recommended route is:`);

    //if the lines are equal, print the journey from the start to end point.
    let indexNumStop1 = mtn.n.indexOf(stop1);
    let indexNumStop2 = mtn.n.indexOf(stop2) + 1;

    if (line1 === "N" && line2 === "N" && indexNumStop1 < indexNumStop2) {
    let journeySingleLine = mtn.n.slice(indexNumStop1,indexNumStop2);
    console.log(`You need to take the n line through the following stops ${journeySingleLine}`);
    console.log(`No changes`);
    } else {
    let indexNumStop1 = mtn.n.indexOf(stop1) + 1;
    let indexNumStop2 = mtn.n.indexOf(stop2);
    const journeySingleLine2 =  mtn.n.slice(indexNumStop2, indexNumStop1);
    let reverse = journeySingleLine2.reverse();
    console.log(`You need to take the n line through the following stops ${reverse}`);
  }
}

promptUser();
console.log(tripPlan("N", "34th", "N", "Times Square"));


//   else if (line1 === "l" && line2 === "l" && indexNumStop1 < indexNumStop2) {
//     let indexNumStop1 = mtn.l.indexOf(stop1);
//     let indexNumStop2 = mtn.l.indexOf(stop2) + 1;
//     let journeySingleLine3 = mtn.l.slice(indexNumStop1,indexNumStop2);
//     console.log(`You need to take the ${line1} line through the following stops ${journeySingleLine3}`);
//     console.log(`No changes`);
//
//   } else if (line1 === "l" && line2 === "l" && indexNumStop1 > indexNumStop2) {
//     let indexNumStop1 = mtn.l.indexOf(stop1) + 1;
//     let indexNumStop2 = mtn.l.indexOf(stop2);
//     const journeySingleLine4 =  mtn.l.slice(indexNumStop2, indexNumStop1);
//     let reverse = journeySingleLine4.reverse();
//     console.log(`You need to take the ${line1} line through the following stops ${reverse}`);
//
//   } else if (line1 === "six" && line2 === "six" && indexNumStop1 < indexNumStop2) {
//     let indexNumStop1 = mtn.six.indexOf(stop1);
//     let indexNumStop2 = mtn.six.indexOf(stop2) + 1;
//     let journeySingleLine5 = mtn.six.slice(indexNumStop1,indexNumStop2);
//     console.log(`You need to take the ${line1} line through the following stops ${journeySingleLine5}`);
//     console.log(`No changes`);
//
// } else if (line1 === "six" && line2 === "six" && indexNumStop1 > indexNumStop2) {
//   let indexNumStop1 = mtn.six.indexOf(stop1) + 1;
//   let indexNumStop2 = mtn.six.indexOf(stop2);
//   const journeySingleLine6 =  mtn.six.slice(indexNumStop2, indexNumStop1);
//   let reverse = journeySingleLine6.reverse();
//   console.log(`You need to take the ${line1} line through the following stops ${reverse}`);
// }
// }



// //find stop in line2 and log remaining route to stop2
//  console.log (`change at Union square`);
//  console.log (`Contine on the follwing stops on the ${line2} line ${     }`);
//
//
// //print the total number of stops
//  console.log (`Total number of stops ${     }`)
// }



// //finding index number of
// if (line1 === "N") {
//     const indexOfStop1N = mtn.nLine.indexOf(stop1);
//   } else if (line1 === "L") {
//     const indexOfStop1L = mtn.lLine.indexOf(stop1);
//   } else (line1 === "6") {
//     const indexOfStop16 = mtn.sixLine.indexOf(stop1);
// }
//
// //findin the index number of stop 2.
// if (line2 === "N") {
//       const indexOfStop2N = mtn.nLine.indexOf(stop2);
//     } else if (line1 === "L") {
//       const indexOfStop2l = mtn.lLine.indexOf(stop2)
//     } else if (line1 === "6") {
//       const indexOfStop16 = mtn.sixLine.indexOf(stop2);
//     }
