// Create mta system as an object. Each key-value pair maps the line name to the line's array of stations.
const mta = {
    N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    L: ['8th', '6th', 'Union Square', '3rd', '1st'],
    6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
};

// To hold different stops/stations the user must travel through
let stops = []


const singleLineTrip = function( line, stop1, stop2 ) {
    
    // The line argument will be an array. The stop1 and stop2 arguments will be strings (of individual stations).
    
    // If boarding station is behind alighting station in the line array, then it's a backward trip => Reverse the line array.
    if ( line.indexOf(stop1) > line.indexOf(stop2) ) {
        line = line.reverse();
    }

    // From line, return a subarray of all stops between boarding and alighting stations.
    stops = line.slice( line.indexOf(stop1)+1, line.indexOf(stop2)+1 );
    return stops;

};   //end of singleLineTrip()



// Main function
const planTrip = function( line1, stop1, line2, stop2 ) {
    
    // To keep track of total number of stops on a multi-line trip
    let count = 0;

    // Subarrays to hold elements of the boarding line and alighting line
    const startLine = mta[line1];
    const endLine = mta[line2];
    const intersection = 'Union Square';

    if ( line1 === line2 ) {

        stops = singleLineTrip( startLine, stop1, stop2 );
        console.log(`You will board the ${line1} line at ${stop1} and pass through ${stops} to reach ${stop2}.`);
        console.log(`Your trip has ${stops.length} stops.`);
        return;

    } else {

        // The stops array will hold elements of the first leg (from boarding station to Union Square).
        stops = singleLineTrip( startLine, stop1, intersection );
        count = stops.length;
        console.log(`You will board the ${line1} line at ${stop1} and pass through ${stops}.`);

        // Empty the stops array to store elements of the second leg (from Union Square to destination).
        stops = [];
        stops = singleLineTrip( endLine, intersection, stop2 );
        count += stops.length;
        console.log(`At Union Square, change to the ${line2} line and pass through ${stops} to reach your destination at ${stop2}.`);
        console.log(`Your trip has ${count} stops.`);
        
    }

};   //end of planTrip()



// Prompts to get user input

let line1 = window.prompt(`Welcome to MTA! Please enter your boarding line: `);

// Check if user enters a correct line (which should match a key in the mta object)
while ( !(line1 in mta) ) {
    line1 = window.prompt(`Invalid input. Please re-enter a boarding line: `);
}

let stop1 = window.prompt(`Enter your boarding station: `);
while ( mta[line1].indexOf(stop1) === -1 ) {
    stop1 = window.prompt(`Invalid input. Please re-enter a boarding station: `);
}

let line2 = window.prompt(`Enter your alighting line: `);
while ( !(line2 in mta) ) {
    line2 = window.prompt(`Invalid input. Please re-enter an alighting line: `);
}

let stop2 = window.prompt(`Enter your alighting station: `);
while ( mta[line2].indexOf(stop2) === -1 ) {
    stop2 = window.prompt(`Invalid input. Please re-enter a boarding station: `);
}

planTrip( line1, stop1, line2, stop2 );