const rectangle = {
  length: 4,
  width: 6
};

// for (x in rectangle) {
//   let height = rectangle.length;
//   let width = rectangle.width;
//   if (height === width) {
//     console.log('This is a square');
//   } else {
//     console.log('This is not a square');
//   }
// };

let isSquare = function (obj) {
  const height = obj.length;
  const width = obj.width;
  if (height === width) {
    console.log('This is a square');
  } else {
    console.log('This is not a square');
  }
};

isSquare(rectangle);

// for (x in rectangle) {
//   let height = rectangle.length;
//   let width = rectangle.width;
//   let area = height * width;
//   console.log(`The area is ${area}cm squared`);
// }

const area = function (obj) {
  const height = obj.length;
  const width = obj.width;
  let area = height * width;
  console.log(`The area is ${area}cm squared`);
}

area(rectangle);

// for (x in rectangle) {
//   let height = rectangle.length;
//   let width = rectangle.width;
//   let perimeter = (height * 2) + (width * 2);
//   console.log(`The perimeter is ${perimeter}cm`);
// }

const perimeter = function (obj) {
  const height = obj.length;
  const width = obj.width;
  let perimeter = (height * 2) + (width * 2);
  console.log(`The perimeter is ${perimeter}cm`);
};

perimeter(rectangle);


const triangle = {
  sideA: 3,
  sideB: 3,
  sideC: 3
};
let sideD = triangle.sideA
let sideE = triangle.sideB
let sideF = triangle.sideC
// for (x in triangle) {
//   if (triangle.sideA === triangle.sideB === triangle.sideC) {
//     console.log('This is an Equalatiral triangle');
//   } else {
//     console.log('This is not an Equalatiral triangle');
//   }
// };

const isEqualatiral = function ( obj ) {
    if ((sideD === sideE) && (sideD === sideF) ) {
      console.log('This is an Equalatiral triangle');
    } else {
      console.log('This is not an Equalatiral triangle');
    }
};

isEqualatiral(triangle);

const isIsosceles = function ( obj ) {
  // let sideD = triangle.sideA
  // let sideE = triangle.sideB
  // let sideF = triangle.sideC
  if ( sideD === sideE || sideD === sideF) {
   console.log('This is Isosceles')
  } else if (sideE === sideF || sideE === sideD) {
   console.log('This is Isosceles')
  } else {
   console.log('This is not Isosceles')
  }
};



isIsosceles(triangle);

let arrayOfTriSides = Object.keys( triangle );
console.log(arrayOfTriSides);
const isArea = function ( obj ) {
  const addSidesDivideTwo = (sideE + sideF + sideD) / 2;
  const toBeSquareRooted = addSidesDivideTwo * (addSidesDivideTwo - sideD) * (addSidesDivideTwo - sideE) * (addSidesDivideTwo - sideF)
  const area = Math.sqrt(toBeSquareRooted);
  console.log(`The area is ${area.toFixed(2)}`);

}


//cash register

// Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};
//loop through each keys
//when loop is achieves store value of key to variable add value as loop continues
//return result




let amountOfEachGrocery = []
//loop through the object cartForParty and
  for (let key in cartForParty) {
    amountOfEachGrocery.push(cartForParty[ key ]);
  };

console.log(amountOfEachGrocery);
let groceryFloat = []
let stringToFloat = function (arrayString) {
  for (var i = 0; i < arrayString.length; i++) {
    groceryFloat.push(parseFloat(arrayString[i], 10));
    // grocerySum = grocerySum + grocerySum
  }
  // console.log(grocerySum);
};

stringToFloat(amountOfEachGrocery);
console.log(groceryFloat);
console.log(typeof groceryFloat[0])
let total = 0.00

let addToTotal = function (addFloat) {
  for (var i = 0; i < addFloat.length; i++) {
    total = total + addFloat[i];
  }
  console.log(total);
}

addToTotal(groceryFloat);



// let addTheInt = function (intString) {
//   for (var i = 0; i < intString.length; i++) {
//     // let totalGroceries = intString[i] + intString[i]
//   }
//   console.log(totalGroceries);
// };
//
// addTheInt(groceryInt);

let bank = {

    1: {name: 'Savings', amount: 5000},
    2: {name: 'Credit',  amount: 2000},
    3: {name: 'Spending', amount: 1000}

}

//help function access ammount of cash in bank
let helperFunction = function ( obj ) {
  return obj[userAccountNumber].amount
}

let userAccountNumber = prompt('What is your account number')
let userAdd = prompt('How much would you like to add')

let changeBankBalance = function (findBalance) {
  let newBalance = 0
  if (userAdd > 0) {
    newBalance = findBalance -- userAdd
    return newBalance
  } else {
    newBalance = findBalance - userAdd
    return newBalance
  }

}

let foundBalance = helperFunction(bank);

console.log(changeBankBalance(foundBalance));
