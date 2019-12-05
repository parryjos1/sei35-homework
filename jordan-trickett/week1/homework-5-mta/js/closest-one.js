console.log("YERRRR closest one!!!");

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

  let destinationLine;
  let destinationLineArray;
  let destinationStation;
  let destinationStationIndex;



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


  let newStartIndex;
  let newEndIndex;
  let journey;

  reverseIt = function ( array, startStation, finishStation ) {


    reversedArray = array.reverse()  //reverses array

    // console.log(reversedArray);

    newStartIndex = reversedArray.indexOf( startStation );  //finds new index positions
    newEndIndex = reversedArray.indexOf( finishStation ) //of stops

    // console.log(newStartIndex);
    // console.log(newEndIndex);

    journey = reversedArray.slice(newStartIndex +1, newEndIndex +1);
    // console.log(journey);

    // const numberOfStops = journey.length; //not neccessary

    // return ( `To get there you must travel ${journey.length} stops, ${journey}, exiting at ${reversedArray[newEndIndex]} `);

     //function takes 3 arguments and returns above
  }; // reverseIt - works for 1 line - departureLineArray


  let changeIndexStart;
  let changeIndexEnd;
  let firstLegNoReverse;
  let secondLegNoReverse;
  // let firstLegReverse;
  // let secondLegReverse;



  changeLine = function ( departureLineArray, destinationLineArray, departureStationIndex, destinationStationIndex ) {

        changeIndexStart = departureLineArray.indexOf('Union Square');
        // console.log(changeIndexStart);

        changeIndexEnd = destinationLineArray.indexOf('Union Square');
        // console.log(changeIndexStart);

        if (changeIndexStart < departureStationIndex) {

              reverseIt(departureLineArray, departureStation, 'Union Square');

              // console.log(newStartIndex);
              // console.log(newEndIndex);
              // console.log(journey);

              // departureLineArray = departureLineArray.slice( departureStationIndex +1, changeIndexStart +1);
              //

              // let firstLegReverse = journey;

              console.log(`To get there you must travel ${journey.length} stops, ${journey}. Change at Union Square onto the ${ destinationLine }.`);

          } if (changeIndexEnd > destinationStationIndex) {

              reverseIt(destinationLineArray, 'Union Square', destinationStation);

              // console.log(newStartIndex);
              // console.log(newEndIndex);
              // console.log(journey);

              // destinationLineArray = destinationLineArray.slice(changeIndexEnd +1, destinationStationIndex +1);

              // let secondLegReverse = journey;

              console.log(`From there you must travel ${journey.length} stops,  ${journey}, exiting at ${destinationStation} `);

          } else {

            firstLegNoReverse = departureLineArray.slice( departureStationIndex +1, changeIndexStart +1); // finds remaining
            secondLegNoReverse = destinationLineArray.slice(changeIndexEnd +1, destinationStationIndex +1);   //stops on journey
            //
            // console.log(firstLeg);
            // console.log(secondLeg);

            console.log(`To get there you must travel ${firstLegNoReverse.length} stops, ${firstLegNoReverse}. Change at Union Square onto the ${ destinationLine }. From there you must travel ${secondLegNoReverse.length} stops,  ${secondLegNoReverse}, exiting at ${destinationStation} `);


          }; // nested if

  };// //changeLine function




  journeyPlanner = function (startLine, startStation, finishLine, finishStation) {

    findStartPosition(startLine, startStation);  // populates departure variables

    findEndPosition(finishLine, finishStation); // populates destination variables


    if (departureStationIndex > destinationStationIndex && startLine === finishLine) {

      // console.log('reverse array');

      reverseIt(departureLineArray, departureStation, destinationStation);

      // console.log(newStartIndex);
      // console.log(newEndIndex);
      // console.log(journey);

      return ( `To get there you must travel ${journey.length} stops, these include ${journey}, exiting at ${reversedArray[newEndIndex]} `);


        } else if (startLine !== finishLine) {

          // console.log('change lines');

          changeLine(departureLineArray, destinationLineArray, departureStationIndex, destinationStationIndex);

          // console.log(changeIndexStart);  //new index for end first leg
          // console.log(changeIndexEnd);  // new index for  start second leg
          // console.log(firstLegNoReverse);  // new array for first
          // console.log(secondLegNoReverse);  // new array for second
          // console.log(journey);
          // console.log(firstLegReverse);
          // console.log(secondLegReverse);

          return (`To get there you must travel ${firstLegNoReverse.length} stops, ${firstLegNoReverse}. Change at Union Square onto the ${ destinationLine }. From there you must travel ${secondLegNoReverse.length} stops,  ${secondLegNoReverse}, exiting at ${destinationStation} `);




            } else {

              // console.log('this is your journey');
              const simpleJourney = departureLineArray.slice(departureStationIndex, destinationStationIndex);

              return ( `To get there you must travel ${simpleJourney.length} stops, these include ${simpleJourney}, exiting at ${destinationStation} `);


      }; // if statement



  }; // journeyPlanner function
