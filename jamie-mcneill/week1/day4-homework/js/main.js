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
   console.log (rectangle.length * 4);
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
    if (triangle.sideA === triangle.sideB) && (triangle.sideA === triangle.sideC) {
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
  console.log(area);
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
//
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
//
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
//
// Bonus
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
// Additional
// Begin exploring the JavaScript Koans. Fork, clone and start trying them.


const account1 = {
  ownerName: 'Barry',
  balance: 0,
  deposit: function(amount) {
    this.balance += amount;
  },
  withdraw: function(amount) {
    if (this.balance - amount >= 0) {
      this.balance -= amount;
    } else {
      console.log(`You don't have sufficient funds to withdraw1`);
    }
  }
};

const account2 = {
  ownerName: 'James',
  balance: 0,
  deposit: function(amount) {
    this.balance += amount;
  },
  withdraw: function(amount) {
    if (this.balance - amount >= 0) {
      this.balance -= amount;
    } else {
      console.log(`You don't have sufficient funds to withdraw2`);
    }
  }
};

const account3 = {
  ownerName: 'Sarah',
  balance: 0,
  deposit: function(amount) {
    this.balance += amount;
  },
  withdraw: function(amount) {
    if (this.balance - amount >= 0) {
      this.balance -= amount;
    } else {
      console.log(`You don't have sufficient funds to withdraw3`);
    }
  }
};


const bank = {
  account: [],
  getTotalSum: function() {
    let totalSum = 0;
    for ( var i = 0; i < this.account.length; i++ ) {
      totalSum += this.account[i].balance;
    }
    return totalSum;
  },
  addAccount: function(newAccount) {
    this.account.push(newAccount);
  },
  transfer: function (fromAccount, toAccount, amount) {
    if (amount <= fromAccount.balance) {
      fromAccount.withdraw(amount);
      toAccount.deposit(amount);
    } else {
      console.log(`There are insufficient funds to transfer`);
    }
  }
}

account1.deposit(500);
account2.deposit(600);
account3.deposit(700);

account1.withdraw(200);
account2.withdraw(700);
account3.withdraw(300);


bank.addAccount(account1);
bank.addAccount(account2);
bank.addAccount(account3);

bank.transfer(account1, account2, 200);
console.log(account1.balance);
console.log(account2.balance);

console.log(bank.getTotalSum());
