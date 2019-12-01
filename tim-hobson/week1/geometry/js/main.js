// Geometry Function Lab
// Part 1, Rectangle
// Given a rectangle object like the one below, write the following functions:
// const rectangle = {
//   length: 4,
//   width: 4
// };

// In other words, these functions should take as their only argument a single object with the same keys (length, width) as the rectangle object above, and use that object to make the calculations.

const rectangle = {
  length: 4,
  width: 4
}

console.log('Rectangle results:');
// isSquare(rect) - Returns whether the rectangle is a square or not
let isSquare = function ( rect ) {
  if (rect.length === rect.width) {
    // return true;
    return `This shape is a square!` //number or boolean result

  } if (rect.length !== rect.width) {
    // return false;
    return 'This shape is not a square!' //number or boolean result
  }
};

console.log(isSquare(rectangle));

// area(rect) - Returns the area of the rectangle
let area = function ( rect ) {

  // return (rect.length * rect.width)
  return `${(rect.length * rect.width)} units squared` //number or string results


}

console.log(area(rectangle));

// perimeter(rect) - Returns the perimeter of the rectangle
let perimeter = function ( rect ) {

  // return  ((rect.length + rect.width) * 2)
  return  `${((rect.length + rect.width) * 2)} units long` //number or string results

}

console.log(perimeter(rectangle));





// Part 2, Triangle
// Given a triangle object like the one below, write the following functions:
//
// const triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };

const triangle = {

  sideA: 8,
  sideB: 2,
  sideC: 4

};

console.log('Triangle results:');


// isEquilateral(tri) - Returns whether the triangle is equilateral or not

let isEquilateral = function( tri ) {

  // if ((tri.sideA === tri.sideB || tri.sideA === tri.sideC || tri.sideB === tri.sideC)  this is incorrect
  if ((tri.sideA === tri.sideB) && (tri.sideB === tri.sideC))

  {
    return `This triangle is an equilateral triangle!`
  // } else {
  } else {
    // return false;
    return `This triangle is not an equilateral triangle.`
  }
};

console.log(isEquilateral(triangle));

// isIsosceles(tri) - Returns whether the triangle is isosceles or not
// A triangle with two equal sides, the angles opposite the equal sides are also equal

let isIsosceles = function ( tri ) {

  if ((tri.sideA === tri.sideB || tri.sideA === tri.sideC || tri.sideB === tri.sideC)) {
    // return true;
    return `This triangle is an isosceles triangle!`
  } else {
    // return false;
    return `This triangle is not an isosceles triangle.`
  }
};

console.log(isIsosceles(triangle));



// isObtuse(tri) - Returns whether the triangle is obtuse or not


//to find obtuse - we need to use pythagoras therum
// x is longest side then  x**2 = y**2 + z**2 if right angle triangle
  // if
//can use this to determine all types
//so need to find the TWO SHORTEST SIDES
// sideA sideB sideC - find the longest or two shortest.


