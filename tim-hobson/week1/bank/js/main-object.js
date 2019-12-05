// Bank - Object
// lets refactor and make the entire thing an object.
// START HERE


bank = {

bankAccounts : [
  { Name: "George Smith", Balance: 30000 },
  { Name: "Dr Evil", Balance: 1000000 },
  { Name: "Amanda Yevin", Balance: 300 },
  { Name: "Robert Warnbourne", Balance: 1 }
],

addAccount : function (newAccName) {
  this.bankAccounts.push( { Name: newAccName, Balance: 0 } ) // name into the name field, starting balance of 0
  console.log(`Hi ${newAccName}! Welcome to the Javascript Bank! You have a starting balance of $0!`);
},

getAccountByName: function ( name ) {
  for (let i = 0; i < this.bankAccounts.length; i++) {
    const currentAccount = this.bankAccounts[i]
    if ( name === currentAccount.Name ) {
      return currentAccount
    }
  }
  console.log(`No account by that name in the bank.`)
  return null
},

getBalance : function ( name ) {
  currentAccount = this.getAccountByName( name )
  console.log(`Hello ${name}, you have a balance of ${currentAccount.Balance}`);
  return currentAccount.Balance
},

depositMoney : function ( name, depositAmount ) {
  currentAccount = this.getAccountByName( name )
  currentAccount.Balance += depositAmount
  console.log(`Hello ${name}, you've deposited $${depositAmount} for a new balance of $${currentAccount.Balance}`);
  return currentAccount.Balance
},

withdrawMoney : function (name, withdrawAmount) {
  currentAccount = this.getAccountByName( name )
  if (currentAccount.Balance >= withdrawAmount) {
    console.log(`Hello ${name}, you've withdrawn ${withdrawAmount} and reduced your balance to $${currentAccount.Balance}`);
    currentAccount.Balance -= withdrawAmount
  } else {
    console.log(`You do not have enough money to make a withdrawal`);
  }
  return currentAccount.Balance
},

transfer : function ( name, transferAmount, destinationName ) {
  currentAccount = this.getAccountByName( name )
  destinationAccount = this.getAccountByName( destinationName )
  if ( currentAccount.Balance >= transferAmount ) {
    currentAccount.Balance -= transferAmount
    destinationAccount.Balance += transferAmount
    console.log(`${name} has sent ${transferAmount} to ${destinationName}`)
  } else {
    `You don't have enough money for this transaction`
  }
}

}
// Should proabbly do some conditions for if accounts aren't valid. Will do that after MTA
console.log(bank.getAccountByName("Tim Hobson"))
bank.addAccount("Tim Hobson")
console.log(bank.getBalance("Dr Evil"))
console.log(bank.depositMoney("Tim Hobson", 20000))
console.log(bank.withdrawMoney("Dr Evil", 4000));
console.log(bank.transfer("Dr Evil", 50000, "Tim Hobson"));
// console.log(withdrawMoneyBalanceIncluded("Tim Hobson", 20000));
// console.log(withdrawMoney("Dr Evil", 4000));
// console.log(withdrawMoney("Tim Hobson", 20000));
//
//


