console.log("Banks and cash register!!!");



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


const cashRegister = function (object) {

  let total = 0;

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



const bank = {

  accounts: {

    'Jordan': 1000,
    'Jamal': 30,
    'ishmail':100


  }, // accounts


}; // bank

console.log(bank.accounts['Jordan']);  // logs balance



const sumOfBalances = function ( object ) {

  let total = 0;

  for (let key in object.accounts){
      total += object.accounts[ key ]
      // console.log( object.accounts[ key ] );  //prints values
  };

  console.log(total);
};

sumOfBalances(bank);
