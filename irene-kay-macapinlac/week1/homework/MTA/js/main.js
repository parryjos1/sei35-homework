// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you might need to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Your trip planner must work in either direction, i.e. planTrip('N', 'Times Square', '6', '33rd') (starting at Times Square) should work as well as the reverse trip planTrip('6', '33rd', 'N', 'Times Square') (starting at 33rd).


//print number of Stops
//print stops in order that they will pass through or change at
//.map JS
//.indexOf(train-stop) to find the position of train stop
//const planSingleLineTrip = function (lineName, startStation, endStation) {
//};

// const trainLines = {
//     N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
//     L: ["8th", "6th", "Union Square", "3rd", "1st"],
//     6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]

const planTrip = ['Times Square', '34th', '28th', '33rd'];
//loop to log all the stops


console.log('You must travel through the following stops on the N line: ');

 // const startStation = 'N';
 //
 // const endStation = '28th';


 const planSingleLineTrip = function (startStation, endStation) {

   const startIndex = planTrip.indexOf(startStation);
   const endIndex = planTrip.indexOf(endStation);
   const stops = [];

   if (startIndex >= endIndex ) {
     // moving backwards
     for( let i = startIndex - 1; i >= endIndex; i-- ){ //returns start stn stops till the designated end station
       const currentStop = planTrip[i];
       stops.push( currentStop );
     }

    } else {
      for (let i = startIndex + 1; i <= endIndex; i++) { //returns start stn stops till the designated end station
         const currentStop = planTrip[i];
         stops.push( currentStop );
       }
     }

    console.log( stops.join(', ') );
};

 planSingleLineTrip('34th', '33rd');
planSingleLineTrip('33rd', 'Times Square');

 // for (let i = startIndex + 1; i <= endIndex; i++) { //returns start stn stops till the designated end station
 //   const currentStop = planTrip[i];
 //   // console.log( currentStop  );
 //   stops.push( currentStop );

// }
//
// //logs train stops
// for (let i = 0; i < planTrip.length; i++) {
//   const currentStop = planTrip[i];
//   // console.log( currentStop  );
//   stops.push( currentStop );
//
// }
// // Print out joined version of the new stops array
// // const output = stops.join(', ');
//
 //console.log( stops.join(', ') );
//
// // const howManyStops = planTrip.length;
// // for (var i = 0; i < howManyStops; i++) {
// //  //console.log(howManyStops);
// //  console.log(`${howManyStops} stops in total`);
// // }//loop that prints how many stops, though it prints it out 5x
//

// -- PLAN SINGLE LINE TRIP

// const startStation = '';
//
// const endStation = [];
//   stops.push();
//
// const startIndex = planTrip.indexOf(startStation);
//
// const endIndex = planTrip.indexOf(endStation);
//
// const planSingleLineTrip = function (lineName, startStation, endStation) {
//   console.log(lineName, startStation, endStation);
// };
