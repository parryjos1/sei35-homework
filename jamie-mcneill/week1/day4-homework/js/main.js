// Geometry Function Lab

// Part 1, Rectangle

// Given a rectangle object like the one below, write the following functions:
//
// isSquare(rect) - Returns whether the rectangle is a square or not

// area(rect) - Returns the area of the rectangle

// perimeter(rect) - Returns the perimeter of the rectangle

// const rectangle = {
//   length: 4,
//   width: 4
// };

// In other words, these functions should take as their only argument a single object with the same keys (length, width) as the rectangle object above, and use that object to make the calculations.

const rectangle = {
 length: 4,
  width: 4
};


// const isSquare = function(rectangle) {
//    console.log (rectangle.length * )
// }

const area = function(rectangle) {
   console.log (rectangle.length * rectangle.width);
};

console.log(area(rectangle));


const perimeter = function(rectangle) {

   const answer = (rectangle.length * 2 + rectangle.width * 2);
   console.log (answer);
};


console.log(perimeter(rectangle));

// Part 2, Triangle
// Given a triangle object like the one below, write the following functions:
//
// isEquilateral(tri) - Returns whether the triangle is equilateral or not

// isIsosceles(tri) - Returns whether the triangle is isosceles or not

// area(tri) - Returns the area of the Triangle

// isObtuse(tri) - Returns whether the triangle is obtuse or not

// const triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };

// As above, these functions should take a single object as an argument, which will have the same keys as the triangle above, and which you will use for your calcuations.

const triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const equilateral = function(triangle) {
    if ((triangle.sideA === triangle.sideB) && (triangle.sideA === triangle.sideC)) {
   console.log ("The triangle is equilateral");
 } else {
   console.log ("The triangle is not equal");
 }
};

console.log(equilateral(triangle));


//Isoceles
const isoceles = function(triangle) {
  if (triangle.sideA === triangle.sideB || triangle.sideA === triangle.sideC || triangle.sideB === triangle.sideC)
  {
    console.log(`This triangle is an isoceles`)
} else {
  console.log(`This triangle is not an isoceles`)
}
};

isoceles(triangle);

//area
const areaTriangle  = function(triangle) {
  // find out half of perimeter
  const p = (triangle.sideA + triangle.sideB + triangle.sideC) / 2;
  //work ou area
  const area = Math.sqrt(p * (p - triangle.sideA)* (p - triangle.sideB)* (p - triangle.sideC));
  console.log(area)
};

areaTriangle(triangle);

//isobtuse
const isObtuse = function(triangle) {
  if (triangle.sideA * 2 + triangle.sideB * 2 < triangle.sideC * 2){
  console.log ("This triangle is obtuse");
} else {
  console.log ("This triangle is not obtuse");
}
};

isObtuse(triangle);

//Case Register

// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//
// // Input


const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function(cartForParty) {
  let totalPrice = 0;
  for (var key in cartForParty) {
   totalPrice += parseFloat(cartForParty[key]);
  }
  return totalPrice;
};

console.log(cashRegister(cartForParty));


// // JavaScript Bank

//one object called Bank.

const bank = {

  accounts: [

  { name: 'josh', balance: 100.0 },

  { name: 'jamie', balance: 120.0 },

  { name: 'jordan', balance: 150.0 },

  ],

  //This works out the total balance of funds in all accounts in the array of accounts(objects)
  totalBalances: function() {
  //stores a variable to collect the total balance.
    let total = 0;
  //The loop goes through each account and adds the balances to total.
    for(i = 0; i < this.accounts.length; i++) {
      total += this.accounts[i].balance;
    }//for
  //The total balance is returned.
    return total;

  }, //total balances

  getAccountByName: function( accountName) {
    //Checks to see if the account is present or not.

    for(i = 0; i < this.accounts.length; i++) {
    const currentAccount = this.accounts[i];
    if (accountName === currentAccount.name){
    return currentAccount;
      }
  }
  console.log('No matching account found.');
  return null;
},

  deposit: function( accountName, amount ) {


    const account = this.getAccountByName(accountName);
    //finds the account object from the array with the matching name.
    if ( account !== null ) {
    //We found a valid acount with that name
      account.balance += amount;
      console.log(`Deposit of ${amount} to account '${accountName}' successful.`);
      console.log(`New balance: ${ account.balance}`);
      return account.balance;
    }
  }, // deposit()
     withdraw: function( accountName, amount ) {
    //find the account object from the array with the matching name.
      const account = this.getAccountByName( accountName);
      if ( account !== null ) {

      if (account.balance - amount >= 0) {
      //We found a valid acount with that name
      account.balance -= amount;
      console.log(`withdrawal of ${amount} in account '${accountName}' successful.`);
      console.log(`New balance: ${ account.balance}`);
      return account.balance;
    }  else {
      console.log(`insufficient funds`)
      return false;
    }
    }
  },// withdraw()// end of bank object.
    transfer: function ( accountName1, accountName2, amount) {
    const account1 = this.getAccountByName(accountName1);
    const account2 = this.getAccountByName(accountName2);

    if (account1.balance >= amount) {
      account1.balance -= amount;
      account2.balance += amount;
      console.log(`transfer of ${amount} to account '${accountName2}' successful.`);
      console.log(`New balance: ${ account1.balance}`);
    } else {
      console.log(`insufficient funds to transfer`)
      return false;
    }
    }
}
//try transfer
// transfer : function ( fromAccountName, toAccountName, amount) {
//
//   1.Find from account
//   2, Find to account1Iif either not found, cancel the transfer, print error)
//   3. withdraw from the from account, deposit to the to account.
