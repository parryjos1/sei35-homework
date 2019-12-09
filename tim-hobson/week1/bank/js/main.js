// Bank
// Tips - Don't overthink this. Shorter code is probably the answer.
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

// Accounts
// Accounts have a current balance and owner's name.
bankAccounts = [
  { Name: "George Smith", Balance: 30000 },
  { Name: "Dr Evil", Balance: 1000000 },
  { Name: "Amanda Yevin", Balance: 300 },
  { Name: "Robert Warnbourne", Balance: 1 }
];

const addAccount = function (newAccName) {
  bankAccounts.push( { Name: newAccName, Balance: 0 } ) // name into the name field, starting balance of 0
  console.log(`Hi ${newAccName}! Welcome to the Javascript Bank! You have a starting balance of $0!`);
}
addAccount("Tim Hobson")
addAccount("Adam Celban")

const findAcc = function ( name ) {
  for (var i = 0; i < bankAccounts.length; i++) {
    if (bankAccounts[i].Name === name ) {
      return i
  }
}
}
console.log(findAcc("Tim Hobson"))

const getBalance = function ( name ) {
  const arrayIndex = findAcc ( name )
  console.log(`Hello ${name}, you have a balance of ${bankAccounts[ arrayIndex ].Balance}`);
  return bankAccounts[ arrayIndex ].Balance
}
console.log(getBalance("Tim Hobson"));


const depositMoney = function ( name, depositAmount ) {
  const arrayIndex = findAcc( name )
  bankAccounts[ arrayIndex ].Balance += depositAmount
  console.log(`Hello ${name}, you've deposited $${depositAmount} for a new balance of $${bankAccounts[ arrayIndex].Balance}`);
  return bankAccounts[ arrayIndex ].Balance
}
console.log(depositMoney("Tim Hobson", 400))


const withdrawMoneyBalanceIncluded = function (name, withdrawAmount) {
  const arrayIndex = findAcc ( name )
  balance = getBalance ( name )
  if (balance >= withdrawAmount) {
    console.log(`Hello ${name}, you've withdrawn ${withdrawAmount} and reduced your balance to $${bankAccounts[ arrayIndex ].Balance}`);
    bankAccounts[ arrayIndex ].Balance -= withdrawAmount
  } else {
    console.log(`You do not have enough money to make a withdrawal`);
  }
}
console.log(withdrawMoneyBalanceIncluded("Dr Evil", 4000));
console.log(withdrawMoneyBalanceIncluded("Tim Hobson", 20000));

// This was what I did originally until I realized I could use the balance to call on. They are the same but the above is probably clearer
const withdrawMoney = function ( name, withdrawAmount ) {
  const arrayIndex = findAcc ( name )
  if (bankAccounts[ arrayIndex ].Balance >= withdrawAmount )  {
    bankAccounts[ arrayIndex ].Balance -= withdrawAmount
    console.log(`Hello ${name}, you've withdrawn ${withdrawAmount} and reduced your balance to $${bankAccounts[ arrayIndex ].Balance}`);
  } else {
    console.log(`You do not have enough money to make a withdrawal`);
  }
}

console.log(withdrawMoney("Dr Evil", 4000));
console.log(withdrawMoney("Tim Hobson", 20000));


