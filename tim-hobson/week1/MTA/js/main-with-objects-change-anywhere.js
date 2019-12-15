// lets try change anywhere

const mta = {

    // would it be better for stations to be external/global like a database?
  stations: {
    'N' : ['Times Square','34th','28th','23rd','Union Square','8th'],
    'L' : ['8th','6th','Union Square','3rd','1st'],
    '6' : ['Grand Central','33rd','28th','23rd','Union Square','Astor Place']
  },

  checkInput: function ( originLine, originStation, destinationLine, destinationStation ) {
    dataError = []
    if (this.stations[originLine] === undefined) { // check to see if any line matches originLine
      dataError.push( 'Starting Line ' + originLine )
      dataError.push( 'Starting Station ' + originStation )
      } else if ( this.stations[originLine].indexOf( originStation ) === -1 ) { // check to see if originStation on originLine exists
        dataError.push( 'Starting Station ' + originStation )
      } if ( this.stations[destinationLine] === undefined ) { // check to see if any line matches destinationLine
        dataError.push( 'Destination Line ' + destinationLine )
        dataError.push( 'Destination Station ' + destinationStation )
      } else if ( this.stations[destinationLine].indexOf(destinationStation) === -1) { // check to see if destinationStation on destinationLine exists
        dataError.push( 'Destination Station ' + destinationStation )
      }
    if (dataError.length > 0) {
      console.log(`The following information is incorrect: ${dataError.join(', ')}.\nPlease try again.`) // how to add the station if the line is incorrect too
      // maybe have user input and search array for line first, so they can't go any further. makes the rest of the errors redundant in a way otherwise.
      return false
    } else if (dataError.length === 0) {
      return true
}
},

  getTripData: function ( originLine, originStation, destinationLine, destinationStation ) {
    if (true) {

    }

  },

  sameLineTravel: function (destinationLine, originStation, destinationStation) {
    console.log(`You're on Line ${destinationLine} and want to go from ${originStation} to ${destinationStation}.`);
    startIndex = this.stations[destinationLine].indexOf( originStation ) // take originStation, and find it's index in destinationLine
    endIndex = this.stations[destinationLine].indexOf( destinationStation ) // take destinationStation and find it's index.
      if (startIndex < endIndex) { // need an if statement if we want to go backwards
        numberOfStops = (endIndex+1) - (startIndex+1) // this doesn't matter for forward trips, will matter for backwards.
        for (var i = startIndex; i < endIndex ; i++) { // loop through array, printing out each station
        travelledStations.push(this.stations[destinationLine][i+1]); // push to array to print?
        }
      } else if (startIndex > endIndex) { // if it's a backwards trip.
        numberOfStops = (startIndex+1) - (endIndex+1) // can't minus 0. maybe only need on endIndex?
        for (var i = startIndex; i > endIndex; i--) {
          travelledStations.push(this.stations[destinationLine][i-1]); // push to array to print?
        }
      }
    if (numberOfStops > 1) {
      console.log(`You must travel through the following stops on the Line ${destinationLine}: ${travelledStations.join(', ')}.`);
      console.log(`${numberOfStops} stops in total.`);
    } else if (numberOfStops === 1) { // can i be smarter and get rid of this, stops printing plural if one stop.
      console.log(`You must travel through the following stop on the Line ${destinationLine}: ${travelledStations.join(', ')}.`);
      console.log(`${numberOfStops} stop in total.`);
    }
  },

  getToInterchange: function (originLine, originStation, destinationLine) {
    console.log(`You're at ${originStation} on Line ${originLine} You have to change from Line ${originLine} to Line ${destinationLine}.`);
    startIndex = this.stations[ originLine ].indexOf( originStation ) // take originStation on originLine , and find it's index.
    endIndex = this.stations[originLine].indexOf("Union Square") // take Union Square(the interchange) and find it's index.
      if (startIndex < endIndex) { // need an if statement if we want to go backwards
        numberOfStopsToInt = (endIndex+1) - (startIndex+1) // this doesn't matter for forward trips, will matter for backwards.
        for (var i = startIndex; i < endIndex ; i++) { // loop through array, printing out each
        travelledStations.push(this.stations[originLine][i+1]); // push to array to print?
        }
      } else if (startIndex > endIndex) { // if it's a backwards trip.
        numberOfStopsToInt = (startIndex+1) - (endIndex+1) // can't minus 0. maybe only need on endIndex?
        for (var i = startIndex; i > endIndex; i--) {
          travelledStations.push(this.stations[originLine][i-1]); // push to array to print?
        }
      }
    console.log(`You must travel through the following stops on the Line ${originLine}: ${travelledStations.join(', ')}.`);
    console.log(`Change at Union Square`);
    return numberOfStopsToInt // go to fromInterchangeToDest now, should I just put these together?
  },

  fromInterchangeToDest: function (currentLine, destinationStation) {
    startIndex = this.stations[currentLine].indexOf("Union Square") // take Union Square(the interchange) and find it's index.
    endIndex = this.stations[ currentLine ].indexOf( destinationStation ) // take destination on currentLine , and find it's index.
      if (startIndex < endIndex) { // need an if statement if we want to go backwards
        numberOfStopsIntToDest = (endIndex+1) - (startIndex+1) // this doesn't matter for forward trips, will matter for backwards.
        for (var i = startIndex; i < endIndex ; i++) { // loop through array, printing out each station
        }
      } else if (startIndex > endIndex) { // if it's a backwards trip.
        numberOfStopsIntToDest = (startIndex+1) - (endIndex+1) // can't minus 0. maybe only need on endIndex?
        for (var i = startIndex; i > endIndex; i--) {
        }
      }
    console.log(`Your journey continues through the following stops: ${travelledStations.join(', ')}.`);
    console.log(`${numberOfStopsToInt + numberOfStopsIntToDest} stops in total.`); // no condition for plural coz interchange in always > 1
  },

  planTrip: function ( originLine, originStation, destinationLine, destinationStation ) {
    travelledStations = [];
    tripData = {};
    if ((this.checkInput( originLine, originStation, destinationLine, destinationStation )) === true ){
      if (originLine === destinationLine) {
        this.sameLineTravel( destinationLine, originStation, destinationStation )
      } else if ((originStation || destinationStation) === "Union Square") { // treating any Union Sqare destination as a Single Line
        this.sameLineTravel( destinationLine, originStation, destinationStation)
      } else {
        this.getToInterchange( originLine, originStation, destinationLine )
        this.fromInterchangeToDest( destinationLine, destinationStation)
      }
    }
  console.log(`------------`); // just making trips easier to seperate in log.
  }

};

