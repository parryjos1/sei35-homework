//part 1: Rectangles


const rectangle = {
    length: 4,
    width: 4
};

function isSquare(rect) {
    if(rect.length === rect.width) {
        return true;
    } else {
        return false;
    }
}

function area(rect) {
    return rect.width * rect.length;
}

function perimeter(rect) {
    return ((2*rect.width) + (2*rect.length));
}

if(isSquare(rectangle) == true) {
    console.log(`This is a square`);
} else {
    console.log(`This is a rectangle`);
}

console.log(`The area is: ${area(rectangle)}`);
console.log(`The perimeter is: ${perimeter(rectangle)}`);


// Part 2: Triangles

const triangle = {
    sideA: 3,
    sideB: 4,
    sideC: 4
};

function isEquilateral(tri) {
    if(tri.sideA === tri.sideB && tri.sideB === tri.sideC) {
        return true;
    } else {
        return false;
    }
}

function isIsosceles(tri) {
    if(tri.sideA === tri.sideB || tri.sideA === tri.sideC || tri.sideB === tri.sideC) {
        return true;
    } else {
        return false;
    }
}

function areaTri(tri) {
    let p = (tri.sideA + tri.sideB + tri.sideC) / 2;
    return Math.sqrt(p*(p-tri.sideA)*(p-tri.sideB)*(p-tri.sideC)).toFixed(2); 
}

function isObtuse(tri) {
    let equation1 = (tri.sideA * tri.sideA) + (tri.sideB * tri.sideB);
    let equation2 = (tri.sideC * tri.sideC);

    if(equation1 < equation2) {
        return true;
    } else {
        return false;
    }
}

if(isEquilateral(triangle) === true) {
    console.log(`Triangle is equilateral`);
} else {
    console.log(`Triangle is not equilateral`);
}

if(isIsosceles(triangle) === true) {
    console.log(`Triangle is isosceles`);
} else {
    console.log(`Triangle is not isosceles`);
}

console.log(`Area of triangle is: ${areaTri(triangle)}`);

if(isObtuse(triangle) === true) {
    console.log(`Triangle is obtuse`);
} else {
    console.log(`Triangle is not obtuse`);
}