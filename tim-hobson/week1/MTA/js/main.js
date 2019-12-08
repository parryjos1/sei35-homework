// MTA Lab

{
  // Objectives:
  // Apply your knowledge of Javascript to solve a real world problem. Get really good at array manipulation and JS data structures.
  // Activity - Create a program that models a simple subway system.
  // The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
  // planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
  // There are 3 subway lines:
  // The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
  // The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
  // The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
  // All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you might need to differentiate this when you name your stops in the arrays.)
  // console.log() shows output similar to this:
  // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
  // "Change at Union Square."
  // "Your journey continues through the following stops: 23rd, 28th, 33rd."
  // "7 stops in total."
  // const planTrip = function ( startLine, startStation, endLine, endStation ) {
    // Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
    // Your trip planner must work in either direction, i.e. planTrip('N', 'Times Square', '6', '33rd') (starting at Times Square) should work as well as the reverse trip planTrip('6', '33rd', 'N', 'Times Square') (starting at 33rd).
  }
// if any input !== null then error

stations = {
  'N' : ['Times Square','34th','28th','23rd','Union Square','8th'],
  'L' : ['8th','6th','Union Square','3rd','1st'],
  '6' : ['Grand Central','33rd','28th','23rd','Union Square','Astor Place']
};

// ok, maybe getting index is first?
//
// const dataCheck = function (originLine, originStation, destinationLine, destinationStation) {
//   if (stations[originLine] === undefined) {
//     console.log(`Line ${originLine} is not a valid Line, please try again.`)
//   // } else if (stations[originLine][originStation] === undefined) {
//   //   console.log(`${originStation} is not on Line ${originLine}, please try again.`);
//   } else if (stations[destinationLine] === undefined) {
//     console.log(`Line ${destinationLine} is not a valid Line, please try again.`);
//   // } else if (stations[destinationLine][destinationStation] === undefined) {
//   //   console.log(`${destinationStation} is not on Line ${originLine}, please try again.`);
//   } else {
//     return `Valid Trip`
//   }
// }
// dataCheck('6', 'Grand Central', 'T', 'Union Square')
// dataCheck('F', 'Grand Central', 'L', 'Union Square')
// dataCheck('6', 'Grand Central', 'L', 'Union Square')
// dataCheck('6', 'Grand Central', 'L', 'Union Square')
// get line object

const sameLineTravel = function (destinationLine, originStation, destinationStation) {
  // changed condition from originLine to destLine as it fixes issues with UnionSquare and incorrectlines being put in - MIGHT BE ABLE TO FIX WITH FINDING INDEXES FIRST
  console.log(`You're on Line ${destinationLine} and want to go from ${originStation} to ${destinationStation}.`);
  startIndex = stations[destinationLine].indexOf( originStation ) // take originStation, and find it's index in destinationLine
  // console.log(startIndex + ' starting index'); // printing to test
  endIndex = stations[destinationLine].indexOf( destinationStation ) // take destinationStation and find it's index.
  // console.log(endIndex + ' ending index'); // printing to test
    if (startIndex < endIndex) { // need an if statement if we want to go backwards
      numberOfStops = (endIndex+1) - (startIndex+1) // this doesn't matter for forward trips, will matter for backwards.
      // console.log(numberOfStops + ' number of stops')
      // travelledStations = [] // wrong place?
      for (var i = startIndex; i < endIndex ; i++) { // loop through array, printing out each station
        // console.log(stations[destinationLine][i+1]); // +1 to show the stop you're going to, as requested. Won't show where you started.
      travelledStations.push(stations[destinationLine][i+1]); // push to array to print?
      }
    } else if (startIndex > endIndex) { // if it's a backwards trip.
      numberOfStops = (startIndex+1) - (endIndex+1) // can't minus 0. maybe only need on endIndex?
      // console.log(numberOfStops + ' number of stops') // shows number of stops (going to need to store these later)
      for (var i = startIndex; i > endIndex; i--) {
        // console.log(stations[destinationLine][i-1])
        travelledStations.push(stations[destinationLine][i-1]); // push to array to print?
      }
    }
  if (numberOfStops > 1) {
    console.log(`You must travel through the following stops on the Line ${destinationLine}: ${travelledStations.join(', ')}.`);
    console.log(`${numberOfStops} stops in total.`);
  } else if (numberOfStops === 1) { // can i be smarter and get rid of this, stops printing plural if one stop.
    console.log(`You must travel through the following stop on the Line ${destinationLine}: ${travelledStations.join(', ')}.`);
    console.log(`${numberOfStops} stop in total.`);
  }
}

