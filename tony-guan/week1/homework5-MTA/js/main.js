

let stopsArray = [];

// const lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];

const lines = {

  N : ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  L : ['8th', '6th', 'Union Square', '3rd','1st'],
  6 : ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
};

// singleLineTrip('N', '34th', '8th');
// lines['N']

// Let's try a trip on Line N, visiting all stations

const singleLineTrip = function(lineName, startStation, endStation){
  // console.log(lineName, startStation, endStation);

  const lineStations = lines[lineName];  // lines.N
  // console.log( 'stations', lineStations );

  const startIndex = lineStations.indexOf( startStation );
  const endIndex = lineStations.indexOf( endStation );

  // forwards direction

  // To make this work in reverse direction?
  if( startIndex < endIndex ){
    for(let i = startIndex; i <= endIndex; i++ ){
      console.log( lineStations[i] );
    }
    // forward direction
  } else {
    // reverse direction
    for(let i = startIndex; i >= endIndex; i-- ){
      console.log( lineStations[i] );
    }
  }

};


// How the user runs our code:

// singleLineTrip('N', '8th', '34th');
//
// singleLineTrip('L', '1st', '8th');

singleLineTrip( 'N', 'Times Square')

singleLineTrip('6', 'Grand Central')

const doubleLineTrip = function (startLineName, startStation, endLineStation, endStation){

};

// singleLineTrip('L', '6th', '3rd');