const pythagoras = function ( tri ) {

  if
    (tri.sideA > (tri.sideB && tri.sideC))
    {
      let longestSide = tri.sideA;
      let sideX = tri.sideB;
      let sideY = tri.sideC;
      console.log(` A > B || C `);
      console.log(`Longest side = ${longestSide}`);
      console.log(`Side X, one of the other 2 smaller sides = ${sideX}`);
      console.log(`Side Y, the other of the 2 smaller sides = ${sideY}`);
    }
  if
    (tri.sideB > (tri.sideA && tri.sideC))
    {
      let longestSide = tri.sideB;
      let sideX = tri.sideA;
      let sideY = tri.sideC;
      console.log(`B > A || C`);
      console.log(`Longest side = ${longestSide}`);
      console.log(`Side X, one of the other 2 smaller sides = ${sideX}`);
      console.log(`Side Y, the other of the 2 smaller sides = ${sideY}`);
    }
  if
    (tri.sideC > (tri.sideA && tri.sideB))
    {
      let longestSide = tri.sideC;
      let sideX = tri.sideA;
      let sideY = tri.sideB;
      console.log(`C > A || B`);
      console.log(`Longest side = ${longestSide}`);
      console.log(`Side X, one of the other 2 smaller sides = ${sideX}`);
      console.log(`Side Y, the other of the 2 smaller sides = ${sideY}`);
    }
  else if
    ((tri.sideA === tri.sideB || tri.sideA === tri.sideC || tri.sideB === tri.sideC))
    {
      let result = 'The triangle is a Equilateral triangle';
      // var result = 'You do not have an obtuse triangle';
      console.log(result);
    }
  let longestSideSquared = longestSide**2;
  let sideXSquared = sideX**2;
  let sideYSquared = sideY**2;
  // console.log(`Longest Side Squared = ${longestSideSquared}, Side X Squared = ${sideXSquared}, Side Y Squared = ${sideYSquared}`);
  let smallerSidesSum = (sideXSquared + sideYSquared);
  // console.log(`The Sum of Side X Squared and Side Y Squared is ${smallerSidesSum}`);
  if ( longestSideSquared > smallerSidesSum )
  {
    result = "You have an obtuse triangle!";
    console.log(result);
  }
  if ( longestSideSquared < smallerSidesSum )
  {
    result = "You have an acute triangle!"
    // result = "Your triangle is not obtuse";
    console.log(result);
  }
  if ( longestSideSquared === smallerSidesSum )
  {
    result = "You have a Right Triangle!"
  }

};

console.log(pythagoras(triangle));

// To help you visualize this, think of an equilateral triangle with sides of length 5. We know that this is an acute triangle. If you plug in 5 for each number in the Pythagorean Theorem we get 52+52=52 and 50>25. Therefore, if a2+b2>c2, then lengths a, b, and c make up an acute triangle. Conversely, if a2+b2<c2, then lengths a, b, and c make up the sides of an obtuse triangle. It is important to note that the length ‘‘c″ is always the longest.
//the sum of x2 + y2 = smallerSidesSum

//QUESTION - why does let in a function  not work unless it's predefined but var does?

// As above, these functions should take a single object as an argument, which will have the same keys as the triangle above, and which you will use for your calcuations.

// area(tri) - Returns the area of the Triangle

//area = 1/2bh = (base * height) / 2

console.log(`Find the area of a triangle:`);

let triArea = function ( tri ) {
  const pythagorasArea = function ( tri ) {
    if
      (tri.sideA > (tri.sideB && tri.sideC))
      {
        var longestSide = tri.sideA;
        var sideX = tri.sideB;
        var sideY = tri.sideC;
        }
    if
      (tri.sideB > (tri.sideA && tri.sideC))
      {
        var longestSide = tri.sideB;
        var sideX = tri.sideA;
        var sideY = tri.sideC;
        }
    if
      (tri.sideC > (tri.sideA && tri.sideB))
      {
        var longestSide = tri.sideC;
        var sideX = tri.sideA;
        var sideY = tri.sideB;
        }
    else if
      ((tri.sideA === tri.sideB || tri.sideA === tri.sideC || tri.sideB === tri.sideC))
      {
        return 'equilateral';
      }
    let longestSideSquared = longestSide**2;
    let sideXSquared = sideX**2;
    let sideYSquared = sideY**2;
    let smallerSidesSum = (sideXSquared + sideYSquared);
    if ( longestSideSquared > smallerSidesSum )
    {
      return 'obtuse';
    }
    if ( longestSideSquared < smallerSidesSum )
    {
      return 'acute';
    }
    if ( longestSideSquared === smallerSidesSum )
    {
      return 'right';
    };

  }
  console.log(pythagorasArea(triangle).sideX);
  if (pythagorasArea(tri) === 'equilateral')
  {
    result = ((tri.sideA * tri.sideB) / 2)
    console.log(result);
  }
  if (pythagorasArea(tri) === 'obtuse')
  {
    result = `obtuse`
  }
  if (pythagorasArea(tri) === 'acute')
  {
    result = `acute`
  }
  if (pythagorasArea(tri) === 'right')
  {
    result = `right`
  }



}

console.log(triArea(triangle));
