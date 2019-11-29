const mta = {
  network: {
    N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    L: ['8th', '6th', 'Union Square', '3rd', '1st'],
    6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
  },

  stopsPattern: function(line) {
    return this.network[line] || [];
  },
};

const explainTrip = function(plan) {
  plan[0].stops.shift(); // We don't need to display the boarding stop
  console.log(
      `You must travel through the following stops on the ${plan[0].line} line: ${plan[0].stops.join(
          ', ')}.`);

  // We need to change at Union Square
  if (plan[1]) {
    plan[1].stops.shift();
    console.log('Change at Union Square.');
    console.log(
        `Your journey continues through the following stops: ${plan[1].stops.join(
            ', ')}.`);
  }
  console.log(`${plan[0].stops.length +
  (plan[1] ? plan[1].stops.length : 0)} stops in total.`);
};

const tripPlanSameLine = function(line, on, off) {
  if (on === off) {
    return 'On-stop and off-stop should be different.';
  }

  const stopsPattern = mta.stopsPattern(line);

  const onIndex = stopsPattern.indexOf(on);
  const offIndex = stopsPattern.indexOf(off);

  const segment = stopsPattern.slice(Math.min(onIndex, offIndex),
      Math.max(onIndex, offIndex) + 1);

  if (offIndex < onIndex) {
    // We can also use the reverse function but I guess maybe map will be more efficient.
    return segment.map(
        (stop, index) => (segment[segment.length - index - 1]));
  }
  return segment;
};

const planTrip = function(lineOn, on, lineOff, off) {
  // If either end of the journey is 'Union Square' then we only need to travel on one line.
  if (on === 'Union Square') {
    lineOn = lineOff;
  }
  if (off === 'Union Square') {
    lineOff = lineOn;
  }

  if (lineOn === lineOff) {
    return explainTrip([
      {
        line: lineOn,
        stops: tripPlanSameLine(lineOn, on, off),
      },
    ]);
  }

  return explainTrip([
    {
      line: lineOn,
      stops: tripPlanSameLine(lineOn, on, 'Union Square'),
    }, {
      line: lineOff,
      stops: tripPlanSameLine(lineOff, 'Union Square', off),
    },
  ]);
};

console.log("Calling planTrip('N', 'Times Square', '6', '33rd')");
planTrip('N', 'Times Square', '6', '33rd');
console.log('\n');

console.log("Calling planTrip('6', '33rd', 'N', 'Times Square')");
planTrip('6', '33rd', 'N', 'Times Square');