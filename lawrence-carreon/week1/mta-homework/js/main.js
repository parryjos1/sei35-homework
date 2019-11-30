//MTA
//Going hold the entire system in to a single object
const mta = 
{
    //Arrays containing station arrays referenced by their line names
    'N':[ `Times Square` , `34th` , `28th` , `23rd` , `Union Square` , `8th` ],
    'L':[ `8th` , `6th` , `Union Square` , `3rd` , `1st` ],
    '6':[ `Grand Central` , `33rd` , `28th` , `23rd` , `Union Square` , `Astor Place` ],

    //a function for retrieving indexes
    'getIndex': function ( line, station )
    {
        return this[line].indexOf(station);
    },

    //counts the number of stops taken
    'countStops': function ( entryStation, departureStation )
    {
        if ( entryStation < departureStation )
        {
            return departureStation - entryStation;
        }else
            {
                return entryStation - departureStation;
            };
    },

    //determines whether or not the trip starts and ends on the same line
    'isOnSameLine': function( entryLine, departureLine )
    {
        if ( entryLine === departureLine )
        {
            return true;
        }else
            {  
                return false;
            };
    },

    //Calculates where to change based on the train lines provided
    'whereToChange': function ( lineOne, lineTwo )
    {
        let stationToChangeAt = `Change at`;
        //creates an array "matchingStations" for elements that are the same as each other 
        const matchingStations = this[lineOne].filter(element => this[lineTwo].includes(element));
        const unionIntersection = matchingStations.filter(element => element === `Union Square`);
        //you could also change the above to the following:
        //const interseciton = matchingStations.filter(element => element === matchingStations[0]);
        //this line of code would result in finding the first common station between 2 lines and then changing there
        stationToChangeAt = `${stationToChangeAt} ${unionIntersection}.`;
        return stationToChangeAt;
    },

    //Adds the name of stations travelled through to a "trip log" message
    'addStationToMsg': function ( currentmessage, startStation, endStation, line)
    {
        //if statement accounts for the direction of the train
        if ( startStation < endStation)
        {
            stationNextToStart = startStation + 1;
            for ( i = stationNextToStart; i <= endStation ; i++ )
            {
                if (i === stationNextToStart)
                    {
                        currentmessage = `${currentmessage} ${this[line][i]}`;
                    }else
                    {
                        currentmessage = `${currentmessage}, ${this[line][i]}`;
                    };
            };
        }else
        {
            stationNextToStart = startStation - 1;
            for ( i = stationNextToStart; i >= endStation ; i-- )
            {
                if (i === stationNextToStart)
                    {
                        currentmessage = `${currentmessage} ${this[line][i]}`;
                    }else
                    {
                        currentmessage = `${currentmessage}, ${this[line][i]}`;
                    };
            };
        };
        return currentmessage;
    },


    //sets up the trip outline to be outputted to the user
    'lineTravelledMsg': function ( startStation, endStation, line, changedLines )
    {
        if ( changedLines === false ){
            let message = `You must travel through the following stops on the ${line} line:`;
            message = `${this.addStationToMsg(message, startStation, endStation, line)}.`;
            return message;
        }else
            {
                let message = `Your journey continues on the ${line} line, through the following stops:`;
                message = `${this.addStationToMsg(message, startStation, endStation, line)}.`;
                return message;
            };
    },

    'totalStopsMsg': function( numberOfStops )
    {
        return `${numberOfStops} stops in total.`
    },

    'planTrip': function( startLine, startStation, endLine, endStation)
    {
        //determine whether or not the trip is on one line
        const oneLineTrip = this.isOnSameLine(startLine, endLine);
        let changedBtwnLines = false;

        //this plot some key indexes based on the trip requested
        const firstOfLineStart = this.getIndex(startLine, this[startLine][0]);
        const firstOfLineEnd = this.getIndex(endLine, this[endLine][0]);
        const posInLineStart = this.getIndex(startLine, startStation);
        const posInLineEnd = this.getIndex(endLine, endStation);
        const posOfUnionStart = this.getIndex(startLine, `Union Square`);
        const posOfUnionEnd = this.getIndex(endLine, `Union Square`);
        
        //evaluate a trip
        if ( oneLineTrip )
        {
            console.log(this.lineTravelledMsg(posInLineStart, posInLineEnd, startLine, changedBtwnLines));
            console.log(this.totalStopsMsg(this.countStops(posInLineStart, posInLineEnd)));
        }else
            {
                console.log(this.lineTravelledMsg(posInLineStart, posOfUnionStart, startLine, changedBtwnLines));
                changedBtwnLines = true;
                console.log(this.whereToChange( startLine, endLine ));
                console.log(this.lineTravelledMsg(posOfUnionEnd, posInLineEnd, endLine, changedBtwnLines));
                console.log(this.totalStopsMsg(( this.countStops(posInLineStart, posOfUnionStart) + this.countStops(posOfUnionEnd, posInLineEnd) )));
            };
    }
};

mta.planTrip( `N` , `Times Square` , `N` , `8th` ); //test a single line trip
mta.planTrip( `N` , `Times Square` , `6` , `33rd` ); //test the given case in the HW task
//another test to confirm the code can handle a case outside of the homework task
mta.planTrip( `L` , `6th` , `6` , `33rd` );
