

// Creating lines array of objects for 3 different N, L and 6 train lines.

const lines = { N : ['Times Square','34th','28th','23rd','Union Square','8th'],
 L : ['8th', '6th', 'Union Square', '3rd', '1st'],
 6 : ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']};

// Declaring stopsArray to hold different stops in this array.
let stopsArray = [];

// suggestSingleTrip function is called upon same line travel and returns stops array in the desired journey.
const suggestSingleTrip = function(line, start, stop) {

  if(line.indexOf(start) > line.indexOf(stop)){
    line = line.reverse(); // reverse function reverses the line array when starting point is ahead of stopping point.
  }

// slice function is used to return stops between start and end.
  stopsArray = line.slice(line.indexOf(start)+1, line.indexOf(stop)+1);
  return stopsArray;
};

// Main function suggestTrip provides details of stops and number of stops in total between boarding station and alighting station.
const suggestTrip = function(boardingLine, boardingStation, alightingLine, alightingStation) {

  let count = 0;

  // Creating bLine and aLine arrays to hold elements of boardingLine and alightingLine.
  const bLine = lines[boardingLine];
  const aLine = lines[alightingLine];
  const intersection = "Union Square";

  // If Boarding line and alighting line are same, below code will be executed.
  if( boardingLine === alightingLine ) {
    stopsArray = suggestSingleTrip(bLine, boardingStation, alightingStation);
    console.log(`You must travel through following stops on the ${boardingLine} line : ${stopsArray.join(', ')}`);
    console.log(`Your trip has ${stopsArray.length} stop(s).`);
    return;
  }

  // Calling suggestSingleTrip function on Boarding line between Boarding station and Intersection point.
  stopsArray =  suggestSingleTrip(bLine, boardingStation, intersection);
  count = stopsArray.length;

  console.log(`You must travel through following stops on the ${boardingLine} line : ${stopsArray.join(', ')}`);
  console.log(`Change at Union Square.`);

  // Emptying the stopsArray to hold alighting line values in next line.
  stopsArray = [];
  stopsArray =  suggestSingleTrip(aLine, intersection, alightingStation);
  count += stopsArray.length; // count gives total number of stops in Boarding line and Alighting line.

  console.log(`Your journey continues through following stops on the ${alightingLine} line : ${stopsArray.join(', ')}`);
  console.log(`Your trip has ${count} stop(s).`);
};


// Below are set of window prompts for user to enter Boarding line, Boarding station, alighting line and alighting station details.
let boardingLine = window.prompt(`Welcome! Please enter Boarding Line`);
while(!(boardingLine in lines)) { // checks if user entered correct Boarding line, and prompts to re-enter if incorrect.
    boardingLine = window.prompt(`Please enter valid Boarding Line`);
}

let boardingStation = window.prompt(`Please enter Boarding station`);
while(lines[boardingLine].indexOf(boardingStation) === -1) {
  boardingStation = window.prompt(`Please enter valid Boarding station`);
}

let alightingLine = window.prompt(`Now, please enter Alighting Line`);
while(!(alightingLine in lines)) {
    alightingLine = window.prompt(`Please enter valid Alighting Line`);
}

let alightingStation  = window.prompt(`Please enter Alighting station`);
while(lines[alightingLine].indexOf(alightingStation) === -1) {
  alightingStation = window.prompt(`Please enter valid Alighting station`);
}

console.log(`Here are your trip details : ${'\n'}`);
//calling main function suggestTrip by passing above user inputs.
suggestTrip(boardingLine,boardingStation,alightingLine,alightingStation);
