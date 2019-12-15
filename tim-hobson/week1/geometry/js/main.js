// Geometry Function Lab
// Part 1, Rectangle
// Given a rectangle object like the one below, write the following functions:
const rectangle = {
  length: 4,
  width: 4
}

// In other words, these functions should take as their only argument a single object with the same keys (length, width) as the rectangle object above, and use that object to make the calculations.

// isSquare(rect) - Returns whether the rectangle is a square or not
console.log('Rectangle results:');
let isSquare = function ( rect ) {
  if (rect.length === rect.width) { // return true;
    return `This shape is a square!`
  } else { // had this as -if (rect.length !== rect.width) but an else statement was faster
    return 'This shape is not a square!'
  }
};
console.log(isSquare(rectangle));

// area(rect) - Returns the area of the rectangle
let areaRect = function ( rect ) {
  return `${(rect.length * rect.width)} units squared`
}
console.log(areaRect(rectangle));

// perimeter(rect) - Returns the perimeter of the rectangle
let perimeter = function ( rect ) {
  return  `${((rect.length + rect.width) * 2)} units long`
}
console.log(perimeter(rectangle));

// Part 2, Triangle
// Given a triangle object like the one below, write the following functions:

const triangle = {

  sideA: 22.6,
  sideB: 24,
  sideC: 19.4

};

console.log('Triangle results:');

// isEquilateral(tri) - Returns whether the triangle is equilateral or not
let isEquilateral = function( tri ) {
  if ((tri.sideA === tri.sideB) && (tri.sideB === tri.sideC)) {// (tri.sideA === tri.sideB || tri.sideA === tri.sideC || tri.sideB === tri.sideC) shows as incorrect, as it does the internal equals first, then each other statement is true || statement. Best to use what we used as if A === B and B === C, A has to === C.
    return `This triangle is an equilateral triangle!`
  } else {
    return `This triangle is not an equilateral triangle.`
  }
};
console.log(isEquilateral(triangle));

// isIsosceles(tri) - Returns whether the triangle is isosceles or not
// A triangle with two equal sides, the angles opposite the equal sides are also equal
let isIsosceles = function ( tri ) {
  if ((tri.sideA === tri.sideB || tri.sideA === tri.sideC || tri.sideB === tri.sideC)) {  // checks that at least two sides are equal to each other
    return `This triangle is an isosceles triangle!`
  } else {
    return `This triangle is not an isosceles triangle.`
  }
};
console.log(isIsosceles(triangle));

let longestSide = 0
let longestSideSquared = 0
let smallerSidesSquared = 0
let obtuseArray = []
// isObtuse(tri) - Returns whether the triangle is obtuse or not
const isObtuse = function ( tri ) {
  // find which is longest side
  for ( var key in tri ) {
    obtuseArray.push(tri[key]) // turns the object of triangle into an array
    }
  obtuseArray.sort() // sorts the array into ascending order
  var longestSideSquared = (obtuseArray.pop()**2) // this saves the last number(which is now the largest) to longestSide, and might as well square this now to save space
    for (var i = 0; i < obtuseArray.length; i++) {
      smallerSidesSquared = smallerSidesSquared + (obtuseArray[i]**2) // loops throught the 2 in obtuseArray and squares them and adds them together
    }
  if (smallerSidesSquared < longestSideSquared) { // sum of two smallersidessquared < longestsquared then it is obtuse
    return "The triangle is obtuse!"
  } else {
    return "The triangle is not obtuse!"
  }
};
console.log(isObtuse(triangle));

// area(tri) - Returns the area of the Triangle
heronP = 0
const area = function ( tri ) {
  // using herons forumla, find P
  for (var key in tri) {
    heronP = heronP + ((tri[key])/2)
    }
  //square root of (p	 (	p	−	a	) 	(	p	−	b	)	 (	p	−	c	)) = area
  return `Area is ${Math.sqrt((heronP * (heronP - tri.sideA) * (heronP - tri.sideB) * (heronP - tri.sideC))).toFixed(2)} units squared`
};
console.log(area(triangle));



