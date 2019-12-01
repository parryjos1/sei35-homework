const subway = {

  lines: {
    lineN: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    lineL: ['8th', '6th', 'Union Square', '3rd', '1st'],
    line6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
  },

  getLine: function(selectedLine) {
    let line = [];
    const l = this.lines;

    switch (selectedLine) {
      case 'N':
        line = l.lineN;
        break;
      case 'L':
        line = l.lineL;
        break;
      case '6':
        line = l.line6;
        break;
      default:
        console.log('This line is not available.');
        return;
    }

    return line;
  },

  getStationsSameLine: function(stationStart, stationEnd, line) {
    const startIndex = line.indexOf(stationStart),
          endIndex = line.indexOf(stationEnd);
    let stations = [],
        stops = 0;
    if (startIndex === endIndex) {
      return stations;
    } else if (startIndex > endIndex) {
      let i;
      for(i = startIndex - 1; i >= endIndex; i--) {
        stations.push(line[i]);
        stops++;
      }
    } else {
      let i;
      for(i = startIndex + 1; i <= endIndex; i++) {
        stations.push(line[i]);
        stops++;
      }
    }

    return [stations, stops];
  },

  planTrip: function(lineStart, stationStart, lineEnd, stationEnd) {
    const line1 = this.getLine(lineStart),
          line2 = this.getLine(lineEnd),
          stationIntercept = 'Union Square';;
    let totalStops = 0,
        stops = 0,
        stations = [];

    if (line1.includes(stationStart) && line2 !== line1) {
      [stations, stops] = this.getStationsSameLine(stationStart, stationIntercept, line1);
      totalStops += stops;
      const travelOutputStart = `You must travel through the following stops on the ${lineStart} line:`;
      console.log(`${travelOutputStart} ${stations.join(', ')}.\nChange at ${stationIntercept}.`);
    } else if (!line1.includes(stationStart)) {
      console.log(`Please check your first station.`);
      return null;
    }
    if (line2.includes(stationEnd) && line2 !== line1) {
      [stations, stops] = this.getStationsSameLine(stationIntercept, stationEnd, line2);
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
