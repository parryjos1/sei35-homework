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

const trainLines = {
    n: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    l: ["8th", "6th", "Union Square", "3rd", "1st"],
    six: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  };

//console.log(trainLines.n[1]);

//determining if user needs to change train line
const changeLine = (line1, line2) => line1 !== line2;
// const unionSquareStartIndex = lines[startLine].indexOf("Union Square");
// const unionSquareEndIndex = lines[endLine].indexOf("Union Square");


 const tripPlanner = function(startLine, startStation, endLine, endStation){
   // Work out whether this is actually a single-line trip or not
   if (startStation === endStation) {
  singleLineTrip(startLine, startStation, endStation);
   } else {
     // startStation to interchange station "Union Square"

      }


     // change line at Union Square
     // interchange to endStation
   };






  const singleLineTrip = function (line, startStation, endStation) {

   const currentLine = trainLines[line]; // Line passagers are travelling on.

   const startIndex = currentLine.indexOf(startStation);
   const endIndex = currentLine.indexOf(endStation);

   const stops = [];

   if (startIndex >= endIndex ) {
     // moving backwards
     for(let i = startIndex - 1; i >= endIndex; i--){ //returns start stn stops till the designated end station
       const currentStop = currentLine[i];
       stops.push( currentStop );
     }

    } else {
      for (let i = startIndex + 1; i <= endIndex; i++) { //returns start stn stops till the designated end station
         const currentStop = currentLine[i];
         stops.push( currentStop );
       }
     }

    console.log( stops.join(', ') );
};
//
//
//  lineTrip('34th', '33rd');

// singleLineTrip('n', '23rd', 'Times Square');

tripPlanner('n', '23rd', '6', 'Astor Place');

tripPlanner('n', '23rd', 'n', '8th');
