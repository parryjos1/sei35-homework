console.log("Hello World!!!");

// Part 1, Rectangle
// Given a rectangle object like the one below, write the following functions:
//


// In other words, these functions should take as their only argument a single object with the same keys (length, width) as the rectangle object above, and use that object to make the calculations.

const rectangle = {
  length: 4,
  width: 4
};

// isSquare(rect) - Returns whether the rectangle is a square or not

const isSquare = function ( object ) {
  if (object.length === object.width) {
    console.log('you a square');
  } else {
    console.log('not a square');
  }
};

isSquare(rectangle);

// area(rect) - Returns the area of the rectangle

const area = function ( object ) {
  console.log(object.length * object.width);
};

area(rectangle);

// perimeter(rect) - Returns the perimeter of the rectangle

const perimeterRec = function ( object ) {
  console.log((object.length * 2) + (object.width * 2));
};

perimeterRec(rectangle);



// Given a triangle object like the one below, write the following functions:
//





// As above, these functions should take a single object as an argument, which will have the same keys as the triangle above, and which you will use for your calcuations.

const triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};


// isEquilateral(tri) - Returns whether the triangle is equilateral or not

const isEquilateral = function ( object ) {
  // if ( triangle.sideA === triangle.sideB === triangle.sideC ) {  //cant do this. does side
  if (( object.sideA === object.sideB) && (object.sideA === object.sideC )) {
    console.log('This is equilateral');
  } else {
    console.log('Imposter');
  }
}

isEquilateral(triangle);



// isIsosceles(tri) - Returns whether the triangle is isosceles or not

// const triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };


const isIsosceles = function ( object ) {
  if (object.sideA === object.sideB || object.sideA === object.sideC || object.sideB === object.sideC) {
    return ('is isosceles');
  } else {
    return ('not isosceles');
  };

};

isIsosceles(triangle);



// area(tri) - Returns the area of the Triangle

// Let a,b,c be the lengths of the sides of a triangle. The area is given by:
// Area	=	 √	 p	 (	p	−	a	) 	(	p	−	b	)	 (	p	−	c	)
// where p is half the perimeter, or
// a	+	b	+	c
// 2


//find half the perimeter

//perimeter loop

const areaTriangle = function ( object ) {

  const halfPerimeter = (object.sideA + object.sideB + object.sideC ) / 2;  // quicker way

  const areaCalc = Math.sqrt( halfPerimeter * (halfPerimeter - object.sideA),(halfPerimeter - object.sideB),(halfPerimeter - object.sideC)); //and this - from every key store answer

  console.log(areaCalc);

}

areaTriangle(triangle);

// isObtuse(tri) - Returns whether the triangle is obtuse or not

 // if a squared + b squared is less than c squared

 const isObtuse  = function ( object ) {

  //  for ( const key in object){                   //squaring the value and loging it
  //  	const value = Math.pow(object[ key ], 2);
  //   console.log( value );
  // }

   if (Math.pow(object.sideA, 2) + Math.pow(object.sideB, 2) < Math.pow(object.sideC, 2)) {
     console.log('Triangle is obtuse');
   } else {
     console.log('Triangle not obtuse');
   }
 }

isObtuse(triangle);
