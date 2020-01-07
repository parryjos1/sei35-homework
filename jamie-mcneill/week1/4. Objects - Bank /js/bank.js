// // JavaScript Bank

// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

// Accounts

// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

// Tips
//Don't overthink this. Shorter code is probably the answer.

// Bonus

// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.

// Additional
// Begin exploring the JavaScript Koans. Fork, clone and start trying them.

// Bank Solution:

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

bank.transfer("josh","jamie",90);

//try transfer
// transfer : function ( fromAccountName, toAccountName, amount) {
//
//   1.Find from account
//   2, Find to account1Iif either not found, cancel the transfer, print error)
//   3. withdraw from the from account, deposit to the to account.
