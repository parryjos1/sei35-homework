console.log("YERRRR last attempt!!!");

const mtaMap = {

  lines: {
    'N Line':['Times Square', '34th', '28th on N', '23rd on N', 'Union Square', '8th on N'],
    'L Line':['8th on L', '6th', 'Union Square', '3rd', '1st'],
    '6 Line':['Grand Central', '33rd', '28th on 6', '23rd on 6', 'Union Square', 'Astor Place'],
  },

} // mtaMap

  console.log(mtaMap.lines['N Line']);  // logs balance
  console.log(mtaMap.lines['L Line']);  // logs balance
  console.log(mtaMap.lines['6 Line']);  // logs balance

  let departureLine;
  let departureLineArray;
  let departureStation;
  let departureStationIndex;

  findStartPosition = function ( startLine, startStation ) {     // line object

    for (let key in mtaMap.lines) {
      // console.log('key', key);               //looping through lines and returning 3 lines
      // console.log ( 'value', this.lines[ key ] );  // returning value = array

      const currentLine = key;
      const currentStop = mtaMap.lines[ key ];
      const stopIndex = currentStop.indexOf( startStation );

      if (currentLine === startLine && currentStop.includes(startStation)) { // checks line and stop is on line


         departureLine = currentLine;
         departureLineArray = currentStop;
         departureStation = startStation;
         departureStationIndex = stopIndex;

        console.log(`You are currently at ${departureStation}, on the ${departureLine}`);
        return true;


      }; //if

    }; // for loop

    console.log(`Departure information not found, please re-enter`);
    return null;

  }; // findStartPosition




  let destinationLine;
  let destinationLineArray;
  let destinationStation;
  let destinationStationIndex;

  findEndPosition = function ( finishLine, finishStation ) {     // line object

    for (let key in mtaMap.lines) {
        // console.log('key', key);               //looping through lines and returning 3 lines
        // console.log ( 'value', this.lines[ key ] );  // returning value = array

      const endLine = key;
      const endStop = mtaMap.lines[ key ];
      const stopIndex = endStop.indexOf( finishStation );

          if (endLine === finishLine && endStop.includes(finishStation)) { // checks line and stop is on line


             destinationLine = finishLine;
             destinationLineArray = endStop;
             destinationStation = finishStation;
             destinationStationIndex = stopIndex;


             console.log(`You are travelling to ${destinationStation}, on the ${destinationLine}`);
              return true;

          }; // if
      }; // for loop

      console.log(`Destination information not found, please re-enter`)
      return null;

  }; // findEndPosition

  oneLineJourney = function ( startLine, startStation, finishLine, finishStation ) {

      findStartPosition(startLine, startStation);
      findEndPosition(finishLine, finishStation);


      const simpleJourney = departureLineArray.slice(departureStationIndex, destinationStationIndex);

      return ( `To get there you must travel ${simpleJourney.length} stops, these include ${simpleJourney}, exiting at ${destinationStation} `);

  }; //one line journey

  let changeIndexStart;
  let changeIndexEnd;
  let firstLeg;
  let secondLeg;

  changeLine = function ( departureLineArray, destinationLineArray, departureStationIndex, destinationStationIndex ) {

        changeIndexStart = departureLineArray.indexOf('Union Square');
        // console.log(changeIndexStart);

        changeIndexEnd = destinationLineArray.indexOf('Union Square');
        // console.log(changeIndexStart);


        firstLeg = departureLineArray.slice( departureStationIndex +1, changeIndexStart +1); // finds remaining
        secondLeg = destinationLineArray.slice(changeIndexEnd +1, destinationStationIndex +1);   //stops on journey
        //
        // console.log(firstLeg);
        // console.log(secondLeg);



  };// //changeLine function

  twoLineJourney = function ( startLine, startStation, finishLine, finishStation ) {

    findStartPosition(startLine, startStation);
    findEndPosition(finishLine, finishStation);


    if (startLine !== finishLine) {

      changeLine(departureLineArray, destinationLineArray, departureStationIndex, destinationStationIndex);

      return (`To get there you must travel ${firstLeg.length} stops, ${firstLeg}. Change at Union Square onto the ${ destinationLine }. From there you must travel ${secondLeg.length} stops,  ${secondLeg}, exiting at ${destinationStation} `);


    } else {

      oneLineJourney(startLine, startStation, finishLine, finishStation);

    }

  }; // two line journey

  twoLineJourney2Reverses = function ( startLine, startStation, finishLine, finishStation ) {

    findStartPosition(startLine, startStation);
    findEndPosition(finishLine, finishStation);

    if (startLine !== finishLine) {

      changeLine(departureLineArray, destinationLineArray, departureStationIndex, destinationStationIndex);


    }


  }; // twoLineJourney2Reverses
