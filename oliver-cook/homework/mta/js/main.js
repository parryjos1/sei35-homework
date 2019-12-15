
// array of stations//

const stations = {
  N: ['Times Sq' ,'34th', '23rd', 'Union Sq', '8th' ],
  L: ['8th', '6th', 'Union Square', '3rd', '1st'],
  6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
}

const singleJourney = function (line, startStation, endStation){

  // returns the index of an entered station

  // const lineStations = stations[line];  // get the array of stations for this line

  const startIndex = stations[line].indexOf(startStation);
  const endIndex = stations[line].indexOf(endStation);
  // console.log('Index of 34th:', startIndex);




 run for loop reverse direction...''



 if (startIndex > endIndex) //run For Loop//
  //for loop to list station names//
  for (let i = startIndex+1; i <= endIndex; i++){
    console.log ( stations[line][i] );
    else



  }


}; // singleJourney()

// singleJourney('34th','Union Sq');
singleJourney('N', 'Times Sq', 'Union Sq');

//'enter your departure station'

//const? departure = ();
  //console.log(departure);

//'enter your destination'//

//const? arrival = ();
  //console.log(arrival);



//output ...//
