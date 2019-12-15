console.log("YERRRR!!!");

const mtaMap = {

  lines: [
    {
    line: 'nline',
    stops: ['TS', '34th', '28th', '23rd', 'US', '8th on N'],
    },
    {
    line: 'lline',
    stops: ['8th on L', '6th', 'US', '3rd', '1st'],
    },

  ], //lines array

  findStartLine: function ( startLine ) {     // line object

      for (var i = 0; i < this.lines.length; i++) {

        const currentLine = this.lines[ i ];        //stores current Index line object as currentline

            if ( startLine === currentLine.line ){    // checks if above matches input

                return currentLine;

            }// if

      };//for

  return null;    // fail variable if no logs found

  }, // findStartLine

    //
    // findStartStop: function ( startStop ) {     // line object
    //
    //     for (var i = 0; i < this.lines.length; i++) {
    //
    //       const currentStop = this.lines[ i ];        //stores current Index line object as currentline
    //
    //           if ( startStop === currentStop.stops ){    // checks if above matches input
    //
    //               return currentStop;
    //
    //           }// if
    //
    //     };//for
    //
    // return null;    // fail variable if no logs found
    //
    // }, // findStartStop
    //



  findStartStop: function ( stopName ) {          //returns array with the matching stop

      for (var i = 0; i < this.lines.length; i++) {

         // console.log(this.lines[i]);            //returning the two objects

         const  returnedObjects = this.lines[i];

         if (returnedObjects === stopName) {

           console.log(returnedObjects);

         }



      };

  }, //findStartStop

}