//
//
// //You should be able to deposit or withdraw from an account to change the balance.
// const depositMoney = function ( name , depositAmount ) {
//   bankAccounts[accNum-1].Balance += depositAmount //look up the accountnumber for the account - and add the value of the money onto the balance
//   console.log(`Welcome ${name}, your current balance is $${bankAccounts[accNum-1].Balance - depositAmount}, and with your deposit of $${depositAmount} that brings your new current balance to $${bankAccounts[accNum-1].Balance}.`);
// }
// depositMoney( "Amanda Yevin", 200 );
// depositMoney( "Tim Hobson", 10000 );
//
// const withdrawMoney = function ( accNum, withdrawAmount ) {
//   //look up the accountnumber for the account - and minus the value of the money onto the balance
//     if (bankAccounts[accNum-1].Balance >= withdrawAmount) { //if condition to see if they have more money than their withdrawal amount
//       // if the balance is greater than or equal tothe withdraw amount, they can withdraw their money
//       bankAccounts[accNum-1].Balance -= withdrawAmount
//       console.log(`Welcome ${bankAccounts[accNum-1].Name}, your current balance is $${bankAccounts[accNum-1].Balance + withdrawAmount}, and with your withdrawal of $${withdrawAmount} that brings your new current balance to $${bankAccounts[accNum-1].Balance}.`);
//     } else { // otherwise, they are unable to withdraw their money and get an error
//       console.log(`Hello ${bankAccounts[accNum-1].Name}, unfortunately you have a current balance of $${bankAccounts[accNum-1].Balance}, and a withdrawal of ${withdrawAmount} would overdraw your account by $${Math.abs(bankAccounts[accNum-1].Balance - withdrawAmount)}`);
//     }
// }
// withdrawMoney( 4, 1000);
// withdrawMoney( 2, 500);
// withdrawMoney( 1, 30000);
//
// const requestBalance = function ( accNum ) {
//   console.log(`Hi ${bankAccounts[accNum-1].Name}, your account balance is $${bankAccounts[accNum-1].Balance}`);
//   return bankAccounts[accNum-1].Balance
// }
// console.log(requestBalance(4))
//
// // Bonus
// // Ensure that the accounts cannot have negative values.
// // Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
// transferMoney = function ( yourAccNum, transferAmount, toAccNum) {
//   console.log(`Welcome ${bankAccounts[yourAccNum-1].Balance}`);
//   console.log(`Welcome ${transferAmount}`);
//   if ( yourAccNum === toAccNum ) {  // check if acc numbers are different
//     console.log(`Welcome ${bankAccounts[yourAccNum-1].Name}. You can't transfer money to yourself! Enter a different account number`);
//   } else if (bankAccounts[yourAccNum-1].Balance >= transferAmount ) {   // check if you have enough money to send to someone
//     bankAccounts[toAccNum - 1].Balance += transferAmount
//     bankAccounts[yourAccNum - 1].Balance -= transferAmount
//     console.log(`Welcome ${bankAccounts[yourAccNum-1].Name}, you have transferred ${bankAccounts[toAccNum-1].Name} $${transferAmount}, this brings the total of your account to $${bankAccounts[yourAccNum-1].Balance}`);
//     console.log(`Hello ${bankAccounts[toAccNum-1].Name}. You have been sent a transfer of ${transferAmount} from ${bankAccounts[yourAccNum-1].Name}. Your new balance is ${bankAccounts[toAccNum-1].Balance}`);
//   }
// };
// console.log(transferMoney(3, 50, 2));
//
// const findAccNum = function ( name ) {
//   for (var i = 0; i < bankAccounts.length; i++) {
//     if ( bankAccounts[i].Name === name ) {
//       console.log(`Hi ${bankAccounts[i].Name}, your Account Number is ${bankAccounts[i].AccountNumber}`);
//       return bankAccounts[i].AccountNumber
//     }
//   }
//   console.log(`Sorry ${name}. There's no account at this bank with that name.`);
//   return null
// }
//
// console.log(findAccNum("Tim Hobson"));
// console.log(findAccNum("Steve Parry"));
//

