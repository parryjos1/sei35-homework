// ATM:

// Keep track of the checking and savings balances somewhere

const atm = {

  Checking: 500,

  Savings: 1000,

  // Add functionality so that a user can deposit money into one of the bank accounts.

  deposit: function(accountType, amount) {
    if (accountType === "Checking"){
      atm.Checking += amount;
      console.log (`The new balance of your checking account is now ${atm.Checking}`);
      console.log (`The new balance of your savings account is now ${atm.Savings}`);
      // return atm.Checking;
    } if (accountType === "Savings") {
      atm.Savings += amount;  // atm.Savings = atm.Savings + amount;
      console.log (`The new balance of your savings account is now ${atm.Savings}`)
      console.log (`The new balance of your checking account is now ${atm.Checking}`);
      // return atm.Savings;
    } else {
      console.log (`account not recognised, please check your details`)
      // return null;
    }
  },

// Add functionality so that a user can withdraw money from one of the bank accounts.

//Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.

  withdraw: function (accountType, amount) {
    // if amount is greater than the balance of both accounts, prevent user for withdrawing.
    if (amount > (atm.Checking + atm.Savings)){
      console.log (`insufficient funds`);
      // return;

  // These accounts have overdraft protection, so if a withdrawal can be covered by the balances in both accounts, take the checking balance down to $0 and take the rest of the withdrawal from the savings account.

    //if the account type is checking and the amount is greater than the balance of checking, subtract the amount and save in a variable. Change the balance of atm.checking to 0. Convert the negative balance in to a positive and subtract it from the balance of savings. Return both amounts. Repeat for same situation in savings.

  }

  if (accountType === "Checking" && amount > atm.Checking){
      let balance = atm.Checking - amount;
      // let balanceToSubtract = Math.abs(balance);
      atm.Checking = 0;
      atm.Savings += balance;

      // atm.Savings -= (amount - atm.Checking);
      // atm.Checking = 0;

      console.log (`The new balance of your checking account is now ${atm.Checking}`);
      console.log (`The new balance of your savings account is now ${atm.Savings}`);
      // return atm.Checking;
      // return atm.Savings;

    }

    if (accountType === "Savings" && amount > atm.Savings) {
      let balance = atm.Savings - amount;
      // let balanceToSubtract = Math.abs(balance);
      atm.Savings = 0;
      atm.Checking += balance;
      console.log (`The new balance of your checking account is now ${atm.Checking}`);
      console.log (`The new balance of your savings account is now ${atm.Savings}`);
      // return atm.Checking;
      // return atm.Savings;

  // Make sure there is overdraft protection going both ways.
  // if the account is checking and amount is less than checking, subtract the amount from checking.
    }

  if (accountType === "Checking" && amount <= atm.Checking){
      atm.Checking -= amount;
      console.log (`The new balance of your checking account is now ${atm.Checking}`);
      console.log (`The new balance of your savings account is now ${atm.Savings}`);
      // return atm.Checking;
      // return atm.Savings;

   // if the account is checking and amount is less than checking, subtract the amount from checking.

    }

    if (accountType === "Savings" && amount <= atm.Savings){
      atm.Savings -= amount;
      console.log (`The new balance of your checking account is now ${atm.Checking}`);
      console.log (`The new balance of your savings account is now ${atm.Savings}`);
      // return atm.Checking;
      // return atm.Savings;
    }

  } // withdraw()

};

//access id and update balances.

// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.

// //access the display and update change.

// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.


// When the balance of the bank account is $0 the background of that bank account should be red. It should be gray when there is money in the account.


// What happens when the user wants to withdraw more money from the checking account than is in the account?