// // Complete trips to test
// mta.planTrip('6', 'Grand Central', 'N', '8th')
// mta.planTrip('L', '1st', 'L', '8th')
// mta.planTrip('L', '8th', 'L', '1st')
// mta.planTrip('6', 'Grand Central', '6', '33rd')
// mta.planTrip('L', '1st', 'L', '3rd')
// mta.planTrip('N', `Times Square`, 'L', '1st')
// mta.planTrip('6', 'Union Square', 'L', '8th')
// mta.planTrip('N', `Times Square`, 'L', '1st')
// mta.planTrip('6', '33rd', 'L', 'Union Square')
//
// // Errors to test
// mta.planTrip('X', 'Hello', 'R', '99th')
// mta.planTrip('L', 'Xth', 'L', '1st')
// mta.planTrip('L', '8th', 'R', '1st')
// mta.planTrip('L', '8th', 'L', 'Hello')
// mta.planTrip('S', '8th', 'L', 'Hello')
//

const stations = {
    'N' : ['Times Square','34th','28th','23rd','Union Square','8th'],
    'L' : ['8th','6th','Union Square','3rd','1st'],
    '6' : ['Grand Central','33rd','28th','23rd','Union Square','Astor Place']
  }

const findBestLine = function ( originStation, destinationStation ) {

}