// This was my bank where i gave account numbers, not relying on the index number.
{
  //
  // bankAccounts = [
  //   { AccountNumber:0001, Name: "George Smith", Balance: 30000 },
  //   { AccountNumber:0002, Name: "Dr Evil", Balance: 1000000 },
  //   { AccountNumber:0003, Name: "Amanda Yevin", Balance: 300 },
  //   { AccountNumber:0004, Name: "Robert Warnbourne", Balance: 1 }
  // ];
  //
  // const addAccount = function (newAccName) {
  //   bankAccounts.push( { AccountNumber: (bankAccounts.length + 1 ), Name: newAccName, Balance: 0 } )// generate a new account number automatically(length of array) put the name into the name field, starting balance of 0
  //   console.log(`Hi ${newAccName}! Welcome to the Javascript Bank! Your Account Number is ${(bankAccounts.length)} and you have a starting balance of $0!`);
  // }
  // addAccount("Tim Hobson")
  // addAccount("Adam Celban")
  //
  // //You should be able to deposit or withdraw from an account to change the balance.
  // const depositMoney = function ( accNum, depositAmount ) {
  //   bankAccounts[accNum-1].Balance += depositAmount //look up the accountnumber for the account - and add the value of the money onto the balance
  //   console.log(`Welcome ${bankAccounts[accNum-1].Name}, your current balance is $${bankAccounts[accNum-1].Balance - depositAmount}, and with your deposit of $${depositAmount} that brings your new current balance to $${bankAccounts[accNum-1].Balance}.`);
  // }
  // depositMoney( 3, 200 );
  // depositMoney( 5, 10000 );
  //
  // const withdrawMoney = function ( accNum, withdrawAmount ) {
  //   //look up the accountnumber for the account - and minus the value of the money onto the balance
  //     if (bankAccounts[accNum-1].Balance >= withdrawAmount) { //if condition to see if they have more money than their withdrawal amount
  //       // if the balance is greater than or equal tothe withdraw amount, they can withdraw their money
  //       bankAccounts[accNum-1].Balance -= withdrawAmount
  //       console.log(`Welcome ${bankAccounts[accNum-1].Name}, your current balance is $${bankAccounts[accNum-1].Balance + withdrawAmount}, and with your withdrawal of $${withdrawAmount} that brings your new current balance to $${bankAccounts[accNum-1].Balance}.`);
  //     } else { // otherwise, they are unable to withdraw their money and get an error
  //       console.log(`Hello ${bankAccounts[accNum-1].Name}, unfortunately you have a current balance of $${bankAccounts[accNum-1].Balance}, and a withdrawal of ${withdrawAmount} would overdraw your account by $${Math.abs(bankAccounts[accNum-1].Balance - withdrawAmount)}`);
  //     }
  // }
  // withdrawMoney( 4, 1000);
  // withdrawMoney( 2, 500);
  // withdrawMoney( 1, 30000);
  //
  // const requestBalance = function ( accNum ) {
  //   console.log(`Hi ${bankAccounts[accNum-1].Name}, your account balance is $${bankAccounts[accNum-1].Balance}`);
  //   return bankAccounts[accNum-1].Balance
  // }
  // console.log(requestBalance(4))
  //
  // // Bonus
  // // Ensure that the accounts cannot have negative values.
  // // Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
  // transferMoney = function ( yourAccNum, transferAmount, toAccNum) {
  //   console.log(`Welcome ${bankAccounts[yourAccNum-1].Balance}`);
  //   console.log(`Welcome ${transferAmount}`);
  //   if ( yourAccNum === toAccNum ) {  // check if acc numbers are different
  //     console.log(`Welcome ${bankAccounts[yourAccNum-1].Name}. You can't transfer money to yourself! Enter a different account number`);
  //   } else if (bankAccounts[yourAccNum-1].Balance >= transferAmount ) {   // check if you have enough money to send to someone
  //     bankAccounts[toAccNum - 1].Balance += transferAmount
  //     bankAccounts[yourAccNum - 1].Balance -= transferAmount
  //     console.log(`Welcome ${bankAccounts[yourAccNum-1].Name}, you have transferred ${bankAccounts[toAccNum-1].Name} $${transferAmount}, this brings the total of your account to $${bankAccounts[yourAccNum-1].Balance}`);
  //     console.log(`Hello ${bankAccounts[toAccNum-1].Name}. You have been sent a transfer of ${transferAmount} from ${bankAccounts[yourAccNum-1].Name}. Your new balance is ${bankAccounts[toAccNum-1].Balance}`);
  //   }
  // };
  // console.log(transferMoney(3, 50, 2));
  //
  // const findAccNum = function ( name ) {
  //   for (var i = 0; i < bankAccounts.length; i++) {
  //     if ( bankAccounts[i].Name === name ) {
  //       console.log(`Hi ${bankAccounts[i].Name}, your Account Number is ${bankAccounts[i].AccountNumber}`);
  //       return bankAccounts[i].AccountNumber
  //     }
  //   }
  //   console.log(`Sorry ${name}. There's no account at this bank with that name.`);
  //   return null
  // }
  //
  // console.log(findAccNum("Tim Hobson"));
  // console.log(findAccNum("Steve Parry"));


}
