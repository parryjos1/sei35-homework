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
//

const rectangle = { //create an object
  length: 4,
  width: 4,
  isSquare: function(){
    if (this.length === this.width) {
      return ifItisASquare = true;
    }
  },

  area: function(){
    return rectangleArea = this.length * this.width;
  },

  perimeter: function() {
    return rectanglePerimeter = (this.length + this.width) * 2;
  }
};

console.log(rectangle.isSquare());
console.log(rectangle.area());
console.log(rectangle.perimeter());

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
//

const triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4,
  isEquilateral: function(){
    if (this.sideA === this.sideB && this.sideA === this.sideC && this.sideB === this.sideC){
      return whetherItIsEquilateral = true;
    } else {
      return whetherItIsEquilateral = false;
    }
  },

  isIsosceles: function(){
    if (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC) {
      return whetherItIsIsosceles = true;
    } else {
      return whetherItIsIsosceles = false;
    }
  },

  area: function(){
    let x = (this.sideA + this.sideB + this.sideC) * 1/2; //half of the triangle perimeter
    return a = (Math.sqrt(x * (x - this.sideA) * (x - this.sideB) * (x - this.sideC) )).toFixed(2); //calculate area
  },

  isObtuse: function(){
    if ( ( Math.pow(this.sideA, 2) > Math.pow(this.sideB, 2) + Math.pow(this.sideC, 2) ) || ( Math.pow(this.sideB, 2) > Math.pow(this.sideA, 2) + Math.pow(this.sideC, 2) ) || ( Math.pow(this.sideC, 2) > Math.pow(this.sideB, 2) + Math.pow(this.sideA, 2) ) ) {
      return ifItIsObtuse = true;
    } else {
      return ifItIsObtuse = false;
    }
  }
};

console.log(triangle.isEquilateral());
console.log(triangle.isIsosceles());
console.log(triangle.area());
console.log(triangle.isObtuse());

//  js-homework-5.md
// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//
// // Input
// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// // Output
// cashRegister(cartForParty)); // 60.55

//SUM array
// ADVANCED METHOD https://www.w3schools.com/jsref/jsref_reduce.asp

const cartForParty = {
  banana: 1.25,
  handkerchief: 0.99,
  Tshirt: 25.01,
  apple: 0.60,
  nalgene: 10.34,
  proteinShake: 22.36,
  cashRegister: function(){
    let value = [];
    let sum = 0;
    const array = Object.values(cartForParty)
    for (i = 0; i < array.length; i ++) {
      if (typeof(array[i]) === 'number') {
        value.push(array[i]);
      }
    }
    for (i = 0; i < value.length; i ++){
       sum += value[i];
    }
    console.log(`The total price is ${sum}`);
  }
};
cartForParty.cashRegister();

//  js-homework-bank.md
// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
const bank = {

  bankAccounts: [
    {name: "A",
    amount: 200
    },
    {name: "B",
    amount: 300
    },
    {name: "C",
    amount: 400
    },
    {name: "D",
    amount: 500
    }
  ],   //account[accNumber]

  addAccount: function(newName, newAmount){           // addAccount();
    let newEnroll = {};
    newEnroll.name = newName;
    newEnroll.amount = newAmount;
    this.bankAccounts.push(newEnroll);
  },

  totalSum: function(){                               // totalSum()
    let sum = 0;
    for (i = 0; i < this.bankAccounts.length; i ++){
      sum = sum + this.bankAccounts[i].amount
    }
    console.log(`The total sum of money is ${sum}`);
  },


  changeBlance: function(name, balance){             //deposite and withdraw
    for (i = 0; i < this.bankAccounts.length; i ++ ){
      if (name === this.bankAccounts[i].name ){
        this.bankAccounts[i].amount += balance;
      }
    }
    console.log(`Changed Amount: ${this.totalSum()}`);
  },

  checkNegativeValues: function(){                      //check account balance
    if (this.totalSum >= 0) {
      console.log('You account is in secure!');
    } else {
      console.log('You account is in negative balance!');
    }
  },

  transfer: function(transferMoney, fromAccount, toAccount) {
    for (i = 0; i < this.bankAccounts.length; i ++) {
      if (fromAccount === this.bankAccounts[i].name) {
        this.bankAccounts[i].amount -= transferMoney;
      } if (toAccount === this.bankAccounts[i].name) {
        this.bankAccounts[i].amount += transferMoney;
      }
    }
    console.log('Transaction complete!');
    console.log(this.bankAccounts);
  }
};
bank.addAccount("E", 600);
bank.totalSum();
bank.changeBlance('A', -100);
bank.checkNegativeValues();
bank.transfer(30, 'A', 'B');
// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

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
//


// Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:
//
// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:
//
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number
// Example
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// Hint: Remove the dashed from the input string before checking if the input credit card number is valid.
//

const validateCreditCard = function(cardNumber){
  //remove dash
  numberOnly = cardNumber.replace(/-/g, '');
  const condition1 = numberOnly.length; // if it is 16 digits
  const condition2 = isNaN(numberOnly); // if there is all digits
  const condition3 = function(input){    //sum of digits
    let sum = 0;
    for (i = 0; i < input.length; i ++){
      var totalSum = sum + input[i];
      finalDigit = input[input.length - 1];
      // check if they all same digits
      if (input[i] === input[i + 1]) {
        results = false;
      } else {
        results = true;
      }
    }
  }//end of sum function
  condition3(numberOnly);
  // check all conditions
  if (condition1 === 16 && condition2 !== true && totalSum > 16 && finalDigit % 2 === 0 && results === true) {
    return console.log('This card is valid!');
  } else {
    return console.log('This card is invalid!');
  }
};
validateCreditCard('9999-9999-8888-0000');
// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
