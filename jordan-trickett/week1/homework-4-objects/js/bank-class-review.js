console.log("Banks Class Review!!!");





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


// bank.accounts[ 0 ].name  - this will tell account name at index 0 in accounts array. []brackets because its an array, then . because its an object

const bank = {     // object containing

  accounts: [     // array
    {
      name: 'josh',
      balance: 100.0
    },
    {                 // containing objects
      name: 'luke',
      balance: 50.0
    },
    {
      name: 'irene',
      balance: 100.0
    },

  ], // array


  totalBalances: function(){
    let total = 0;

    for (var i = 0; i < this.accounts.length; i++) {    // use for loop because we are loop through array
      // console.log( this.accounts[i] );

      total += this.accounts[ i ].balance;         //notice combination of dot notation and array indexing again. adds to total set outside


    }; // for loop

    return total;   // has to happen at the end of the loop

  },//total balances


  getAccountByName: function ( accountName ) {     // this function will replace the deposit and withdrawal

    for (var i = 0; i < this.accounts.length; i++) {

      const currentAccount = this.accounts[ i ];        //stores current Index account object as currentAccount

          if ( accountName === currentAccount.name ){

              return currentAccount;

          }// if

    };//for

    return null;    // fail variable if no logs found

  }, //getAccountByName



  // below = deposit example with above function utlisied

  deposit: function ( accountName, amount ) {

      const account = this.getAccountByName( accountName ); //call the function to find object. using this as in object, and parameter

        if ( account !== null ){      // if account not null

          account.balance += amount;    // again . notation and amount is argument

          console.log('deposit successful');

          return account.balance;

        }; //if

  },// deposit





  // deposit function with full code

  // deposit: function ( accountName, amount ) {
  //
  //   //step 1) find the account object with matching name. looping because array with objects
  //
  //   for (var i = 0; i < this.accounts.length; i++) {
  //
  //     const currentAccount = this.accounts[ i ];        //stores current Index account object as currentAccount
  //
  //         if ( accountName === currentAccount.name ) {     //accounntName is argument that has passed through, currentAccount from loop . name because currentAccount is the object
  //           currentAccount.balance += amount;    // again . notation and amount is argument
  //
  //           console.log('deposit successful');
  //
  //           return currentAccount.balance;
  //
  //         }// if loop
  //
  //   }; // for loop
  //
  //   console.log('No account found');
  //
  // },// deposit


withdraw: function ( accountName, amount ) {

      const account = this.getAccountByName( accountName ); //call the function to find object. using this as in object, and parameter

        if ( account !== null ){      // if account not null

          if (account.balance - amount >= 0) {

            account.balance -= amount;    // again . notation and amount is argument

            console.log('withdrawal successful');

            return account.balance;

          } else {

            console.log('insufficient funds');
            return false;           //return value to indicate failure

          }// if sufficient funds


        }; //if account not null

  },// deposit



  // withdraw: function ( accountName, amount ) {
  //
  //   //step 1) find the account object with matching name. looping because array with objects
  //
  //   for (var i = 0; i < this.accounts.length; i++) {
  //
  //     const currentAccount = this.accounts[ i ];        //stores current Index account object as currentAccount
  //
  //         if ( accountName === currentAccount.name ) {     //accounntName is argument that has passed through, currentAccount from loop . name because currentAccount is the object
  //           currentAccount.balance -= amount;    // again . notation and amount is argument
  //
  //           console.log('withdrawal successful');
  //
  //           return currentAccount.balance;
  //
  //         }// if loop
  //
  //   }; // for loop
  //
  //   console.log('No account found');
  //
  // },// withdraw








};

bank.totalBalances();      // bank . because function is nested within the object
