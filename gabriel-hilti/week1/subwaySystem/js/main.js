const subway = {

  lines: {
    lineN: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    lineL: ['8th', '6th', 'Union Square', '3rd', '1st'],
    line6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
    lineTest: ['A', 'B', 'C', 'D', 'Grand Central', 'E', 'F', 'G']
  },

  intersections: [ // each object holds the intersection station and their crossing lines
    {
      line1: 'N',
      line2: 'L',
      intersection: 'Union Square'
    },
    {
      line1: 'N',
      line2: '6',
      intersection: 'Union Square'
    },
    {
      line1: 'L',
      line2: '6',
      intersection: 'Union Square'
    },
    {
      line1: '6',
      line2: 'Test',
      intersection: 'Grand Central'
    }
  ],

  addLine: function(name, stationArray) { // add a new line, name and stations
    if ((typeof name === 'string' || typeof name === 'number') && Array.isArray(stationArray)) {
      this.lines['line' + name] = stationArray;
    }
  },

  addIntersection: function(line1, line2, intersection) { // add new intersection station between two lines
    this.intersections.push({line1: line1, line2: line2, intersction: intersection});
  },

  getLine: function(selectedLine) { // returns stations of the line in a array
    let line = [];

    return `${this.lines['line'+selectedLine]}` ? this.lines['line' + selectedLine] : null;
  },

  getStationsSameLine: function(stationStart, stationEnd, line) { // returns an array with all stations between start station and final station as first argument
    // returns the amount of stops as second argument
    const startIndex = line.indexOf(stationStart),
          endIndex = line.indexOf(stationEnd);
    let stations = [],
        stops = 0;

    if (startIndex === endIndex) {
      return stations;
    } else if (startIndex > endIndex) {
      stations = line.slice(endIndex, startIndex).reverse();
      stops = stations.length;
    } else {
      stations = line.slice(startIndex + 1, endIndex + 1);
      stops = stations.length
    }

    return [stations, stops];
  },

  planTrip: function(lineStart, stationStart, lineEnd, stationEnd, interceptArray = [{}]) {
    const line2 = this.getLine(lineEnd);
    let totalStops = 0,
        stops = 0,
        stations = [],
        // an array which holds all intersection stations in the correct order
        // by default empty obj due to initial task description
        stationIntercept = interceptArray,
        line1 = this.getLine(lineStart);

    // searches automatically for the correct initial intersection obj if only one intersection is given
    if (interceptArray[0].intersection === undefined && lineStart !== lineEnd) { // default intersection station for initial task
      for(let obj of this.intersections) {
        if (obj.line1 === lineStart || obj.line1 === lineEnd && obj.line1 === lineStart || obj.line2 === lineEnd) {
          stationIntercept[0].intersection = obj.intersection;
          break;
        }
      }
    }

    if (line1.includes(stationStart) && line2 !== line1) {
      // loop only necessary if more then two intersections are given
      // new starting station will then be the next intersection station
      // and as well line1 will be replaced by next following line
      for(let i = 0; i < stationIntercept.length; i++) {
        [stations, stops] = this.getStationsSameLine(stationStart, stationIntercept[i].intersection, line1);
        totalStops += stops;
        const travelOutputStart = `You must travel through the following stops on the ${lineStart} line:`;
        console.log(`${travelOutputStart} ${stations.join(', ')}.\nChange at ${stationIntercept[i].intersection}.`);
        if (i === stationIntercept.length - 1) {
          break;
        }
        stationStart = stationIntercept[i].intersection;
        const newLine = this.lines['line' + stationIntercept[i].line1];
        line1 = newLine !== line1 ? newLine : this.lines['line' + stationIntercept[i].line2];
      }
    } else if (!line1.includes(stationStart)) {
      console.log(`Please check your first station.`);
      return null;
    }

    // stations of final line will be determined
    if (line2.includes(stationEnd) && line2 !== line1) {
      [stations, stops] = this.getStationsSameLine(stationIntercept[stationIntercept.length - 1].intersection, stationEnd, line2);
      totalStops += stops;
      console.log(`Your journey continues through the following stops: ${stations.join(', ')}.\n${totalStops} stops in total.`);
    } else if (!line2.includes(stationEnd)) {
      console.log(`Please check your final station.`);
      return null;
    } else {
      [stations, totalStops] = this.getStationsSameLine(stationStart, stationEnd, line1);
      console.log(`You must travel through the following stops on the ${lineStart} line: ${stations.join(', ')}.\n${totalStops} stops in total.`);
    }
  }

};

subway.planTrip('N', 'Times Square', '6', '33rd');
subway.planTrip('6', '33rd', 'N', 'Times Square');
subway.planTrip('N', 'Times Square', 'N', '8th');

subway.planTrip('N', 'Times Square', 'Test', 'A', [
  {
    line1: 'N',
    line2: '6',
    intersection: 'Union Square'
  },
  {
    line1: '6',
    line2: 'Test',
    intersection: 'Grand Central'
  }
]);

// upcoming tasks: implement shortest path finding algorithm which returns an array with ordered intersection station objects
