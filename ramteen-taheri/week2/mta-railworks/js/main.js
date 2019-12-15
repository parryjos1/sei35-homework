const lines = {
    N: ["Times Square", "34th", "28thN", "23rdL", "Union Square", "8thN"],
    L: ["8thL", "6th", "Union Square", "3rd", "1st"],
    SIX: ["Grand Central", "33rd", "28th6", "23rdSix", "Union Square", "Astor Place"]
};


const planTrip = function(lineOrigin, stopOrigin, lineDest, stopDest) {

    let stopsArray = [];
    let stopsArray2 = [];
    let stopCount = 0;

    //code for planning the trip
    if(lineOrigin.toLowerCase() === lineDest.toLowerCase()) {
        //train is on the same line

        console.log(`Stay on the ${lineOrigin} train line.`);

        //get the indexes
        let startIndex = lines[lineOrigin].indexOf(stopOrigin);
        let endIndex = lines[lineOrigin].indexOf(stopDest);

        //trace the stops from stopOrigin to stopDest
        

        if(startIndex > endIndex) {
            for(let x = startIndex-1; x >= endIndex; x--) {
                stopsArray.push(lines[lineOrigin][x]);
                stopCount++;
                if(lines[lineOrigin][x].toLowerCase() === stopDest.toLowerCase()) {
                    break;
                }
            }
        } else if(endIndex > startIndex) {
            for(let x = startIndex+1; x <= endIndex; x++) {
                stopsArray.push(lines[lineOrigin][x]);
                stopCount++;
                if(lines[lineOrigin][x].toLowerCase() === stopDest.toLowerCase()) {
                    break;
                }
            }
        } 
        if(startIndex === endIndex) {
            console.log('You are already at your destination.');
        } else {
            console.log(`You must travel amongst the following stops along the ${lineOrigin} line:`);
                console.log(stopsArray.join(" "));
                console.log(`Number of stops: ${stopCount}`);
        }

    } else {
        //destination is on a different train line (complete later)
        //trace the stops to Union Square on the origin line
        //trace the stops from union square to the destination stop on the destination line

        //get the indexes
        let startIndex = lines[lineOrigin].indexOf(stopOrigin);
        let transferIndexOrigin = lines[lineOrigin].indexOf("Union Square");
        let transferIndexDest = lines[lineDest].indexOf("Union Square");
        let endIndex = lines[lineDest].indexOf(stopDest);

        


        //before the transfer

        if(startIndex > transferIndexOrigin) {
            //move down array
            for(let x = startIndex-1; x >= transferIndexOrigin; x--) {
                stopsArray.push(lines[lineOrigin][x]);
                stopCount++;
                if(lines[lineOrigin][x].toLowerCase() === stopDest.toLowerCase()) {
                    break;
                }
            }
        } else if(startIndex < transferIndexOrigin){
            //move up array
            for(let x = startIndex+1; x <= transferIndexOrigin; x++) {
                stopsArray.push(lines[lineOrigin][x]);
                stopCount++;
                if(lines[lineOrigin][x].toLowerCase() === stopDest.toLowerCase()) {
                    break;
                }
            }
        }
        
    
        console.log(`You must travel amongst the following stops along the ${lineOrigin} line:`);
        if(startIndex !== transferIndexOrigin) {
            console.log(stopsArray.join(" "));
        }

        console.log("Change at Union Square.");
        

        if(endIndex < transferIndexDest) {
            //move down array
            for(let x = transferIndexDest-1; x >= endIndex; x--) {
                stopsArray2.push(lines[lineDest][x]);
                stopCount++;
                if(lines[lineDest][x].toLowerCase() === stopDest.toLowerCase()) {
                    break;
                }
            }
        } else if(endIndex > transferIndexDest){
            //move up array
            for(let x = transferIndexDest+1; x <= endIndex; x++) {
                stopsArray2.push(lines[lineDest][x]);
                stopCount++;
                if(lines[lineDest][x].toLowerCase() === stopDest.toLowerCase()) {
                    break;
                }
            }
        }

        console.log(`Continue along the ${lineDest} line:`);
        console.log(stopsArray2.join(" "));
        console.log(`Number of stops: ${stopCount}`);
    }
};

// planTrip('N', "Times Square", 'SIX', '33rd');
// planTrip('N', "Times Square", 'SIX', '28th6');
planTrip('N', "Times Square", 'N', 'Times Square');