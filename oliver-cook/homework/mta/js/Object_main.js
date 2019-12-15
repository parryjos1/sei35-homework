
// array of stations//




const myStations {
const stationsN = ['Times Sq' ,'34th', '23rd', 'Union Sq', '8th' ];
const stationsL = ['8th', '6th', 'Union Square', '3rd', '1st'];
const stationsSix ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];
};



const singleJourney = function (startStation, endStation){


  // returns the index of an entered station
  const startIndex = stationsN.indexOf(startStation);
  const endIndex = stationsN.indexOf(endStation);
  // console.log('Index of 34th:', startIndex);

  //for loop to list station names//
  for (let i = startIndex; i <= endIndex; i++){
    console.log ( stationsN[i] );
  }


}; // singleJourney()


// singleJourney('34th','Union Sq');
singleJourney('Union Sq', 'Times Sq');

//'enter your departure station'

//const? departure = ();
  //console.log(departure);

//'enter your destination'//

//const? arrival = ();
  //console.log(arrival);



//output ...//