// Pythagoras function is useless. This was an awful side tangent I got stuck on - need to do better research into forumla for stuff before I get completely sidetracked
{
  //to find obtuse - we need to use pythagoras therum
  // x is longest side then  x**2 = y**2 + z**2 if right angle triangle
  // if
  //can use this to determine all types
  //so need to find the TWO SHORTEST SIDES
  // sideA sideB sideC - find the longest or two shortest.

  //
  // const pythagoras = function ( tri ) {
    //
    //   if
    //     (tri.sideA > (tri.sideB && tri.sideC))
    //     {
      //       let longestSide = tri.sideA;
      //       let sideX = tri.sideB;
      //       let sideY = tri.sideC;
      //       console.log(` A > B || C `);
      //       console.log(`Longest side = ${longestSide}`);
      //       console.log(`Side X, one of the other 2 smaller sides = ${sideX}`);
      //       console.log(`Side Y, the other of the 2 smaller sides = ${sideY}`);
      //     }
      //   if
      //     (tri.sideB > (tri.sideA && tri.sideC))
      //     {
        //       let longestSide = tri.sideB;
        //       let sideX = tri.sideA;
        //       let sideY = tri.sideC;
        //       console.log(`B > A || C`);
        //       console.log(`Longest side = ${longestSide}`);
        //       console.log(`Side X, one of the other 2 smaller sides = ${sideX}`);
        //       console.log(`Side Y, the other of the 2 smaller sides = ${sideY}`);
        //     }
        //   if
        //     (tri.sideC > (tri.sideA && tri.sideB))
        //     {
          //       let longestSide = tri.sideC;
          //       let sideX = tri.sideA;
          //       let sideY = tri.sideB;
          //       console.log(`C > A || B`);
          //       console.log(`Longest side = ${longestSide}`);
          //       console.log(`Side X, one of the other 2 smaller sides = ${sideX}`);
          //       console.log(`Side Y, the other of the 2 smaller sides = ${sideY}`);
          //     }
          //   else if
          //     ((tri.sideA === tri.sideB || tri.sideA === tri.sideC || tri.sideB === tri.sideC))
          //     {
            //       let result = 'The triangle is a Equilateral triangle';
            //       // var result = 'You do not have an obtuse triangle';
            //       console.log(result);
            //     }
            //   let longestSideSquared = longestSide**2;
            //   let sideXSquared = sideX**2;
            //   let sideYSquared = sideY**2;
            //   // console.log(`Longest Side Squared = ${longestSideSquared}, Side X Squared = ${sideXSquared}, Side Y Squared = ${sideYSquared}`);
            //   let smallerSidesSum = (sideXSquared + sideYSquared);
            //   // console.log(`The Sum of Side X Squared and Side Y Squared is ${smallerSidesSum}`);
            //   if ( longestSideSquared > smallerSidesSum )
            //   {
              //     result = "You have an obtuse triangle!";
              //     console.log(result);
              //   }
              //   if ( longestSideSquared < smallerSidesSum )
              //   {
                //     result = "You have an acute triangle!"
                //     // result = "Your triangle is not obtuse";
                //     console.log(result);
                //   }
                //   if ( longestSideSquared === smallerSidesSum )
                //   {
                  //     result = "You have a Right Triangle!"
                  //   }
                  //
                  // };
                  //
                  // console.log(pythagoras(triangle));
                  //
                }

// old area function - same as above. Better research next time.
{
                  // To help you visualize this, think of an equilateral triangle with sides of length 5. We know that this is an acute triangle. If you plug in 5 for each number in the Pythagorean Theorem we get 52+52=52 and 50>25. Therefore, if a2+b2>c2, then lengths a, b, and c make up an acute triangle. Conversely, if a2+b2<c2, then lengths a, b, and c make up the sides of an obtuse triangle. It is important to note that the length ‘‘c″ is always the longest.
                  //the sum of x2 + y2 = smallerSidesSum
                  //area = 1/2bh = (base * height) / 2
                  // console.log(`Find the area of a triangle:`);
                  //
                  // let triArea = function ( tri ) {
                    //   const pythagorasArea = function ( tri ) {
                      //     if
                      //       (tri.sideA > (tri.sideB && tri.sideC))
                      //       {
                        //         var longestSide = tri.sideA;
                        //         var sideX = tri.sideB;
                        //         var sideY = tri.sideC;
                        //         }
                        //     if
                        //       (tri.sideB > (tri.sideA && tri.sideC))
                        //       {
                          //         var longestSide = tri.sideB;
                          //         var sideX = tri.sideA;
                          //         var sideY = tri.sideC;
                          //         }
                          //     if
                          //       (tri.sideC > (tri.sideA && tri.sideB))
                          //       {
                            //         var longestSide = tri.sideC;
                            //         var sideX = tri.sideA;
                            //         var sideY = tri.sideB;
                            //         }
                            //     else if
                            //       ((tri.sideA === tri.sideB || tri.sideA === tri.sideC || tri.sideB === tri.sideC))
                            //       {
                              //         return 'equilateral';
                              //       }
                              //     let longestSideSquared = longestSide**2;
                              //     let sideXSquared = sideX**2;
                              //     let sideYSquared = sideY**2;
                              //     let smallerSidesSum = (sideXSquared + sideYSquared);
                              //     if ( longestSideSquared > smallerSidesSum )
                              //     {
                                //       return 'obtuse';
                                //     }
                                //     if ( longestSideSquared < smallerSidesSum )
                                //     {
                                  //       return 'acute';
                                  //     }
                                  //     if ( longestSideSquared === smallerSidesSum )
                                  //     {
                                    //       return 'right';
                                    //     };
                                    //
                                    //   }
                                    //   console.log(pythagorasArea(triangle).sideX);
                                    //   if (pythagorasArea(tri) === 'equilateral')
                                    //   {
                                      //     result = ((tri.sideA * tri.sideB) / 2)
                                      //     console.log(result);
                                      //   }
                                      //   if (pythagorasArea(tri) === 'obtuse')
                                      //   {
                                        //     result = `obtuse`
                                        //   }
                                        //   if (pythagorasArea(tri) === 'acute')
                                        //   {
                                          //     result = `acute`
                                          //   }
                                          //   if (pythagorasArea(tri) === 'right')
                                          //   {
                                            //     result = `right`
                                            //   }
                                            //
                                            //
                                            //
                                            // }
                                            //
                                            // console.log(triArea(triangle));
                                          }