const getToInterchange = function (originLine, originStation, destinationLine) {
  console.log(`You're at ${originStation} on Line ${originLine} You have to change from Line ${originLine} to Line ${destinationLine}.`);
  startIndex = stations[ originLine ].indexOf( originStation ) // take originStation on originLine , and find it's index.
  // console.log(startIndex + ' starting index'); // printing to test
  endIndex = stations[originLine].indexOf("Union Square") // take Union Square(the interchange) and find it's index.
  // console.log(endIndex + ' ending index'); // printing to test
    if (startIndex < endIndex) { // need an if statement if we want to go backwards
      numberOfStopsToInt = (endIndex+1) - (startIndex+1) // this doesn't matter for forward trips, will matter for backwards.
      // console.log(numberOfStopsToInt + ' number of stops')
      for (var i = startIndex; i < endIndex ; i++) { // loop through array, printing out each
      travelledStations.push(stations[originLine][i+1]); // push to array to print?
      // console.log(stations[originLine][i+1]); // +1 to show the stop you're going to, as requested. Won't show where you started.
      }
      // tripInfo = { Line: ()} // was thinking about what to return for data values. might not need.
    } else if (startIndex > endIndex) { // if it's a backwards trip.
      numberOfStopsToInt = (startIndex+1) - (endIndex+1) // can't minus 0. maybe only need on endIndex?
      // console.log(numberOfStopsToInt + ' number of stops') // shows number of stops (going to need to store these later)
      for (var i = startIndex; i > endIndex; i--) {
        travelledStations.push(stations[originLine][i-1]); // push to array to print?
        // console.log(stations[originLine][i-1])
      }
    }
  console.log(`You must travel through the following stops on the Line ${originLine}: ${travelledStations.join(', ')}.`);
  console.log(`Change at Union Square`);
  return numberOfStopsToInt // go to fromInterchangeToDest now, should I just put these together?
};

const fromInterchangeToDest = function (currentLine, destinationStation) {
  // console.log(`You're at Union Square on ${currentLine} interchange ready to go to ${destinationStation}`); // redundant
  startIndex = stations[currentLine].indexOf("Union Square") // take Union Square(the interchange) and find it's index.
  // console.log(startIndex + ' starting index'); // printing to test
  endIndex = stations[ currentLine ].indexOf( destinationStation ) // take destination on currentLine , and find it's index.
  // console.log(endIndex + ' ending index'); // printing to test
    if (startIndex < endIndex) { // need an if statement if we want to go backwards
      numberOfStopsIntToDest = (endIndex+1) - (startIndex+1) // this doesn't matter for forward trips, will matter for backwards.
      // console.log(numberOfStopsIntToDest + ' number of stops')
      for (var i = startIndex; i < endIndex ; i++) { // loop through array, printing out each station
        // console.log(stations[currentLine][i+1]); // +1 to show the stop you're going to, as requested. Won't show where you started.
      }
    } else if (startIndex > endIndex) { // if it's a backwards trip.
      numberOfStopsIntToDest = (startIndex+1) - (endIndex+1) // can't minus 0. maybe only need on endIndex?
      // console.log(numberOfStopsIntToDest + ' number of stops') // shows number of stops (going to need to store these later)
      for (var i = startIndex; i > endIndex; i--) {
        // console.log(stations[currentLine][i-1])
      }
    }
  console.log(`Your journey continues through the following stops: ${travelledStations.join(', ')}.`);
  console.log(`${numberOfStopsToInt + numberOfStopsIntToDest} stops in total.`); // no condition for plural coz interchange in always > 1

}

const planTrip = function ( originLine, originStation, destinationLine, destinationStation) {
  travelledStations = [];
  if (originLine === destinationLine) {
      sameLineTravel( destinationLine, originStation, destinationStation ) // this works!
    } else if ((originStation || destinationStation) === "Union Square") { // treating any Union Sqare destination as a Single Line
      sameLineTravel( destinationLine, originStation, destinationStation)
    } else {
      getToInterchange( originLine, originStation, destinationLine )
      fromInterchangeToDest( destinationLine, destinationStation)
    }
  console.log(`------------`); // just making trips easier to seperate in log.
};