const linesWithDestination = function (destinationStation) {
  arrayLinesWithDestination = []
  for (var variable in stations) {
    if (stations.hasOwnProperty(variable)) {
      // console.log(variable)
      for (var i = 0; i < stations[variable].length; i++) {
        stations[variable][i]
        // console.log(stations[variable][i]) // this loops first through the array to each line, then through each line to the stations.
            //can we say when we find destinationstation to return line?
        if (stations[variable][i] === destinationStation) {
          arrayLinesWithDestination.push([variable])
        }
      }
    }
  }
  // console.log(arrayLinesWithDestination.join(', '));
  return arrayLinesWithDestination
};

// linesWithDestination('28th');
// linesWithDestination('23rd');
// linesWithDestination('Union Square')

//    LOOP the results from loopSearch - then run them through the indexfunction, find the one with least number of stops - then create the trip with that!
const isDestinationOnSameLine = function (originStation, destinationStation) {
  console.log(`Going from ${originStation} Station to ${destinationStation} Station.`);
  //  I THINK THIS IS THE BIT WE'RE STOPPING ON
  originLines = linesWithDestination( originStation ) // check what lines originStation is on
  console.log(originLines);
  destinationLines = linesWithDestination( destinationStation ) // check what line destinationStation is on
  console.log(destinationLines);
  for (var i = 0; i < originLines.length; i++) { // loops the array originLines to compare with destination Lines
    console.log(originLines[i]);
  } for (var i = 0; i < destinationLines.length; i++) { // loops the array destinationLines
    console.log(destinationLines[i]);
    console.log(originLines[i]);
      if ((originLines[i]) === (destinationLines[i])) { // this isn't working
        console.log(`The stations are on the same line!`);
      }

    }
  }
// isDestinationOnSameLine( 'Astor Place', 'Union Square' )

const tripPlan = function ( originStation, destinationStation ) {
  isDestinationOnSameLine( originStation, destinationStation )
}

