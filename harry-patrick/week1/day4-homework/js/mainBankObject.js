
let bank = {

  accounts: {

    1: {name: 'Savings', amount: 5000},
    2: {name: 'Credit',  amount: 2000},
    3: {name: 'Spending', amount: 1000}

  },

  helperFunction: function (prompt) {
    let accountValue = this.accounts[prompt].amount
    console.log(accountValue);
  },
//may need to pass in argment to run
  promtFuncion: function () {
    let userAccountNumber = prompt('What is your account number')
  }

}

bank.helperFunction()

//help function access ammount of cash in bank
// let helperFunction = function ( obj ) {
//   return obj[userAccountNumber].amount
// }
//
// let userAccountNumber = prompt('What is your account number')
// let userAdd = prompt('How much would you like to add')
//
// let changeBankBalance = function (findBalance) {
//   let newBalance = 0
//
//   newBalance = findBalance + userAdd
//   return newBalance
// }
//
// let foundBalance = helperFunction(bank);
//
// console.log(changeBankBalance(foundBalance));
