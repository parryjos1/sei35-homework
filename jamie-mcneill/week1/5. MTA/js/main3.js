const mtn = {
    n: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    l: [ "8th", "6th", "Union Square", "3rd", "1st" ],
    six: [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}
//Prompt User to enter
const promptUser = function(){
  console.log(`Please enter your embarking line (n, l, or six) and stop and your destination line(n, l, or six) and stop.`);
}

//Log trip Plan
const tripPlan = function (line1, stop1, line2, stop2) {
    //display the users start and end destination
    console.log(`You would like to travel from line ${line1} stop ${stop1} to line ${line2} stop ${stop2}`);
    // prompt that their reccomended route is:
    console.log(`The recommended route is:`);

    //if the lines are equal, print the journey from the start to end point.
    let indexNumStop1 = mtn[line1].indexOf(stop1);
    //Gives index number of stop2 on line 2
    let indexNumStop2 = mtn[line2].indexOf(stop2);

    let indexNumUnion1 = mtn[line1].indexOf("Union Square");
    //Gives index number of Union Square line 1

    let indexNumUnion2 = mtn[line2].indexOf("Union Square")+ 1;
    //Gives index number of Union Square line 2

    //Works
    if (line1 === line2 && indexNumStop1 < indexNumStop2) {
    let indexNumStop1 = mtn[line1].indexOf(stop1);
    let indexNumStop2 = mtn[line2].indexOf(stop2) + 1;
    let journeySingleLine = mtn[line1].slice(indexNumStop1,indexNumStop2);

    console.log(`You need to take the ${line1} line through the following stops ${journeySingleLine}`);
    console.log(`No changes`);

    //Works
  } else if (line1 === line2 && indexNumStop1 > indexNumStop2) {

    let indexNumStop1 = mtn[line1].indexOf(stop1) + 1;
    let indexNumStop2 = mtn[line2].indexOf(stop2);
    const journeySingleLine2 =  mtn[line1].slice(indexNumStop2, indexNumStop1);
    let reverse = journeySingleLine2.reverse();

    console.log(`You need to take the ${line1} line through the following stops ${reverse}`);
    console.log(`No changes`);

    //Works
  }  else if (line1 !== line2 && indexNumStop1 < indexNumUnion1 &&    indexNumUnion2 < indexNumStop2){

     let indexNumStop1 = mtn[line1].indexOf(stop1);
     let indexNumUnion1 = mtn[line1].indexOf("Union Square")+ 1;
     let journeyToUnion =  mtn[line1].slice(indexNumStop1,indexNumUnion1);

     console.log (`You need to take the ${line1} line through the following stops ${journeyToUnion}.`)
     console.log(`Change at Union Square`);

     let indexNumStop2 = mtn[line2].indexOf(stop2) + 1;
     let indexNumUnion2 = mtn[line2].indexOf("Union Square")+ 0
     let journeyToStop2 = mtn[line2].slice(indexNumUnion2, indexNumStop2);

     console.log (`Then take the ${line2} line through the following stops ${journeyToStop2}`)

    //Works
  } else if (line1 !== line2 && indexNumStop1 < indexNumUnion1 && indexNumUnion2 > indexNumStop2) {

    let indexNumStop1 = mtn[line1].indexOf(stop1);
    let indexNumUnion1 = mtn[line1].indexOf("Union Square") + 1;
    let journeyToUnion =  mtn[line1].slice(indexNumStop1,indexNumUnion1);

    console.log (`You need to take the ${line1} line through the following stops ${journeyToUnion}.`)
    console.log(`Change at Union Square`);

    let indexNumStop2 = mtn[line2].indexOf(stop2);
    let indexNumUnion2 = mtn[line2].indexOf("Union Square") + 1;
    let line2journey = mtn[line2].slice(indexNumStop2, indexNumUnion2);
    let reverse2 = line2journey.reverse();
    console.log (`Then continue on ${line2} line through ${reverse2} `);

  //Works
  }  else if (line1 !== line2 && indexNumStop1 > indexNumUnion1 && indexNumUnion2 > indexNumStop2) {

    let indexNumStop1 = mtn[line1].indexOf(stop1) + 1;
    let indexNumUnion1 = mtn[line1].indexOf("Union Square");
    let line1journeyUnion = mtn[line1].slice(indexNumUnion1,indexNumStop1);
    let reverse1 = line1journeyUnion.reverse();

    console.log(`You need to take the ${line1} line through the following stops ${reverse1}.`)

    console.log(`Change at Union Square`);

    let indexNumStop2 = mtn[line2].indexOf(stop2);
    let indexNumUnion2 = mtn[line2].indexOf("Union Square") + 1;
    let line2journey = mtn[line2].slice(indexNumStop2,indexNumUnion2);
    let reverse2 = line2journey.reverse();

    console.log (`Then continue on ${line2} line through ${reverse2}`);

  } else {

    let indexNumStop1 = mtn[line1].indexOf(stop1) + 1;
    let indexNumUnion1 = mtn[line1].indexOf("Union Square");
    let line1journeyUnion = mtn[line1].slice(indexNumUnion1,indexNumStop1);
    let reverse1 = line1journeyUnion.reverse();

    console.log(`You need to take the ${line1} line through the following stops ${reverse1}.`)
    console.log(`Change at Union Square`);

    let indexNumStop2 = mtn[line2].indexOf(stop2) + 1;
    let indexNumUnion2 = mtn[line2].indexOf("Union Square");
    let journeyToStop2 = mtn[line2].slice(indexNumUnion2, indexNumStop2);

    console.log (`Then take the ${line2} line through the following stops ${journeyToStop2}`)
  }
}

promptUser();
console.log(tripPlan("n", "8th", "six", "33rd"));

// (line1 !== line2 && indexNumStop1 > indexNumUnion1 && indexNumUnion2 < indexNumStop2 )
