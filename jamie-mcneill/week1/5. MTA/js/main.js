
const mtn = {

    nLine: [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    lLine: [ "8th", "6th", "Union Square", "3rd", "1st" ],
    sixLine: [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]

}

const tripPlan = function (line1, stop1, line2, stop2) {
     if (line1 === line2) {
      return // Array point stop 1, to array point stop 2.
    }
  };

console.log(`You would like to travel from ${line1}${stop1} to ${line2}${stop2}`);
console.log(`the recommended route is:`);

// if line 1 and line 2 = same / no change required / console log route from stop 1 to stop 2.
 console.log(`You must travel through the following stops on the ${line1} line ${      }`);
 console.log(`No change required`);

// if line 1 and line 2 are not equal. Print route from line 1 to Union Square.
 console.log(`Travel through the following stops on the ${line1} line ${     }`);


//find union square in line2 and print out remaining route to stop2
 console.log (`change at Union square`);
 console.log (`Contine on the follwing stops on the ${line2} line ${     }`);


//print the total number of stops
 console.log (`Total number of stops ${     }`)
}


// //finding index number of stop 1.
// if (line1 === "N") {
//     const indexOfStop1N = mtn.nLine.indexOf(stop1);
//   } else if (line1 === "L") {
//     const indexOfStop1L = mtn.lLine.indexOf(stop1);
//   } else (line1 === "6") {
//     const indexOfStop16 = mtn.sixLine.indexOf(stop1);
// }
//
// //findin the index number of stop 2.
// if (line2 === "N") {
//       const indexOfStop2N = mtn.nLine.indexOf(stop2);
//     } else if (line1 === "L") {
//       const indexOfStop2l = mtn.lLine.indexOf(stop2)
//     } else if (line1 === "6") {
//       const indexOfStop16 = mtn.sixLine.indexOf(stop2);
//     }



const indexUnionSquareN = mtn.nLine.indexOf("Union Square");
const indexUnionSquareL = mtn.lLine.indexOf("Union Square");
const indexUnionSquare6 = mtn.sixLine.indexOf("Union Square");

console.log(indexUnionSquareN);
console.log(indexUnionSquareL);
console.log(indexUnionSquare6);
//Prints 4,2,4


// const tripPlan = (line1, stop1, line2, stop2) {

// }

//toString

//toString prints out array as a comma separated string
const nLineString = mtn.nLine.toString();
//prints 8th,6th,Union Square,3rd,1st

const lLineString = mtn.lLine.toString();
//prints Grand Central,33rd,28th,23rd,Union Square,Astor Place

console.log(nLineString);
console.log(lLineString);

//Join
//same as toString but you can specify a separator
const sixLineJoin =mtn.sixLine.join("*");
console.log(sixLineJoin);
//Prints Grand Central*33rd*28th*23rd*Union Square*Astor Place

//Pushing
//The push() method adds a new element to the end of an array and logs the new array length.

const nLinePush = mtn.nLine.push("Central");
console.log(nLinePush);
//Logs 7 as the array length previously was 6.

//Popping
//The pop() method shows/removes the last element from an array:

const nLinePop = mtn.nLine.pop();
console.log(nLinePop);
//Logs central as we pushed central to the end of the array.

//shifting
//The shift() method removes the first array element and "shifts" all other elements to a lower index.

const nLineShift = mtn.nLine.shift();
console.log(nLineShift);
//returns Times Square, the first array that was shifted out.

//unshifting
//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

const nLineUnshift = mtn.nLine.unshift();
console.log(nLineUnshift);
//

//changing array elements - Array indexing
//Array indexes start with 0. [0] is the first array element, [1] is the second, [2] is the third ...
mtn.nLine[0]="Trafalgar";
console.log(mtn.nLine[0]);

//length
//The length property provides an easy way to append a new element to an array.
//you can also use it in for loops to say when a loop reaches the length of an array then stop the loop.

mtn.nLine[mtn.length] = "kiwi";
console.log (mtn.nLine);
//Prints ["Trafalgar", "28th", "23rd", "Union Square", "8th", undefined: "kiwi"]