console.log(tripPlan('Times Square', 'Union Square'));

 // experimenting
{
//
// const testnoTripData = { // HOW IT IS IN CURRENT OBJECT 24lines
//
//   stations: {
//     'N' : ['Times Square','34th','28th','23rd','Union Square','8th'],
//     'L' : ['8th','6th','Union Square','3rd','1st'],
//     '6' : ['Grand Central','33rd','28th','23rd','Union Square','Astor Place']
//   },
//
//
//   sameLineTravel: function (destinationLine, originStation, destinationStation) {
//     console.log(`You're on Line ${destinationLine} and want to go from ${originStation} to ${destinationStation}.`);
//     startIndex = this.stations[destinationLine].indexOf( originStation ) // take originStation, and find it's index in destinationLine
//     endIndex = this.stations[destinationLine].indexOf( destinationStation ) // take destinationStation and find it's index.
//       if (startIndex < endIndex) { // need an if statement if we want to go backwards
//         numberOfStops = (endIndex+1) - (startIndex+1) // this doesn't matter for forward trips, will matter for backwards.
//         for (var i = startIndex; i < endIndex ; i++) { // loop through array, printing out each station
//         travelledStations.push(this.stations[destinationLine][i+1]); // push to array to print?
//         }
//       } else if (startIndex > endIndex) { // if it's a backwards trip.
//         numberOfStops = (startIndex+1) - (endIndex+1) // can't minus 0. maybe only need on endIndex?
//         for (var i = startIndex; i > endIndex; i--) {
//           travelledStations.push(this.stations[destinationLine][i-1]); // push to array to print?
//         }
//       }
//     if (numberOfStops > 1) {
//       console.log(`You must travel through the following stops on the Line ${destinationLine}: ${travelledStations.join(', ')}.`);
//       console.log(`${numberOfStops} stops in total.`);
//     } else if (numberOfStops === 1) { // can i be smarter and get rid of this, stops printing plural if one stop.
//       console.log(`You must travel through the following stop on the Line ${destinationLine}: ${travelledStations.join(', ')}.`);
//       console.log(`${numberOfStops} stop in total.`);
//     }
//   }
//
// }
//
// const testTripData = {
//
//   stations: {
//     'N' : ['Times Square','34th','28th','23rd','Union Square','8th'],
//     'L' : ['8th','6th','Union Square','3rd','1st'],
//     '6' : ['Grand Central','33rd','28th','23rd','Union Square','Astor Place']
//   },
//
//
//   getTripData: function ( originLine, originStation, destinationLine, destinationStation ) {
//     tripData = { originLine: (originLine), originStation: (originStation), destinationLine: (destinationLine), destinationStation: (destinationStation)}; // lets just do for single trip first
//     tripData.travelledStations = [];
//     if (originLine === destinationLine) {
//       tripData.tripType = "sameLineTravel"
//       tripData.startIndex = this.stations[destinationLine].indexOf( originStation ) // take originStation, and find it's index in destinationLine
//       tripData.endIndex = this.stations[destinationLine].indexOf( destinationStation ) // take destinationStation and find it's index.
//       // return tripData // next we can search to see tripType if is singleline or interchange journey
//     } if (tripData.startIndex < tripData.endIndex) { // need an if statement if we want to go backwards
//       tripData.numberOfStops = (tripData.endIndex+1) - (tripData.startIndex+1) // this doesn't matter for forward trips, will matter for backwards.
//       for (var i = tripData.startIndex; i < tripData.endIndex ; i++) { // loop through array, printing out each station
//       tripData.travelledStations.push(this.stations[destinationLine][i+1]); // push to array to print?
//       }
//     } else if (tripData.startIndex > tripData.endIndex) { // if it's a backwards trip.
//       tripData.numberOfStops = (tripData.startIndex+1) - (tripData.endIndex+1) // can't minus 0. maybe only need on endIndex?
//       for (var i = tripData.startIndex; i > tripData.endIndex; i--) {
//         travelledStations.push(this.stations[destinationLine][i-1]); // push to array to print?
//       }
//     }
//     else if (originLine !== destinationLine) {
//       tripData.tripType = "interchangeTravel"
//
//     }
//   return tripData
//   },
//
//   sameLineTravel: function (destinationLine, originStation, destinationStation) {
//     console.log(`You're on Line ${destinationLine} and want to go from ${originStation} to ${destinationStation}.`);
//     startIndex = this.stations[destinationLine].indexOf( originStation ) // take originStation, and find it's index in destinationLine
//     endIndex = this.stations[destinationLine].indexOf( destinationStation ) // take destinationStation and find it's index.
//       if (startIndex < endIndex) { // need an if statement if we want to go backwards
//         numberOfStops = (endIndex+1) - (startIndex+1) // this doesn't matter for forward trips, will matter for backwards.
//         for (var i = startIndex; i < endIndex ; i++) { // loop through array, printing out each station
//         travelledStations.push(this.stations[destinationLine][i+1]); // push to array to print?
//         }
//       } else if (startIndex > endIndex) { // if it's a backwards trip.
//         numberOfStops = (startIndex+1) - (endIndex+1) // can't minus 0. maybe only need on endIndex?
//         for (var i = startIndex; i > endIndex; i--) {
//           travelledStations.push(this.stations[destinationLine][i-1]); // push to array to print?
//         }
//       }
//     if (numberOfStops > 1) {
//       console.log(`You must travel through the following stops on the Line ${destinationLine}: ${travelledStations.join(', ')}.`);
//       console.log(`${numberOfStops} stops in total.`);
//     } else if (numberOfStops === 1) { // can i be smarter and get rid of this, stops printing plural if one stop.
//       console.log(`You must travel through the following stop on the Line ${destinationLine}: ${travelledStations.join(', ')}.`);
//       console.log(`${numberOfStops} stop in total.`);
//     }
//   }
// } // this is becoming too much
//
// console.log(testTripData.getTripData( 'N', 'Times Square', 'N', '23rd'));
// console.log(testTripData.getTripData( 'N', 'Times Square', '6', '33rd'));
// // console.log(testTripData.getTripData( '', '', '', ''));
// // console.log(testTripData.getTripData( '', '', '', ''));
// // console.log(testTripData.getTripData( '', '', '', ''));
// // console.log(testTripData.getTripData( '', '', '', ''));
// // console.log(testTripData.getTripData( '', '', '', ''));
// // console.log(testTripData.getTripData( '', '', '', ''));
}