planTrip('6', 'Grand Central', 'N', '8th')
planTrip('L', '1st', 'L', '8th')
planTrip('L', '8th', 'L', '1st')
planTrip('6', 'Grand Central', '6', '33rd')
planTrip('L', '1st', 'L', '3rd')
planTrip('N', `Times Square`, 'L', '1st')
planTrip('6', 'Union Square', 'L', '8th')
planTrip('N', `Times Square`, 'L', '1st')
planTrip('6', '33rd', 'L', 'Union Square') // going to do a dodge fix, and make any travel to Union a single line ttrip





const getIndexData = function (originLine, originStation, destinationLine, destinationStation) {
  // make an object with startIndex, endIndex?
  for (var i = 0; i < stations[originLine].length; i++) {
    if (stations[originLine][i] === destinationStation) { // this searches if the originStation is on the originLine - so don't need a change
      console.log('Hello');
      // startIndex = stations[originLine].indexof(originStation) - stations[originLine].length;
    }
  }
  startIndex = stations[originLine].indexOf( originStation ) + 1 // take originStation, and find it's index in destinationLine
  console.log(startIndex);
}

// getIndexData( '6', 'Grand Central', 'L', 'Union Square');






const testSameLineTravel = function (destinationLine, originStation, destinationStation) { // changed condition from originLine to destLine as it fixes issues with UnionSquare and incorrectlines being put in - MIGHT BE ABLE TO FIX WITH FINDING INDEXES FIRST
  console.log(`You're on Line ${destinationLine} and want to go from ${originStation} to ${destinationStation}.`);
  startIndex = stations[destinationLine].indexOf( originStation ) // take originStation, and find it's index in destinationLine
  // console.log(startIndex + ' starting index'); // printing to test
  endIndex = stations[destinationLine].indexOf( destinationStation ) // take destinationStation and find it's index.
  // console.log(endIndex + ' ending index'); // printing to test
    if (startIndex < endIndex) { // need an if statement if we want to go backwards
      numberOfStops = (endIndex+1) - (startIndex+1) // this doesn't matter for forward trips, will matter for backwards.
      // console.log(numberOfStops + ' number of stops')
      // travelledStations = [] // wrong place?
      for (var i = startIndex; i < endIndex ; i++) { // loop through array, printing out each station
        // console.log(stations[destinationLine][i+1]); // +1 to show the stop you're going to, as requested. Won't show where you started.
      travelledStations.push(stations[destinationLine][i+1]); // push to array to print?
      }
    } else if (startIndex > endIndex) { // if it's a backwards trip.
      numberOfStops = (startIndex+1) - (endIndex+1) // can't minus 0. maybe only need on endIndex?
      // console.log(numberOfStops + ' number of stops') // shows number of stops (going to need to store these later)
      for (var i = startIndex; i > endIndex; i--) {
        // console.log(stations[destinationLine][i-1])
        travelledStations.push(stations[destinationLine][i-1]); // push to array to print?
      }
    }
  if (numberOfStops > 1) {
    console.log(`You must travel through the following stops on the Line ${destinationLine}: ${travelledStations.join(', ')}.`);
    console.log(`${numberOfStops} stops in total.`);
  } else if (numberOfStops === 1) { // can i be smarter and get rid of this, stops printing plural if one stop.
    console.log(`You must travel through the following stop on the Line ${destinationLine}: ${travelledStations.join(', ')}.`);
    console.log(`${numberOfStops} stop in total.`);
  }
}

  // THINKING

  // should i check the originLine for destinationStation?
  // could copying the array to print faster?
  // i should be able to do any change by checking each station in the array to match and store the num of stops and use the lowest one

  // dont need destijation line? // don't need any line? just station?
  // first check if on our line
  // check whichclines it is on
  // store tgat tor above loops
  // figure out multiple change logic later
  //

//      MUCH LATER ON
      // how would this translate to more than 1 change?
      // find all lines with that station? then find the shortest num of stop?
      // so lineA wynyard marketplace central townhall
      //lineB st james central townhall greensquare
      // lineC northsyd central redfern mascot airport greensuar
      // lineD central parra blacktown penrith
      // wyn to greensquare
      // no other line has marketplace
      // both b and c have central
      // check if b c and d go to greensw
      // d doesnt so error
      // b and c do
      // check num stops // b is 2, 4.
      // do rest of trip on line woth less stop
      // if there's an error with transfers, maybe do something like
        //  IF destinationLine is on originLine then do it as a SINGLE LINE TRIP, not sure if need loops or not.


// Hints:
{
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Depending on what kind of data structures you use to represent the lines and stations, you might have to make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
}
