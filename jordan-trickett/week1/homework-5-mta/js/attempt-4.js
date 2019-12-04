console.log("YERRRR attempt 4!!!");



const mtaMap = {

  lines: {
    'nLine':['Times Square', '34th', '28th on N', '23rd on N', 'Union Square on N', '8th on N'],
    'lLine':['8th on L', '6th', 'Union Square on L', '3rd', '1st'],
    '6Line':['Grand Central', '33rd', '28th on 6', '23rd on 6', 'Union Square on 6', 'Astor Place'],
  },



  //
  findStartLine: function (startLine) {

    for (let key in this.lines) {
      // console.log('key', key);               //looping through lines and returning 3 lines
      // console.log ( 'value', this.lines[ key ] );  // returning value = array

      const currentLine = key;  // current line

      if (currentLine === startLine) { // checks line and stop is on line

        // console.log(`You are currently at ${stop1}, on the ${currentLine}`);

        console.log(currentLine);

        mtaMap.currentLineStore = currentLine;

      } //if

    }; // for

    return null;



       // returns line name
  }, //findStartLine

  findStartStop: function (startStop) {




    for (let key in this.lines) {
      // console.log('key', key);               //looping through lines and returning 3 lines
      // console.log ( 'value', this.lines[ key ] );  // returning value = array

      const currentStop = this.lines[ key ];  // current line
      const currentStopIndex = currentStop.indexOf( startStop )

      if (currentStop.includes(startStop)) { // checks line and stop is on line

        // console.log(`You are currently at ${stop1}, on the ${currentLine}`);

        console.log(currentStop, currentStopIndex);

        return currentStop;

      } //if

    }; // for

    return null;




              //returns line array
  }, //findStartStop


  findStartStopIndex: function () {




  } //findEndStopIndex


  //
  // findEndLine:
  //
  // findEndStop:
  //
  // findEndStopIndex:
  //
  //
  // displayStopsBetweenStartAndEnd:
  //
  //
  //
  //
  //
  // //
  // //
  // start: function (startLine, stop1) {
  //
  //   for (let key in this.lines) {
  //     // console.log('key', key);               //looping through lines and returning 3 lines
  //     // console.log ( 'value', this.lines[ key ] );  // returning value = array
  //
  //     const currentLine = key;  // current line
  //     const currentStop = this.lines[ key ];  //  this is the array
  //     const startIndex = currentStop.indexOf( stop1 ); // the index value of the stop
  //
  //
  //     if (currentLine === startLine && currentStop.includes(stop1)) { // checks line and stop is on line
  //
  //       // console.log(`You are currently at ${stop1}, on the ${currentLine}`);
  //
  //       console.log(currentLine);
  //       console.log(currentStop);
  //       console.log(startIndex);
  //
  //     } //if
  //
  //   }; // for loop
  //
  //   return null;
  //
  // },//start function
  //
  // end: function (endLine, stop2) {
  //
  //   for (let key in this.lines) {
  //     // console.log('key', key);               //looping through lines and returning 3 lines
  //     // console.log ( 'value', this.lines[ key ] );  // returning value = array
  //
  //     const currentLine = key;  // current line
  //     const currentStop = this.lines[ key ];  //  this is the array
  //     const endIndex = currentStop.indexOf( stop2 ); // the index value of the stop
  //
  //
  //     if (currentLine === endLine && currentStop.includes(stop2)) { // checks line and stop is on line
  //
  //       // console.log(`You are currently at ${stop1}, on the ${currentLine}`);
  //
  //       console.log(currentLine);
  //       console.log(currentStop);
  //       console.log(endIndex);
  //
  //       const journeyPlan =  currentStop.slice(startIndex, endIndex);
  //
  //       console.log(journeyPlan);
  //
  //     } //if
  //
  //   }; // for loop
  //
  //   return null;
  //
  // },//end function
  //
  // //these produce the line, the array, and position
  //
  // currentArray[ startPosition ] // shows the station
  //
  // endArray[ endPosition ]  // shows end station
  //
  //
};//mtaMap

  console.log(mtaMap.lines['nLine']);  // logs balance
  console.log(mtaMap.lines['lLine']);  // logs balance
  console.log(mtaMap.lines['6Line']);  // logs balance
