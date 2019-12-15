/***** PART 1, RECTANGLE *****/

const myRectangle = {
    length: 4,
    width: 4,
};

// isSquare(rect) - Returns whether the rectangle is a square or not
const isSquare = function( rect ) {
    if ( rect.length === rect.width ) {
        console.log('The rectangle is a square.');
        return true;
    } else {
        console.log('The rectangle is not a square.');
        return false;
    }
};

// area(rect) - Returns the area of the rectangle
const areaRect = function( rect ) {
    const area = rect.length * rect.width;
    console.log(`The area of the rectangle is ${area}.`);
    return area;
}

// perimeter(rect) - Returns the perimeter of the rectangle
const perimeter = function( rect ) {
    const peri = 2 * (rect.length + rect.width);
    console.log(`The perimeter of the rectangle is ${peri}.`);
    return peri;
}

isSquare( myRectangle );
areaRect( myRectangle );
perimeter( myRectangle );



/***** PART 2, TRIANGLE *****/

const myTriangle = {
    sideA: 3,
    sideB: 4,
    sideC: 4
};

// isEquilateral(tri) - Returns whether the triangle is equilateral or not
const isEquilateral = function( tri ) {
    if ( (tri.sideA === tri.sideB) && (tri.sideA === tri.sideC) ) {
        console.log('The triangle is equilateral.');
        return true;
    } else {
        console.log('The triangle is not equilateral.');
        return false;
    }
};

// isIsosceles(tri) - Returns whether the triangle is isosceles or not
const isIsosceles = function( tri ) {
    if ( tri.sideA === tri.sideB || tri.sideA === tri.sideC || tri.sideB === tri.sideC ) {
        console.log('The triangle is isosceles.');
        return true;
    } else {
        console.log('The triangle is not isosceles.');
        return false;
    }
};

// area(tri) - Returns the area of the Triangle
const areaTri = function( tri ) {
    const peri = ( tri.sideA + tri.sideB + tri.sideC ) / 2;
    const area = Math.sqrt( peri * (peri - tri.sideA) * (peri - tri.sideB) * (peri - tri.sideC) ).toFixed(2);
    console.log(`The area of the triangle is ${area}.`);
};

// isObtuse(tri) - Returns whether the triangle is obtuse or not
const isObtuse = function( tri ) {
    if ( isIsosceles ) {
        console.log('The triangle is not obtuse.');
        return false;
    }
    else {

        const squareA = Math.pow( tri.sideA, 2 );
        const squareB = Math.pow( tri.sideB, 2 );
        const squareC = Math.pow( tri.sideC, 2 );

        if ( squareA > (squareB + squareC) || squareB > (squareA + squareC) || squareC > (squareA + squareB) ) {
            console.log('The triangle is obtuse.');
            return true;
        }

        // // Write all values of the object into an array
        // const triArr = Object.values(tri);
        //
        // // Find max element in the array
        // const longestSide = Math.max.apply(null, triArr);
        //
        // // Loop around the object, compare its key's value with max element found above
        // for (const side in tri) {
        //     if ( tri[side] === longestSide ) {
        //         return side; //Return the key of the max element
        //     }
        // }
    }
};

isEquilateral( myTriangle );
isIsosceles( myTriangle );
areaTri( myTriangle );
isObtuse( myTriangle );
