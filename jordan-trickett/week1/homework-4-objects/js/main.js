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
  const converted = Object.values( object ); //converts object to array ['3', '4', '4']
  console.log(converted);

}

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


// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const converted = Object.values( cartForParty ); // converst object to array of strings
let total = 0;

const cashRegister = function (object) {

  for (let i = 0; i < object.length; i++) {
    const integer = parseFloat(object[i]);
    total += integer ;
  }

  console.log(`$${total}`);
}

cashRegister(converted);




// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// Tips
// Don't overthink this. Shorter code is probably the answer.

const bank = [
  {
    name: 'Jordan',
    balance: 1
  },
  {
    name: 'Jamal',
    balance: 1000
  },
  {
    name: 'Issac',
    balance: 20
  }
];





// const balanceArray = Object.values( bank );
// let sum = 0;

const sumOfBalances = function ( object ) {

    let sum = 0;

    for (var i = 0; i < object.length; i++) {
        console.log(object[i]);  // returning full objects
        console.log(Object.values( object[i] ));  //returning array
      }


}

sumOfBalances(bank);

// for (let value of Object.values(bank)) { // just returng objects
//   alert(value);
// }


// const sumOfBalances = function (object) {  // just returning objects
//   let sum = [];
//   for (let key of (object)){
//     sum  += key;
//   }




//   console.log(sum);
// }
