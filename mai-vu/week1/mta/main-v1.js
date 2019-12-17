const mta = {

    lineN: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    lineL: ["8th", "6th", "Union Square", "3rd", "1st"],
    line6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],

    findStopIndex(stop, line) {
      return this[line].indexOf(stop);
    },

    checkIndex(stopIndex, exchangeIndex, line) {
      if (stopIndex < exchangeIndex) {
        return this[line].slice( stopIndex, exchangeIndex + 1 );
      } else {
        return this[line].reverse().slice( (this[line].length - stopIndex - 1), (this[line].length - exchangeIndex) );
      }
    },

    createArray( stop, line ) {
      let stopIndex = this.findStopIndex( stop, line );
      let exchangeIndex = this.findStopIndex( "Union Square", line );
      let lineArray = this.checkIndex( stopIndex, exchangeIndex, line );
      return lineArray;
    },

    tripPlanner( originStop, originLine, destStop, destLine ) {
      let tripItinery;
      let originArray = this.createArray( originStop, originLine );
      let destArray = this.createArray( destStop, destLine ).reverse();
      let noOfStops = originArray.length + destArray.length - 2;

      if ( originLine === destLine ) {
        tripItinery = {
          originLine: originLine,
          changeAtUnion: false,
          trip: `${ originArray }, ${ destArray.slice(1) }`,
          noOfStops: noOfStops
        }
        return tripItinery;
      } else {
        tripItinery = {
          originLine: originLine,
          changeAtUnion: true,
          destLine: destLine,
          trip: `${ originArray }, ${ destArray.slice(1) }`,
          noOfStops: noOfStops
        }
        return tripItinery;
      } 
    }
  };

console.log(mta.tripPlanner("8th", "lineL", "Times Square", "lineN"));
console.log(mta.tripPlanner("33rd", "line6", "Times Square", "lineN"));