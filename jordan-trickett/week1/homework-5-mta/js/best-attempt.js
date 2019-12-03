console.log("YERRRR attempt 2!!!");

const mtaMap = {

  lines: {
    'nLine':['Times Square', '34th', '28th on N', '23rd on N', 'Union Square on N', '8th on N'],
    'lLine':['8th on L', '6th', 'Union Square on L', '3rd', '1st'],
    '6Line':['Grand Central', '33rd', '28th on 6', '23rd on 6', 'Union Square on 6', 'Astor Place'],
  },


  changeLine: function ( startingLine, startingStop, finishingLine, finis ) {

    if (startingLine !== finishingLine) {



    }


  },






  journeyPlan: function ( startingLine, startingStop, finishingLine, finishingStop  ) {     // line object


    const startPosition = this.findStartPosition(startingLine, startingStop); //this is the start index num

    const endPosition = this.findEndPosition(finishingLine, finishingStop); // this is the end index num


    if (startPosition && endPosition !== null) {


      const currentArray = this.lines[ startingLine ];  //this is the array for the start
      const endArray = this.lines [ finishingLine ]; //this is the array for the end


      const journey = currentArray.slice(startPosition +1, endPosition +1); //tells me which stations from one index to the next

      const numberOfStops = journey.length;

      // currentArray[ startPosition ] // shows the station
      //
      // endArray[ endPosition ]  // shows end station


          if (endPosition < startPosition) {

            const reversedArray = currentArray.reverse()

            const newStartIndex = reversedArray.indexOf( startingStop );
            const newEndIndex = reversedArray.indexOf( finishingStop )

            const journey = reversedArray.slice(newStartIndex +1, newEndIndex +1); //tells me which stations from one index to the next

            const numberOfStops = journey.length;

            console.log( `To get there you must travel ${numberOfStops} stops, these include ${journey}, exiting at ${reversedArray[newEndIndex]} `);

          }else{

            return (`To get there you must travel ${numberOfStops} stops, these include ${journey}, exiting at ${endArray[endPosition]} `);

          }//if else revers

    }; //if not null

  }, // journeyPlan




  findStartPosition: function ( startLine, startStop ) {     // line object

    for (let key in this.lines) {
      // console.log('key', key);               //looping through lines and returning 3 lines
      // console.log ( 'value', this.lines[ key ] );  // returning value = array

      const currentLine = key;
      const currentStop = this.lines[ key ];
      const stopIndex = currentStop.indexOf( startStop );

      if (currentLine === startLine && currentStop.includes(startStop)) { // checks line and stop is on line

        console.log(`You are currently at ${startStop}, on the ${currentLine}`);

        return stopIndex;
        // console.log(currentLine, currentStop, stopIndex);
      }

    }; // for loop

  console.log(`Departure information not found, please re-enter`);
  return null;

  }, // findStartPosition


  findEndPosition: function ( finishLine, finishStop ) {     // line object

    for (let key in this.lines) {
      // console.log('key', key);               //looping through lines and returning 3 lines
      // console.log ( 'value', this.lines[ key ] );  // returning value = array

      const endLine = key;
      const endStop = this.lines[ key ];
      const stopIndex = endStop.indexOf( finishStop );

      if (endLine === finishLine && endStop.includes(finishStop)) { // checks line and stop is on line

        console.log(`You are travelling to ${finishStop}, on the ${endLine}`);

        // console.log(endLine, endStop, stopIndex);
        return stopIndex;

      }; //if


    }; // for loop

    console.log(`Destination information not found, please re-enter`)
    return null;

  }, // findEndPosition

  // step 3: journey planning - start position to finish








} // mtaMap

  console.log(mtaMap.lines['nLine']);  // logs balance
  console.log(mtaMap.lines['lLine']);  // logs balance
  console.log(mtaMap.lines['6Line']);  // logs balance









      //
      // currentStop.slice(startIndex, endIndex);




      // for (var i = startPosition; i < endPosition; i++) {
      //     console.log('yo');
      // }

      // for (let key in this.lines) {
      //   // console.log('key', key);               //looping through lines and returning 3 lines
      //   // console.log ( 'value', this.lines[ key ] );  // returning value = array
      //
      //   const currentLine = key;
      //   const currentStop = this.lines[ key ];
      //   const stopIndex = currentStop.indexOf( startStop );
      //
      //   if (currentLine === startLine && currentStop.includes(startStop)) { // checks line and stop is on line
      //
      //     console.log(currentLine, currentStop, stopIndex);
      //
      //     console.log(`You are currently at ${startStop}, on the ${currentLine}`);
      //
      //   } //if
      //
      // }; // for loop
      //
      // return null;
