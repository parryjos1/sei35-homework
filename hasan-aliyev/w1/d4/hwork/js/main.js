// Part 1, Rectangle
// Given a rectangle object like the one below, write the following functions:
// r(rectangle) = w(width)*l(length)
// p = 2*(l+w)
// isSquare(rect) - Returns whether the rectangle is a square or not
// area(rect) - Returns the area of the rectangle
// perimeter(rect) - Returns the perimeter of the rectangle
// In other words, these functions should take as their only argument a single object with the same keys (length, width) as the rectangle object above, and use that object to make the calculations.
var rectangle = {length: 4,width: 4};
for (var i = 0; i < rectangle.length; i++) {
var calculations = rectangle[i];
if (rectangle.length === rectangle.width) {
  console.log(`Rectangle is square`)
} else {
  console.log(`Not square`)
}
}
console.log(`Area of rectangle is width which is equal ${rectangle.width} * length which is equal ${rectangle.length} = ${rectangle.width*rectangle.length}`);
console.log(`Perimeter of rectangle is equal 2*(${rectangle.width}+${rectangle.length})=${2*(rectangle.width+rectangle.length)}`)
//
//ready code
//
//




//
// Part 2, Triangle
// Given a triangle object like the one below, write the following functions:
//
// isEquilateral(tri)(all sides are equal) - Returns whether the triangle is equilateral or not
// isIsosceles(tri)(has two sides of equal length) - Returns whether the triangle is isosceles or not
// area(tri) - Returns the area of the Triangle
// isObtuse(tri)(one of the angles is an obtuse angle.) - Returns whether the triangle is obtuse or not
//
// As above, these functions should take a single object as an argument, which will have the same keys as the triangle above, and which you will use for your calcuations.





var  triangle = {sideA: 3, sideB: 4, sideC:4};
//
var isEquilateral = function( triangle ) {
if (triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC) {
  console.log(`Triangle is equilateral`)
 }
else {
  console.log(`Triangle is not equilateral`)
   }
};
//
var isIsosceles = function ( triangle ) {
  if (triangle.sideA === triangle.sideB || triangle.sideB === triangle.sideC) {
    console.log(`Triangle is Isosceles`)
   }
  else {
    console.log(`Triangle is not Isosceles`)
     }
};
  var calcArea = function(triangle){
  var s = (sideA + sideB + sideC)/2;
  var area =  Math.sqrt(s*((s-sideA)*(s-sideB)*(s-sideC)));
};


  console.log(`${area}`);
//
//not ready code
//







// //Write a function called cashRegister that takes a shopping cart object.
// The object contains item names and prices (itemName: itemPrice).
// The function should return the total price of the shopping cart. Example

// Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};
// Output
cashRegister(cartForParty)); // 60.55



const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};


// define a function for getting the sum total of a shopping cart;
const sumShoppingCart = function ( cart ) { // cart expects an object with key/value pair for items
  // extract values arram from Object:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
  const cartArray = Object.values(cartForParty);

  let cartArrayNumValue = 0 ; // empty variable for final sum

  for (let i = 0; i < cartArray.length; i = i + 1) {
    // cartArrayNum[i] = Number(cartArray[i]); // not needed for output, can put this straight into the sum.

    // accumlating the array of number values
    cartArrayNumValue += Number(cartArray[i]);
  };

  // return our sum so it can be used elsewhere
  return cartArrayNumValue;
}

// call our sumShoppingCart function and give it the cartForParty to sum. Print the returned sum.
console.log( sumShoppingCart( cartForParty ) );




const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};


const cashRegister = function (itemPrices) {
  const shoppingList = itemPrices;
  let totalPrice = 0.00;
  for ( itemName in shoppinList) {
    totalPrice += parseFloat(shoppingList[itemName]);
  }
console.log(totalPrice);
};