// I didn't realize we weren't meant to assign account numbers :/
// const bank = {
//
//   bankAccounts : [
//     { AccountNumber:0001, Name: "George Smith", Balance: 30000 },
//     { AccountNumber:0002, Name: "Dr Evil", Balance: 1000000 },
//     { AccountNumber:0003, Name: "Amanda Yevin", Balance: 300 },
//     { AccountNumber:0004, Name: "Robert Warnbourne", Balance: 1 }
//   ],
//
//   addAccount : function (newAccName) {
//     this.bankAccounts.push( { AccountNumber: (this.bankAccounts.length + 1 ), Name: newAccName, Balance: 0 } )
//     console.log(`Hi ${newAccName}! Welcome to the Javascript Bank! Your Account Number is ${(this.bankAccounts.length)} and you have a starting balance of $0!`);
//   },
//
//   depositMoney : function ( accNum, depositAmount ) {
//     this.bankAccounts[accNum-1].Balance += depositAmount
//     console.log(`Welcome ${this.bankAccounts[accNum-1].Name}, your current balance is $${this.bankAccounts[accNum-1].Balance - depositAmount}, and with your deposit of $${depositAmount} that brings your new current balance to $${this.bankAccounts[accNum-1].Balance}.`);
//   },
//
//   withdrawMoney : function ( accNum, withdrawAmount ) {
//       if (this.bankAccounts[accNum-1].Balance >= withdrawAmount) {
//         this.bankAccounts[accNum-1].Balance -= withdrawAmount
//         console.log(`Welcome ${this.bankAccounts[accNum-1].Name}, your current balance is $${this.bankAccounts[accNum-1].Balance + withdrawAmount}, and with your withdrawal of $${withdrawAmount} that brings your new current balance to $${this.bankAccounts[accNum-1].Balance}.`);
//       } else {
//         console.log(`Hello ${this.bankAccounts[accNum-1].Name}, unfortunately you have a current balance of $${this.bankAccounts[accNum-1].Balance}, and a withdrawal of ${withdrawAmount} would overdraw your account by $${Math.abs(this.bankAccounts[accNum-1].Balance - withdrawAmount)}`);
//       }
//   },
//
//   requestBalance : function ( accNum ) {
//     console.log(`Hi ${this.bankAccounts[accNum-1].Name}, your account balance is $${this.bankAccounts[accNum-1].Balance}`);
//     return this.bankAccounts[accNum-1].Balance
//   },
//
//   transferMoney : function ( yourAccNum, transferAmount, toAccNum) {
//     console.log(`Welcome ${this.bankAccounts[yourAccNum-1].Balance}`);
//     console.log(`Welcome ${transferAmount}`);
//     if ( yourAccNum === toAccNum ) {
//       console.log(`Welcome ${this.bankAccounts[yourAccNum-1].Name}. You can't transfer money to yourself! Enter a different account number`);
//     } else if (this.bankAccounts[yourAccNum-1].Balance >= transferAmount ) {
//       this.bankAccounts[toAccNum - 1].Balance += transferAmount
//       this.bankAccounts[yourAccNum - 1].Balance -= transferAmount
//       console.log(`Welcome ${this.bankAccounts[yourAccNum-1].Name}, you have transferred ${this.bankAccounts[toAccNum-1].Name} $${transferAmount}, this brings the total of your account to $${this.bankAccounts[yourAccNum-1].Balance}`);
//       console.log(`Hello ${this.bankAccounts[toAccNum-1].Name}. You have been sent a transfer of ${transferAmount} from ${this.bankAccounts[yourAccNum-1].Name}. Your new balance is ${this.bankAccounts[toAccNum-1].Balance}`);
//     }
//   },
//
//   findAccNum : function ( name ) {
//     for (var i = 0; i < this.bankAccounts.length; i++) {
//       if ( this.bankAccounts[i].Name === name ) {
//         console.log(`Hi ${this.bankAccounts[i].Name}, your Account Number is ${this.bankAccounts[i].AccountNumber}`);
//         return this.bankAccounts[i].AccountNumber
//       }
//     }
//     console.log(`Sorry ${name}. There's no account at this bank with that name.`);
//     return null
//   }
//
//
// };
//
// bank.addAccount("Tim Hobson")
// bank.addAccount("Adam Celban")
//
// bank.depositMoney( 3, 200 );
// bank.depositMoney( 5, 10000 );
// bank.withdrawMoney( 4, 1000);
// bank.withdrawMoney( 2, 500);
// bank.withdrawMoney( 1, 30000);
// console.log(bank.requestBalance(4))
// console.log(bank.transferMoney(3, 50, 2));
