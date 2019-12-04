console.log("YERRRR So Close!!!");

const mtaMap = {

  lines: {
    'N Line':['Times Square', '34th', '28th on N', '23rd on N', 'Union Square', '8th on N'],
    'L Line':['8th on L', '6th', 'Union Square', '3rd', '1st'],
    '6 Line':['Grand Central', '33rd', '28th on 6', '23rd on 6', 'Union Square', 'Astor Place'],
  },


  journeyPlan: function ( startingLine, startingStop, finishingLine, finishingStop  ) {     // line object


    const startPosition = this.findStartPosition(startingLine, startingStop); //this is the start index num

    const endPosition = this.findEndPosition(finishingLine, finishingStop); // this is the end index num

    const currentArray = this.lines[ startingLine ];  //this is the array for the start
    const endArray = this.lines [ finishingLine ]; //this is the array for the end

    console.log(endArray);

    const journey = currentArray.slice(startPosition +1, endPosition +1); //tells me which stations from one index to the next

    const numberOfStops = journey.length;

    // currentArray[ startPosition ] // shows the station
    //
    // endArray[ endPosition ]  // shows end station

    if (startPosition && endPosition !== null) {  //need valid start and end to begin


    } else if (startingLine !== finishingLine) {  // if start line not same as finish you know a change
    //


          const changeIndexStart = currentArray.indexOf('Union Square')  //finds index of union square
          const changeIndexEnd = endArray.indexOf('Union Square')
          //
          // console.log(changeIndexStart);
          console.log(changeIndexEnd);
          console.log(endPosition);

          const firstLeg = currentArray.slice( startPosition +1, changeIndexStart +1); // finds remaining
          const secondLeg = endArray.slice(changeIndexEnd +1, endPosition +1);   //stops on journey
          //
          console.log(firstLeg);
          console.log(secondLeg);
          //


            if (changeIndexStart < startPosition) {   //reverse attempt. if union square behind start

              const reversedChangeStartArray = currentArray.reverse()

              const newChangeIndexStart = reversedChangeStartArray.indexOf( startingStop );
              const newChangeIndexEnd = reversedChangeStartArray.indexOf( 'Union Square' );

              const journey = reversedChangeStartArray.slice(newChangeIndexStart +1, newChangeIndexEnd +1); //tells me which stations from one index to the next

              return (`To get there you must travel ${firstLeg.length} stops, ${firstLeg}. Change at Union Square onto the ${ finishingLine }. From there you must travel ${secondLeg.length} stops,  ${secondLeg}, exiting at ${finishingStop} `);


            } else if (changeIndexEnd < endPosition) {   //reverse attempt. if union square behind end

                  const reversedChangeEndArray = endArray.reverse()

                  const newChangeIndexStart = reversedChangeEndArray.indexOf( 'Union Square' );
                  const newChangeIndexEnd = reversedChangeEndArray.indexOf( finishingStop );

                  const journey = reversedChangeEndArray.slice(newChangeIndexStart +1, newChangeIndexEnd +1); //tells me which stations from one index to the next

                  return (`To get there you must travel ${firstLeg.length} stops, ${firstLeg}. Change at Union Square onto the ${ finishingLine }. From there you must travel ${secondLeg.length} stops,  ${secondLeg}, exiting at ${finishingStop} `);

            };




          console.log(`To get there you must travel ${firstLeg.length} stops, ${firstLeg}. Change at Union Square onto the ${ finishingLine }. From there you must travel ${secondLeg.length} stops,  ${secondLeg}, exiting at ${endArray[ endPosition ]} `);



        } if ( startPosition > endPosition ) {  //reverse works

              const reversedArray = currentArray.reverse()  //reverses array

              const newStartIndex = reversedArray.indexOf( startingStop );  //finds new index positions
              const newEndIndex = reversedArray.indexOf( finishingStop ) //of stops

              const journey = reversedArray.slice(newStartIndex +1, newEndIndex +1); //tells me which stations from one index to the next

              const numberOfStops = journey.length; //not neccessary

              console.log( `To get there you must travel ${numberOfStops} stops, ${journey}, exiting at ${reversedArray[newEndIndex]} `);

            }else{

              return (`To get there you must travel ${numberOfStops} stops, ${journey}, exiting at ${endArray[endPosition]} `);

            }//if else revers

    // }; //if not null

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



  reversedArray: function ( startingLine, startingStop, finishingLine, finishingStop ) {

    const reversedArray = currentArray.reverse()

    const newStartIndex = reversedArray.indexOf( startingStop );
    const newEndIndex = reversedArray.indexOf( finishingStop )

    const journey = reversedArray.slice(newStartIndex +1, newEndIndex +1); //tells me which stations from one index to the next

    const numberOfStops = journey.length;

    console.log( `To get there you must travel ${numberOfStops} stops, these include ${journey}, exiting at ${reversedArray[newEndIndex]} `);

  },


  changeLine: function ( startingLine, startingStop, finishingLine, finishingStop ) {


    if (startingLine !== finishingLine) {

        const changeIndexStart = currentArray.indexOf('Union Square')
        const changeIndexEnd = endArray.indexOf('Union Square')

        const firstLeg = currentArray.slice(currentArray[ startPosition ] +1, changeIndexStart +1);
        const secondLeg = endArray.slice(changeIndexEnd +1, endArray[ changeIndexEnd ] +1);




      } if (endPosition < startPosition) {

        this.reversedArray(startingLine, startingStop, finishingLine, finishingStop);

      };

        console.log(`To get there you must travel ${firstLeg.length} stops including ${firstLeg} and change at Union Square onto the ${ finishingLine }. From there you must travel ${secondLeg.length} stops these include ${secondLeg}, exiting at ${endArray[ endPosition ]} `);


  },






} // mtaMap

  console.log(mtaMap.lines['N Line']);  // logs balance
  console.log(mtaMap.lines['L Line']);  // logs balance
  console.log(mtaMap.lines['6 Line']);  // logs balance









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