//Deleting elements
//Since JavaScript arrays are objects, elements can be deleted by using the
//JavaScript operator delete:

delete mtn.nLine[0];
//better to use pop or shift instead.

//Splicing an Array.
//The splice() method can be used to add new items to an array:

mtn.nLine.splice(2,0,"Holborn","Clapham");
console.log(mtn.nLine);
//The first parameter (2) defines the position where new elements should be added (spliced in).

//The second parameter (0) defines how many elements should be removed.

//The rest of the parameters ("Holborn","Clapham") define the new elements to be added.

//The splice() method returns an array with the deleted items:

//Prints (7) [empty, "28th", "Holborn", "Clapham", "23rd", "Union Square", "8th", undefined: "kiwi"]

// //Using splice() to Remove Elements
// With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

mtn.nLine.splice(1,0); //removes the first element.
// The first parameter (0) defines the position where new elements should be added (spliced in).
//
// The second parameter (1) defines how many elements should be removed.
//
// The rest of the parameters are omitted. No new elements will be added.

// Merging (Concatenating) Arrays
// The concat() method creates a new array by merging (concatenating) existing arrays:

const newLine = mtn.nLine.concat(mtn.lLine);
console.log(newLine);

//joins nline and lline.
//creates a new array stored in a new variable.
//The concat() method does not change the existing arrays. It always returns a new array.
//it can take any number of array arguments.

//The concat() method can also take values as arguments:

const newLine2 = mtn.nLine.concat(["Email", "Tobias"]);
console.log(newLine2);

//Slicing an Array

// The slice() method slices out a piece of an array into a new array.
//

let mainLine = mtn.nLine.slice(1);

//Would slice out from position 1 of the mtn.nLine array to the end and stor the result in a variable.

console.log(mainLine);
// prints ["28th", "Holborn", "Clapham", "23rd", "Union Square", "8th"]

//it doesn't remove anything from the original array.

//Slice can take 2 arguments eg slice(1, 3)
//The method then selects elements from the start argument, and up to (but not including) the third argument.

let centralLine = mtn.nLine.slice(1,3);
console.log(centralLine);

// Automatic toString()
// JavaScript automatically converts an array to a comma separated string when a primitive value is expected.
//
// This is always the case when you try to output an array.
//

//
// Example

// To String:
// The toString() method returns an array as a comma separated string:


/* Other Array Properties and Methods:

Array Properties

Property	Description

constructor: Returns the function that created the Array object's prototype

prototype: 	Allows you to add properties and methods to an Array object.

Array Methods:

Method	Description


copyWithin()	Copies array elements within the array, to and from specified positions:

entries()	Returns a key/value pair Array Iteration Object:

every()	Checks if every element in an array pass a test

fill()	Fill the elements in an array with a static value

filter()	Creates a new array with every element in an array that pass a test

find()	Returns the value of the first element in an array that pass a test

findIndex()	Returns the index of the first element in an array that pass a test

forEach()	Calls a function for each array element

from()	Creates an array from an object

includes()	Check if an array contains the specified element

isArray()	Checks whether an object is an array

join()	Joins all elements of an array into a string

keys()	Returns a Array Iteration Object, containing the keys of the original array

lastIndexOf()	Search the array for an element, starting at the end, and returns its position

map()	Creates a new array with the result of calling a function for each array element


reduce()	Reduce the values of an array to a single value (going left-to-right)

reduceRight()	Reduce the values of an array to a single value (going right-to-left)

reverse()	Reverses the order of the elements in an array

shift()	Removes the first element of an array, and returns that element

some()	Checks if any of the elements in an array pass a test

sort()	Sorts the elements of an array

splice()	Adds/Removes elements from an array

toString()	Converts an array to a string, and returns the result

unshift()	Adds new elements to the beginning of an array, and returns the new length

valueOf()	Returns the primitive value of an array*/


// Looping Array Elements
// The safest way to loop through an array, is using a for loop:
